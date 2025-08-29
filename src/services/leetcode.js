const axios = require('axios');
const core = require('@actions/core');

async function fetchSubmissions(cookie, lastTimestamp = 0) {
  const LEETCODE_API_URL = 'https://leetcode.com/api/submissions/';
  const headers = {
    'Cookie': cookie,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Referer': 'https://leetcode.com/submissions/',
  };
  let allNewSubmissions = [];
  let offset = 0;
  const limit = 20; // API returns 20 submissions per page

  core.info(`Fetching submissions with timestamp greater than ${lastTimestamp}`);

  try {
    while (true) {
      const url = `${LEETCODE_API_URL}?offset=${offset}&limit=${limit}`;
      core.info(`Fetching from: ${url}`);
      const response = await axios.get(url, { headers });

      if (response.data && response.data.submissions_dump) {
        const submissions = response.data.submissions_dump;
        let foundOlderSubmission = false;

        const newSubmissions = [];
        for (const submission of submissions) {
          if (submission.timestamp > lastTimestamp) {
            newSubmissions.push(submission);
          } else {
            foundOlderSubmission = true;
            break;
          }
        }
        
        if (newSubmissions.length > 0) {
            allNewSubmissions = allNewSubmissions.concat(newSubmissions);
        }

        if (foundOlderSubmission || !response.data.has_next) {
          break; // Stop if we found an old submission or there are no more pages
        }

        offset += limit;
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5s delay
      } else {
        break; // No more submissions
      }
    }
    core.info(`Found ${allNewSubmissions.length} new submissions.`);
    return allNewSubmissions;
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
