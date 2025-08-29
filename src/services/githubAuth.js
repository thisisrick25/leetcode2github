const { createAppAuth } = require('@octokit/auth-app');
const { Octokit } = require('@octokit/rest');
const github = require('@actions/github');

async function getAuthenticatedOctokit(appId, privateKey) {
    // 1. Authenticate as the app to get an app-level JWT
    const appAuth = createAppAuth({
        appId,
        privateKey,
    });
    const appAuthentication = await appAuth({ type: 'app' });
    const appOctokit = new Octokit({ auth: appAuthentication.token });

    // 2. Get the installation ID for the current repository
    // This requires the owner and repo from the GitHub context
    // We'll assume github.context is available in main.js and passed here,
    // or we can get it from @actions/github directly if needed.
    // Let's import @actions/github here to make it self-contained.
    const { owner, repo } = github.context.repo;

    let installationId;
    try {
        const { data: installation } = await appOctokit.request('GET /repos/{owner}/{repo}/installation', {
            owner,
            repo,
        });
        installationId = installation.id;
    } catch (error) {
        // Handle cases where the app is not installed on this repo
        // or if there's an API error.
        console.error(`Failed to get installation ID for ${owner}/${repo}: ${error.message}`);
        throw new Error(`GitHub App not installed on this repository or API error.`);
    }

    // 3. Authenticate as the installation to get an installation access token
    const installationAuth = createAppAuth({
        appId,
        privateKey,
        installationId,
    });
    const installationAuthentication = await installationAuth({ type: 'installation' });

    // 4. Return Octokit instance authenticated with the installation token
    return new Octokit({ auth: installationAuthentication.token });
}

module.exports = {
    getAuthenticatedOctokit,
};
