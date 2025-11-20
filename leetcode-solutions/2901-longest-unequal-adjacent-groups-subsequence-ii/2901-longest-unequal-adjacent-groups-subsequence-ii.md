---
number: 2901
slug: longest-unequal-adjacent-groups-subsequence-ii
difficulty: Medium
languages: cpp
latest_solved_at: 2023-10-14T15:58:05.000Z
generated_at: 2025-11-20T19:21:33.509Z
---

# 2901. Longest Unequal Adjacent Groups Subsequence II

**URL:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-10-14T15:58:05.000Z

---

## Problem Description

<p>You are given a string array <code>words</code>, and an array <code>groups</code>, both arrays having length <code>n</code>.</p>

<p>The <strong>hamming distance</strong> between two strings of equal length is the number of positions at which the corresponding characters are <strong>different</strong>.</p>

<p>You need to select the <strong>longest</strong> <span data-keyword="subsequence-array">subsequence</span> from an array of indices <code>[0, 1, ..., n - 1]</code>, such that for the subsequence denoted as <code>[i<sub>0</sub>, i<sub>1</sub>, ..., i<sub>k-1</sub>]</code> having length <code>k</code>, the following holds:</p>

<ul>
	<li>For <strong>adjacent</strong> indices in the subsequence, their corresponding groups are <strong>unequal</strong>, i.e., <code>groups[i<sub>j</sub>] != groups[i<sub>j+1</sub>]</code>, for each <code>j</code> where <code>0 &lt; j + 1 &lt; k</code>.</li>
	<li><code>words[i<sub>j</sub>]</code> and <code>words[i<sub>j+1</sub>]</code> are <strong>equal</strong> in length, and the <strong>hamming distance</strong> between them is <code>1</code>, where <code>0 &lt; j + 1 &lt; k</code>, for all indices in the subsequence.</li>
</ul>

<p>Return <em>a string array containing the words corresponding to the indices <strong>(in order)</strong> in the selected subsequence</em>. If there are multiple answers, return <em>any of them</em>.</p>

<p><strong>Note:</strong> strings in <code>words</code> may be <strong>unequal</strong> in length.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block" style="border-color: var(--border-tertiary); border-left-width: 2px; color: var(--text-secondary); font-size: .875rem; margin-bottom: 1rem; margin-top: 1rem; overflow: visible; padding-left: 1rem;">
<p><strong>Input: </strong><span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;">words = [&quot;bab&quot;,&quot;dab&quot;,&quot;cab&quot;], groups = [1,2,2]</span></p>

<p><strong>Output: </strong><span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;">[&quot;bab&quot;,&quot;cab&quot;]</span></p>

<p><strong>Explanation: </strong>A subsequence that can be selected is <code>[0,2]</code>.</p>

<ul>
	<li><code>groups[0] != groups[2]</code></li>
	<li><code>words[0].length == words[2].length</code>, and the hamming distance between them is 1.</li>
</ul>

<p>So, a valid answer is <code>[words[0],words[2]] = [&quot;bab&quot;,&quot;cab&quot;]</code>.</p>

<p>Another subsequence that can be selected is <code>[0,1]</code>.</p>

<ul>
	<li><code>groups[0] != groups[1]</code></li>
	<li><code>words[0].length == words[1].length</code>, and the hamming distance between them is <code>1</code>.</li>
</ul>

<p>So, another valid answer is <code>[words[0],words[1]] = [&quot;bab&quot;,&quot;dab&quot;]</code>.</p>

<p>It can be shown that the length of the longest subsequence of indices that satisfies the conditions is <code>2</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block" style="border-color: var(--border-tertiary); border-left-width: 2px; color: var(--text-secondary); font-size: .875rem; margin-bottom: 1rem; margin-top: 1rem; overflow: visible; padding-left: 1rem;">
<p><strong>Input: </strong><span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;">words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;], groups = [1,2,3,4]</span></p>

<p><strong>Output: </strong><span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;">[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;]</span></p>

<p><strong>Explanation: </strong>We can select the subsequence <code>[0,1,2,3]</code>.</p>

<p>It satisfies both conditions.</p>

<p>Hence, the answer is <code>[words[0],words[1],words[2],words[3]] = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;]</code>.</p>

<p>It has the longest length among all subsequences of indices that satisfy the conditions.</p>

<p>Hence, it is the only answer.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == words.length == groups.length &lt;= 1000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 10</code></li>
	<li><code>1 &lt;= groups[i] &lt;= n</code></li>
	<li><code>words</code> consists of <strong>distinct</strong> strings.</li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>


---

## Solutions

[View raw cpp solution](2901-longest-unequal-adjacent-groups-subsequence-ii.cpp)

```cpp
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
```

