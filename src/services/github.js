const core = require("@actions/core");
const github = require("@actions/github");
const { getFileExtension } = require("../utils/file");
const { getQuestionNumber, getProblemDetails } = require("./leetcode");
const { generateMarkdown } = require("../utils/markdown");
const processing = require("../utils/processing");

async function commitFiles(
  octokit,
  submissions,
  destinationFolder,
  verbose,
  committer,
  author
) {
  const { owner, repo } = github.context.repo;

  const groupedByProblem = processing.groupSubmissionsByProblem(submissions);

  for (const [title_slug, problemSubmissions] of groupedByProblem.entries()) {
    const questionNumber = await getQuestionNumber(title_slug);
    const paddedQuestionNumber = questionNumber
      ? String(questionNumber).padStart(4, "0")
      : null;
    const full_title_slug = paddedQuestionNumber
      ? `${paddedQuestionNumber}-${title_slug}`
      : title_slug;

    // Fetch problem details
    const { title, difficulty, content } = await getProblemDetails(title_slug);

    const languages = problemSubmissions.map((s) => s.lang).join(", ");

    const markdownFilePath = `${destinationFolder}/${full_title_slug}/${full_title_slug}.md`;

    // Generate markdown using the helper
    const markdownContent = generateMarkdown({
      questionNumber,
      titleSlug: title_slug,
      title,
      difficulty,
      content,
      submissions: problemSubmissions,
    });

    // Check if the markdown file already exists and compare content
    let markdownFileSha;
    let existingMarkdownContent;
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: markdownFilePath,
      });
      markdownFileSha = data.sha;
      if (data.content) {
        existingMarkdownContent = Buffer.from(data.content, "base64").toString(
          "utf8"
        );
      }
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
      // File does not exist, which is fine
    }

    if (existingMarkdownContent === markdownContent) {
      core.info(
        `Markdown file ${markdownFilePath} is already up-to-date. Skipping.`
      );
    } else {
      core.info(`Committing file: ${markdownFilePath}`);
      if (verbose) {
        core.info(`File content:\r\n${markdownContent}`);
      }

      const markdownCommitMessage = paddedQuestionNumber
        ? `docs(${paddedQuestionNumber}): add solution for ${full_title_slug} [skip ci]`
        : `docs: add solution for ${full_title_slug} [skip ci]`;

      await octokit.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: markdownFilePath,
        message: markdownCommitMessage,
        content: Buffer.from(markdownContent).toString("base64"),
        sha: markdownFileSha,
        committer,
        author,
      });
    }

    // Now, commit individual solution files
    for (const submission of problemSubmissions) {
      const { lang, code } = submission;
      const fileExtension = getFileExtension(lang);
      const solutionFilePath = `${destinationFolder}/${full_title_slug}/${full_title_slug}.${fileExtension}`;

      // Check if the solution file already exists and compare content
      let solutionFileSha;
      let existingSolutionContent;
      try {
        const { data } = await octokit.rest.repos.getContent({
          owner,
          repo,
          path: solutionFilePath,
        });
        solutionFileSha = data.sha;
        if (data.content) {
          existingSolutionContent = Buffer.from(
            data.content,
            "base64"
          ).toString("utf8");
        }
      } catch (error) {
        if (error.status !== 404) {
          throw error;
        }
        // File does not exist, which is fine
      }

      if (existingSolutionContent === code) {
        core.info(
          `Solution file ${solutionFilePath} is already up-to-date. Skipping.`
        );
      } else {
        core.info(`Committing solution file: ${solutionFilePath}`);
        if (verbose) {
          core.info(`Solution file content:\r\n${code}`);
        }

        const solutionCommitMessage = paddedQuestionNumber
          ? `feat(${paddedQuestionNumber}): add ${lang} solution for ${full_title_slug} [skip ci]`
          : `feat: add ${lang} solution for ${full_title_slug} [skip ci]`;

        await octokit.rest.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: solutionFilePath,
          message: solutionCommitMessage,
          content: Buffer.from(code).toString("base64"),
          sha: solutionFileSha,
          committer,
          author,
        });
      }
    }
  }
}

module.exports = {
  commitFiles,
};
