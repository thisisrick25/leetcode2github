const axios = require('axios');
const core = require('@actions/core');

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

module.exports = {
    fetchSubmissions,
    getQuestionNumber,
};
