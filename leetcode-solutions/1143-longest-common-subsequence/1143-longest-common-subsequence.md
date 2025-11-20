---
number: 1143
slug: longest-common-subsequence
difficulty: Medium
languages: cpp
latest_solved_at: 2021-10-01T18:52:32.000Z
generated_at: 2025-11-20T18:57:38.001Z
---

# 1143. Longest Common Subsequence

**URL:** [https://leetcode.com/problems/longest-common-subsequence/](https://leetcode.com/problems/longest-common-subsequence/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-10-01T18:52:32.000Z

---

## Problem Description

<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. </em>If there is no <strong>common subsequence</strong>, return <code>0</code>.</p>

<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>

<ul>
	<li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde&quot;</code>.</li>
</ul>

<p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> text1 = &quot;abcde&quot;, text2 = &quot;ace&quot; 
<strong>Output:</strong> 3  
<strong>Explanation:</strong> The longest common subsequence is &quot;ace&quot; and its length is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;abc&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest common subsequence is &quot;abc&quot; and its length is 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;def&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no such common subsequence, so the result is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li>
	<li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</li>
</ul>


---

## Solutions

- [cpp](1143-longest-common-subsequence.cpp)

---

[View raw solution](1143-longest-common-subsequence.cpp)

```cpp
class Solution {
public:
    int longestCommonSubsequence(string &a, string &b) {
  if (a.size() < b.size()) return longestCommonSubsequence(b, a);
  vector<vector<short>> m(2, vector<short>(b.size() + 1));
  for (auto i = 1; i <= a.size(); ++i)
    for (auto j = 1; j <= b.size(); ++j)
      if (a[i - 1] == b[j - 1]) m[i % 2][j] = m[(i -1) % 2][j - 1] + 1;
      else m[i % 2][j] = max(m[(i - 1) % 2][j], m[i % 2][j - 1]);
  return m[a.size() % 2][b.size()];
}
};
```

