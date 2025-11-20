const { getFileExtension } = require("./file");
const TurndownService = require("turndown");

const turndownService = new TurndownService();

function langToFence(lang) {
  // Map LeetCode language names to markdown fence languages
  const map = {
    Python3: "python",
    Python: "python",
    "C++": "cpp",
    C: "c",
    Java: "java",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Go: "go",
    Ruby: "ruby",
    Swift: "swift",
    Kotlin: "kotlin",
  };
  return map[lang] || lang.toLowerCase();
}

function formatTimestamp(ts) {
  // LeetCode timestamps are seconds since epoch
  try {
    return new Date(ts * 1000).toISOString();
  } catch {
    return String(ts);
  }
}

function generateMarkdown({
  questionNumber,
  titleSlug,
  title,
  difficulty,
  content,
  submissions,
}) {
  const padded = questionNumber
    ? String(questionNumber).padStart(4, "0")
    : null;
  const headerTitle = title || titleSlug;
  const problemUrl = `https://leetcode.com/problems/${titleSlug}/`;

  const languages = Array.from(new Set(submissions.map((s) => s.lang))).join(
    ", "
  );

  // Frontmatter metadata
  const meta = {
    number: questionNumber || null,
    slug: titleSlug,
    title: headerTitle,
    difficulty: difficulty || null,
    languages,
    generated_at: new Date().toISOString(),
  };

  let md = `---\n${Object.entries(meta)
    .map(([k, v]) => `${k}: ${v === null ? "" : v}`)
    .join("\n")}\n---\n\n`;

  md += `# ${padded ? `${padded}. ` : ""}${headerTitle}\n\n`;
  md += `**URL:** [${problemUrl}](${problemUrl})  \n`;
  if (difficulty) md += `**Difficulty:** ${difficulty}  \n`;
  md += `**Languages:** ${languages}\n\n---\n\n`;

  // Problem content (converted from HTML to Markdown)
  if (content) {
    md += `## Problem Description\n\n${content}\n\n---\n\n`;
  }

  // Solutions section
  md += `## Solutions\n\n`;
  for (const submission of submissions) {
    const ext = getFileExtension(submission.lang) || "txt";
    const fileName = `${padded ? `${padded}-${titleSlug}` : titleSlug}.${ext}`;
    md += `- [${submission.lang}](${fileName}) — ${formatTimestamp(
      submission.timestamp
    )}\n`;
  }
  md += `\n---\n\n`;

  // Detailed sections with code blocks
  for (const submission of submissions) {
    const fence = langToFence(submission.lang);
    const ext = getFileExtension(submission.lang) || "txt";
    const fileName = `${padded ? `${padded}-${titleSlug}` : titleSlug}.${ext}`;

    md += `### ${submission.lang} — ${formatTimestamp(
      submission.timestamp
    )}\n\n`;

    // Include runtime/memory if present
    if (submission.runtime || submission.memory) {
      md += `- Runtime: ${submission.runtime || "N/A"}  \n`;
      md += `- Memory: ${submission.memory || "N/A"}  \n\n`;
    }

    md += `[View raw solution](${fileName})\n\n`;
    md += `\n\`\`\`${fence}\n${submission.code}\n\`\`\`\n\n`;
  }

  return md;
}

module.exports = {
  generateMarkdown,
};
