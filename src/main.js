const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function run() {
  try {
    // Get inputs
    const githubToken = core.getInput('github-token', { required: true });
    const leetcodeSession = core.getInput('leetcode-session', { required: true });
    const leetcodeCsrftoken = core.getInput('leetcode-csrftoken', { required: true });
    const destinationFolder = core.getInput('destination-folder');
    const verbose = core.getInput('verbose') === 'true';

    const leetcodeCookie = `LEETCODE_SESSION=${leetcodeSession}; csrftoken=${leetcodeCsrftoken};`;

    // 1. Fetch LeetCode submissions
    core.info('Fetching LeetCode submissions...');
    const submissions = await fetchSubmissions(leetcodeCookie);
    core.info(`Found ${submissions.length} submissions.`);
    if (verbose) {
      core.info('Fetched submissions:');
      core.info(JSON.stringify(submissions, null, 2));
    }

    // 2. Process submissions
    core.info('Processing submissions...');
    const processedSubmissions = processSubmissions(submissions);
    core.info(`Found ${processedSubmissions.length} unique accepted submissions.`);
    if (verbose) {
      core.info('Processed submissions:');
      core.info(JSON.stringify(processedSubmissions, null, 2));
    }

    // 3. Commit files
    core.info('Committing files to the repository...');
    const octokit = github.getOctokit(githubToken);
    await commitFiles(octokit, processedSubmissions, destinationFolder, verbose);

    core.info('LeetCode sync completed successfully!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function fetchSubmissions(cookie) {
  const LEETCODE_API_URL = 'https://leetcode.com/api/submissions/';
  const headers = {
    Cookie: cookie,
  };

  try {
    const response = await axios.get(LEETCODE_API_URL, { headers });
    if (response.data && response.data.submissions_dump) {
      return response.data.submissions_dump;
    }
    return [];
  } catch (error) {
    throw new Error(`Failed to fetch LeetCode submissions: ${error.message}`);
  }
}

function processSubmissions(submissions) {
  const acceptedSubmissions = submissions.filter(
    (submission) => submission.status_display === 'Accepted'
  );

  const groupedSubmissions = new Map();

  for (const submission of acceptedSubmissions) {
    const { title_slug, lang } = submission;
    const key = `${title_slug}-${lang}`;

    if (!groupedSubmissions.has(key) || submission.timestamp > groupedSubmissions.get(key).timestamp) {
      groupedSubmissions.set(key, submission);
    }
  }

  return Array.from(groupedSubmissions.values());
}

async function commitFiles(octokit, submissions, destinationFolder, verbose) {
  const { owner, repo } = github.context.repo;

  for (const submission of submissions) {
    const { title_slug, lang, code } = submission;
    const fileExtension = getFileExtension(lang);
    const filePath = `${destinationFolder}/${title_slug}.${fileExtension}`;

    core.info(`Committing file: ${filePath}`);
    if (verbose) {
        core.info(`File content:\n${code}`);
    }

    // Check if the file already exists
    let sha;
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: filePath,
      });
      sha = data.sha;
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
      // File does not exist, which is fine
    }

    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: `feat: Add ${title_slug} solution in ${lang}`,
      content: Buffer.from(code).toString('base64'),
      sha,
      committer: {
        name: 'LeetCode Sync Action',
        email: 'action@github.com',
      },
      author: {
        name: github.context.actor,
        email: `${github.context.actor}@users.noreply.github.com`,
      },
    });
  }
}

function getFileExtension(lang) {
    const langMap = {
        'bash': 'sh',
        'c': 'c',
        'cpp': 'cpp',
        'csharp': 'cs',
        'golang': 'go',
        'java': 'java',
        'javascript': 'js',
        'kotlin': 'kt',
        'mysql': 'sql',
        'mssql': 'sql',
        'oraclesql': 'sql',
        'php': 'php',
        'python': 'py',
        'python3': 'py',
        'ruby': 'rb',
        'rust': 'rs',
        'scala': 'scala',
        'swift': 'swift',
        'typescript': 'ts',
    };
    return langMap[lang] || 'txt';
}


module.exports = {
  run,
};
