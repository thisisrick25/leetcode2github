const core = require('@actions/core');
const github = require('@actions/github');

const { fetchSubmissions } = require('./services/leetcode');
const { commitFiles } = require('./services/github');
const { processSubmissions } = require('./utils/processing');

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

module.exports = {
  run,
};
