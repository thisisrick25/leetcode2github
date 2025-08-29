const core = require('@actions/core');
const github = require('@actions/github');

const { fetchSubmissions } = require('./services/leetcode');
const { commitFiles } = require('./services/github');
const { processSubmissions } = require('./utils/processing');
const { getAuthenticatedOctokit } = require('./services/githubAuth');

const STATE_FILE_PATH = '.leetcode-sync-state.json';

async function run() {
  try {
    // Get inputs
    const appId = core.getInput('app-id', { required: true });
    const privateKey = core.getInput('private-key', { required: true });
    const leetcodeSession = core.getInput('leetcode-session', { required: true });
    const leetcodeCsrftoken = core.getInput('leetcode-csrftoken', { required: true });
    const destinationFolder = core.getInput('destination-folder');
    const verbose = core.getInput('verbose') === 'true';
    const committerName = core.getInput('committer-name');
    const committerEmail = core.getInput('committer-email');

    const leetcodeCookie = `LEETCODE_SESSION=${leetcodeSession}; csrftoken=${leetcodeCsrftoken};`;

    const octokit = await getAuthenticatedOctokit(appId, privateKey);

    // 1. Get last timestamp from state file
    let lastTimestamp = 0;
    let stateFileSha;
    try {
        const { data } = await octokit.rest.repos.getContent({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            path: STATE_FILE_PATH,
        });
        if (data.content) {
            const content = Buffer.from(data.content, 'base64').toString('utf8');
            lastTimestamp = JSON.parse(content).lastTimestamp;
            stateFileSha = data.sha;
            core.info(`Last sync timestamp found: ${lastTimestamp}`);
        }
    } catch (error) {
        if (error.status !== 404) throw error;
        core.info('State file not found. This must be the first run.');
    }

    // 2. Fetch LeetCode submissions
    const submissions = await fetchSubmissions(leetcodeCookie, lastTimestamp);
    if (verbose && submissions.length > 0) {
      core.info('Fetched submissions:');
      core.info(JSON.stringify(submissions, null, 2));
    }

    // 3. Process submissions
    const processedSubmissions = processSubmissions(submissions);
    if (verbose && processedSubmissions.length > 0) {
      core.info('Processed submissions:');
      core.info(JSON.stringify(processedSubmissions, null, 2));
    }

    // 4. Commit files if there are new submissions
    if (processedSubmissions.length > 0) {
        core.info('Committing files to the repository...');
        await commitFiles(octokit, processedSubmissions, destinationFolder, verbose, committerName, committerEmail);

        // 5. Update state file
        core.info('Updating sync state file...');
        const newLastTimestamp = Math.max(...processedSubmissions.map(s => s.timestamp));
        const newState = { lastTimestamp: newLastTimestamp };
        const committer = (committerName && committerEmail)
            ? { name: committerName, email: committerEmail }
            : { name: 'leetcode2github', email: 'action@github.com' };

        await octokit.rest.repos.createOrUpdateFileContents({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            path: STATE_FILE_PATH,
            message: 'chore: update leetcode sync state [skip ci]',
            content: Buffer.from(JSON.stringify(newState, null, 2)).toString('base64'),
            sha: stateFileSha,
            committer,
            author: { name: github.context.actor, email: `${github.context.actor}@users.noreply.github.com` },
        });
    } else {
        core.info('No new submissions to sync.');
    }

    core.info('LeetCode sync completed successfully!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
