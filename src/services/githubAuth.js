const { createAppAuth } = require('@octokit/auth-app');
const { Octokit } = require('@octokit/rest');
const github = require('@actions/github');
const core = require('@actions/core');

async function getAuthenticatedOctokit() {
    const appId = process.env.GH_APP_ID;
    const privateKey = process.env.GH_APP_PRIVATE_KEY;

    if (!appId || !privateKey) {
        core.setFailed('GitHub App credentials (GH_APP_ID, GH_APP_PRIVATE_KEY) or installation ID are missing.');
        return null;
    }

    const auth = createAppAuth({
        appId,
        privateKey,
    });

    const installationAuthentication = await auth({ type: 'installation' });
    return new Octokit({ auth: installationAuthentication.token });
}

module.exports = {
    getAuthenticatedOctokit,
};
