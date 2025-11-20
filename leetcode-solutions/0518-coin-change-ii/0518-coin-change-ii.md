---
number: 518
slug: coin-change-ii
title: Coin Change II
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:15:06.578Z
---

# 0518. Coin Change II

**URL:** [https://leetcode.com/problems/coin-change-ii/](https://leetcode.com/problems/coin-change-ii/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>

<p>Return <em>the number of combinations that make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>0</code>.</p>

<p>You may assume that you have an infinite number of each kind of coin.</p>

<p>The answer is <strong>guaranteed</strong> to fit into a signed <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> amount = 5, coins = [1,2,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> amount = 3, coins = [2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> the amount of 3 cannot be made up just with coins of 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> amount = 10, coins = [10]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 300</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 5000</code></li>
	<li>All the values of <code>coins</code> are <strong>unique</strong>.</li>
	<li><code>0 &lt;= amount &lt;= 5000</code></li>
</ul>


---

## Solutions

- [cpp](0518-coin-change-ii.cpp) — 2023-08-11T20:25:58.000Z

---

### cpp — 2023-08-11T20:25:58.000Z

- Runtime: 4 ms  
- Memory: 6.9 MB  

[View raw solution](0518-coin-change-ii.cpp)


```cpp
class Solution {
public:
    int change(int t, vector<int>& cs) {
  int dp[5001] = { 1 };
  for (auto c : cs)
    for (auto j = c; j <= t; ++j) dp[j] += dp[j - c];
  return dp[t];
}

};
```

