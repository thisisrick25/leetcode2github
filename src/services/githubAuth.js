const { createAppAuth } = require('@octokit/auth-app');
const { Octokit } = require('@octokit/rest');
const github = require('@actions/github');
const core = require('@actions/core'); // Added this line

async function getAuthenticatedOctokit(appId, privateKey) {
    // Add these debug lines:
    core.debug(`DEBUG: appId received: ${appId}`);
    core.debug(`DEBUG: privateKey received (first 20 chars): ${privateKey ? privateKey.substring(0, 20) + '...' : 'undefined'}`);

    // 1. Authenticate as the app to get an app-level JWT
    const appAuth = createAppAuth({
        appId,
        privateKey,
    });
    const appAuthentication = await appAuth({ type: 'app' });
    const appOctokit = new Octokit({ auth: appAuthentication.token });

    // 2. Get the installation ID for the current repository
    const { owner, repo } = github.context.repo;

    let installationId;
    try {
        const { data: installation } = await appOctokit.request('GET /repos/{owner}/{repo}/installation', {
            owner,
            repo,
        });
        installationId = installation.id;
    } catch (error) {
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