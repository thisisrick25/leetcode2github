class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& g) {
        vector<string> ans;

        vector<int> idx(n);
        vector<int> lis;
        vector<int> dp(n, 0);

        int res = -1;
        int lastIdx = 0;

        for (int i = 0; i < n; ++i) {
            idx[i] = i;
        }

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (HammingDis(words[i], words[j]) && g[i] != g[j] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    idx[i] = j;
                    if (res < dp[i]) {
                        lastIdx = i;
                        res = dp[i];
                    }
                }
            }
        }

        while (true) {
            lis.push_back(lastIdx);
            if (lastIdx != idx[lastIdx]) {
                lastIdx = idx[lastIdx];
            } else {
                break;
            }
        }

        reverse(lis.begin(), lis.end());

        for (int i : lis) {
            ans.push_back(words[i]);
        }

        return ans;
    }

    bool HammingDis(string s1, string s2) {
        if (s1.length() != s2.length()) return false;
        int res = 0;
        for (int i = 0; i < s1.length(); ++i) {
            if (s1[i] != s2[i]) {
                res++;
            }
        }
        return res == 1;
    }
};