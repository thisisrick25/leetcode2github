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
    const committerName = core.getInput('committer-name');
    const committerEmail = core.getInput('committer-email');

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
    await commitFiles(octokit, processedSubmissions, destinationFolder, verbose, committerName, committerEmail);

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

function groupSubmissionsByProblem(submissions) {
    const problemMap = new Map();
    for (const submission of submissions) {
        const { title_slug } = submission;
        if (!problemMap.has(title_slug)) {
            problemMap.set(title_slug, []);
        }
        problemMap.get(title_slug).push(submission);
    }
    return problemMap;
}

async function getQuestionNumber(titleSlug) {
    const LEETCODE_GRAPHQL_URL = 'https://leetcode.com/graphql';
    const query = `
        query questionData($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            questionFrontendId
          }
        }
    `;
    const variables = {
        titleSlug
    };
    try {
        const response = await axios.post(LEETCODE_GRAPHQL_URL, { query, variables });
        if (response.data && response.data.data && response.data.data.question) {
            return response.data.data.question.questionFrontendId;
        }
        return null;
    } catch (error) {
        core.warning(`Failed to fetch question number for ${titleSlug}: ${error.message}`);
        return null;
    }
}

async function commitFiles(octokit, submissions, destinationFolder, verbose, committerName, committerEmail) {
  const { owner, repo } = github.context.repo;

  const committer = (committerName && committerEmail)
    ? { name: committerName, email: committerEmail }
    : { name: 'leetcode2github', email: 'action@github.com' };

  const groupedByProblem = groupSubmissionsByProblem(submissions);

  for (const [title_slug, problemSubmissions] of groupedByProblem.entries()) {
    const questionNumber = await getQuestionNumber(title_slug);
    const paddedQuestionNumber = questionNumber ? String(questionNumber).padStart(4, '0') : null;
    const full_title_slug = paddedQuestionNumber ? `${paddedQuestionNumber}-${title_slug}` : title_slug;

    const languages = problemSubmissions.map(s => s.lang).join(', ');

    const markdownFilePath = `${destinationFolder}/${full_title_slug}/${full_title_slug}.md`;
    
    let markdownContent = `# ${paddedQuestionNumber ? `${paddedQuestionNumber}. ` : ''}${title_slug}

`;

    for (const submission of problemSubmissions) {
        const { lang, code } = submission;
        const fileExtension = getFileExtension(lang);
        const solutionFileName = `${full_title_slug}.${fileExtension}`;

        markdownContent += `## ${lang}

`;
        markdownContent += `[View Solution](${solutionFileName})

`;
        markdownContent += `
${code}
`;
    }

    core.info(`Committing file: ${markdownFilePath}`);
    if (verbose) {
        core.info(`File content:
${markdownContent}`);
    }

    // Check if the markdown file already exists
    let markdownFileSha;
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: markdownFilePath,
      });
      markdownFileSha = data.sha;
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
      // File does not exist, which is fine
    }

    const commitMessage = paddedQuestionNumber
        ? `solved: ${paddedQuestionNumber} in ${languages}`
        : `solved: ${title_slug} in ${languages}`;

    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: markdownFilePath,
      message: commitMessage,
      content: Buffer.from(markdownContent).toString('base64'),
      sha: markdownFileSha,
      committer,
      author: {
        name: github.context.actor,
        email: `${github.context.actor}@users.noreply.github.com`,
      },
    });

    // Now, commit individual solution files
    for (const submission of problemSubmissions) {
        const { lang, code } = submission;
        const fileExtension = getFileExtension(lang);
        const solutionFilePath = `${destinationFolder}/${full_title_slug}/${full_title_slug}.${fileExtension}`;

        core.info(`Committing solution file: ${solutionFilePath}`);
        if (verbose) {
            core.info(`Solution file content:
${code}`);
        }

        // Check if the solution file already exists
        let solutionFileSha;
        try {
            const { data } = await octokit.rest.repos.getContent({
                owner,
                repo,
                path: solutionFilePath,
            });
            solutionFileSha = data.sha;
        } catch (error) {
            if (error.status !== 404) {
                throw error;
            }
            // File does not exist, which is fine
        }

        await octokit.rest.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: solutionFilePath,
            message: commitMessage, // Use the same commit message
            content: Buffer.from(code).toString('base64'),
            sha: solutionFileSha,
            committer,
            author: {
                name: github.context.actor,
                email: `${github.context.actor}@users.noreply.github.com`,
            },
        });
    }
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
