---
number: 0446
slug: arithmetic-slices-ii-subsequence
difficulty: Hard
languages: cpp
latest_solved_at: 2021-09-10T20:13:38.000Z
generated_at: 2025-11-20T19:26:37.973Z
---

# 0446. Arithmetic Slices II - Subsequence

**URL:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2021-09-10T20:13:38.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code>, return <em>the number of all the <strong>arithmetic subsequences</strong> of</em> <code>nums</code>.</p>

<p>A sequence of numbers is called arithmetic if it consists of <strong>at least three elements</strong> and if the difference between any two consecutive elements is the same.</p>

<ul>
	<li>For example, <code>[1, 3, 5, 7, 9]</code>, <code>[7, 7, 7, 7]</code>, and <code>[3, -1, -5, -9]</code> are arithmetic sequences.</li>
	<li>For example, <code>[1, 1, 2, 5, 7]</code> is not an arithmetic sequence.</li>
</ul>

<p>A <strong>subsequence</strong> of an array is a sequence that can be formed by removing some elements (possibly none) of the array.</p>

<ul>
	<li>For example, <code>[2,5,10]</code> is a subsequence of <code>[1,2,1,<strong><u>2</u></strong>,4,1,<u><strong>5</strong></u>,<u><strong>10</strong></u>]</code>.</li>
</ul>

<p>The test cases are generated so that the answer fits in <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,4,6,8,10]
<strong>Output:</strong> 7
<strong>Explanation:</strong> All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [7,7,7,7,7]
<strong>Output:</strong> 16
<strong>Explanation:</strong> Any subsequence of this array is arithmetic.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1&nbsp; &lt;= nums.length &lt;= 1000</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0446-arithmetic-slices-ii-subsequence.cpp)

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        
        long n = nums.size();
        long ans = 0;
        vector<unordered_map<long, long>> dp(n); // dp[i][d]
        for (long i = 1; i < n; i++) {
            for (long j = 0; j < i; j++) {
                long diff = (long)nums[i] - (long)nums[j];
                
                long cnt = dp[j].count(diff) ? dp[j][diff] : 0;
                dp[i][diff] += cnt + 1;
                ans += cnt;
            }
        }
        
        return ans;
        
    }
};
```

