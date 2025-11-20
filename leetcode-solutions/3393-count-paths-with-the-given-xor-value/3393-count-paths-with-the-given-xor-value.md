---
number: 3393
slug: count-paths-with-the-given-xor-value
difficulty: Medium
languages: cpp
latest_solved_at: 2024-12-21T15:15:00.000Z
generated_at: 2025-11-20T19:20:52.155Z
---

# 3393. Count Paths With the Given XOR Value

**URL:** [https://leetcode.com/problems/count-paths-with-the-given-xor-value/](https://leetcode.com/problems/count-paths-with-the-given-xor-value/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2024-12-21T15:15:00.000Z

---

## Problem Description

<p>You are given a 2D integer array <code>grid</code> with size <code>m x n</code>. You are also given an integer <code>k</code>.</p>

<p>Your task is to calculate the number of paths you can take from the top-left cell <code>(0, 0)</code> to the bottom-right cell <code>(m - 1, n - 1)</code> satisfying the following <strong>constraints</strong>:</p>

<ul>
	<li>You can either move to the right or down. Formally, from the cell <code>(i, j)</code> you may move to the cell <code>(i, j + 1)</code> or to the cell <code>(i + 1, j)</code> if the target cell <em>exists</em>.</li>
	<li>The <code>XOR</code> of all the numbers on the path must be <strong>equal</strong> to <code>k</code>.</li>
</ul>

<p>Return the total number of such paths.</p>

<p>Since the answer can be very large, return the result <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[2, 1, 5], [7, 10, 0], [12, 6, 4]], k = 11</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong>&nbsp;</p>

<p>The 3 paths are:</p>

<ul>
	<li><code>(0, 0) &rarr; (1, 0) &rarr; (2, 0) &rarr; (2, 1) &rarr; (2, 2)</code></li>
	<li><code>(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2)</code></li>
	<li><code>(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)</code></li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1, 3, 3, 3], [0, 3, 3, 2], [3, 0, 1, 1]], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>

<p>The 5 paths are:</p>

<ul>
	<li><code>(0, 0) &rarr; (1, 0) &rarr; (2, 0) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3)</code></li>
	<li><code>(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3)</code></li>
	<li><code>(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (1, 3) &rarr; (2, 3)</code></li>
	<li><code>(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2) &rarr; (2, 3)</code></li>
	<li><code>(0, 0) &rarr; (0, 1) &rarr; (0, 2) &rarr; (1, 2) &rarr; (2, 2) &rarr; (2, 3)</code></li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1, 1, 1, 2], [3, 0, 3, 2], [3, 0, 2, 2]], k = 10</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m == grid.length &lt;= 300</code></li>
	<li><code>1 &lt;= n == grid[r].length &lt;= 300</code></li>
	<li><code>0 &lt;= grid[r][c] &lt; 16</code></li>
	<li><code>0 &lt;= k &lt; 16</code></li>
</ul>


---

## Solutions

[View raw cpp solution](3393-count-paths-with-the-given-xor-value.cpp)

```cpp
class Solution {
public:
    int countPathsWithXorValue(vector<vector<int>>& grid, int k) {
        const int MOD = 1e9 + 7;
        int m = grid.size();
        int n = grid[0].size();
        int maxXor = 15;
        
        vector<vector<vector<int>>> dp(m, vector<vector<int>>(n, vector<int>(maxXor + 1, 0)));
        
        dp[0][0][grid[0][0]] = 1;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int xorVal = 0; xorVal <= maxXor; xorVal++) {
                    if (dp[i][j][xorVal] > 0) {
                        if (j + 1 < n) {
                            int newXor = xorVal ^ grid[i][j + 1];
                            dp[i][j + 1][newXor] = (dp[i][j + 1][newXor] + dp[i][j][xorVal]) % MOD;
                        }
                        if (i + 1 < m) {
                            int newXor = xorVal ^ grid[i + 1][j];
                            dp[i + 1][j][newXor] = (dp[i + 1][j][newXor] + dp[i][j][xorVal]) % MOD;
                        }
                    }
                }
            }
        }
        
        return dp[m - 1][n - 1][k];
    }
};
```

