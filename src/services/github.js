const core = require('@actions/core');
const github = require('@actions/github');
const { getFileExtension } = require('../utils/file');
const { getQuestionNumber } = require('./leetcode');
const processing = require('../utils/processing');

async function commitFiles(octokit, submissions, destinationFolder, verbose, committerName, committerEmail) {
  const { owner, repo } = github.context.repo;

  const committer = (committerName && committerEmail)
    ? { name: committerName, email: committerEmail }
    : { name: 'leetcode2github', email: 'action@github.com' };

  const groupedByProblem = processing.groupSubmissionsByProblem(submissions);

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
\`\`\`${fileExtension}
${code}
\`\`\`
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

    const markdownCommitMessage = paddedQuestionNumber
        ? `docs(${paddedQuestionNumber}): add solution for ${full_title_slug} [skip ci]`
        : `docs: add solution for ${full_title_slug} [skip ci]`;

    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: markdownFilePath,
      message: markdownCommitMessage,
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

        const solutionCommitMessage = paddedQuestionNumber
            ? `feat(${paddedQuestionNumber}): add ${lang} solution for ${full_title_slug} [skip ci]`
            : `feat: add ${lang} solution for ${full_title_slug} [skip ci]`;

        await octokit.rest.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: solutionFilePath,
            message: solutionCommitMessage,
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

module.exports = {
    commitFiles,
};
