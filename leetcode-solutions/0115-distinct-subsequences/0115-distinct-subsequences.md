---
number: 0115
slug: distinct-subsequences
difficulty: Hard
languages: cpp
latest_solved_at: 2021-09-19T18:57:04.000Z
generated_at: 2025-11-20T18:58:21.653Z
---

# 0115. Distinct Subsequences

**URL:** [https://leetcode.com/problems/distinct-subsequences/](https://leetcode.com/problems/distinct-subsequences/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2021-09-19T18:57:04.000Z

---

## Problem Description

<p>Given two strings s and t, return <i>the number of distinct</i> <b><i>subsequences</i></b><i> of </i>s<i> which equals </i>t.</p>

<p>The test cases are generated so that the answer fits on a 32-bit signed integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;rabbbit&quot;, t = &quot;rabbit&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong>
As shown below, there are 3 ways you can generate &quot;rabbit&quot; from s.
<code><strong><u>rabb</u></strong>b<strong><u>it</u></strong></code>
<code><strong><u>ra</u></strong>b<strong><u>bbit</u></strong></code>
<code><strong><u>rab</u></strong>b<strong><u>bit</u></strong></code>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;babgbag&quot;, t = &quot;bag&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong>
As shown below, there are 5 ways you can generate &quot;bag&quot; from s.
<code><strong><u>ba</u></strong>b<u><strong>g</strong></u>bag</code>
<code><strong><u>ba</u></strong>bgba<strong><u>g</u></strong></code>
<code><u><strong>b</strong></u>abgb<strong><u>ag</u></strong></code>
<code>ba<u><strong>b</strong></u>gb<u><strong>ag</strong></u></code>
<code>babg<strong><u>bag</u></strong></code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 1000</code></li>
	<li><code>s</code> and <code>t</code> consist of English letters.</li>
</ul>


---

## Solutions

- [cpp](0115-distinct-subsequences.cpp)

---

[View raw solution](0115-distinct-subsequences.cpp)

```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
// 	//we use unsigned int because there is a case with a quite large data
//         vector<vector<unsigned int>> dp(t.size() + 1, vector<unsigned int>(s.size() + 1));
        
// 		//set as default value of  the first line as 1
//         for (int j = 0; j <= s.size(); j++)dp[0][j] = 1;

// //logic of the loop is above
//         for (int i = 1; i <= t.size(); i++) {
//             for (int j = 1; j <= s.size(); j++) {

// 					if (t[i - 1] == s[j - 1]) {
//                     dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
//                 }
//                 else {
//                     dp[i][j] = dp[i][j - 1];
//                 }
//             }
//         }
//         return dp[dp.size() - 1][dp[0].size() - 1];
        
        
        
        
        // int m = t.length(), n = s.length();
        // vector<long> cur(m + 1, 0);
        // cur[0] = 1;
        // for (int j = 1; j <= n; j++) {
        //     int pre = 1;
        //     for (int i = 1; i <= m; i++) {
        //         long temp = cur[i];
        //         cur[i] = cur[i] + (t[i - 1] == s[j - 1] ? pre : 0);
        //         pre = temp;
        //     }
        // }
        // return cur[m];
        
        
        int S = s.length();
        int T = t.length();
        
        
        vector<unsigned long long> dp(T+1, 0);
        dp[0] = 1;
        
        for(char ch: s) {
            for(int i=T; i > 0; --i) {
                if(t[i-1] == ch) {
                    dp[i] += dp[i-1];
                }
            }
        }

        return dp[T];
    }
};
```

