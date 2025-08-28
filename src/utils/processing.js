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

module.exports = {
    processSubmissions,
    groupSubmissionsByProblem,
};
