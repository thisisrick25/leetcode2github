---
number: 764
slug: largest-plus-sign
title: Largest Plus Sign
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:19:55.720Z
---

# 0764. Largest Plus Sign

**URL:** [https://leetcode.com/problems/largest-plus-sign/](https://leetcode.com/problems/largest-plus-sign/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>You are given an integer <code>n</code>. You have an <code>n x n</code> binary grid <code>grid</code> with all values initially <code>1</code>&#39;s except for some indices given in the array <code>mines</code>. The <code>i<sup>th</sup></code> element of the array <code>mines</code> is defined as <code>mines[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> where <code>grid[x<sub>i</sub>][y<sub>i</sub>] == 0</code>.</p>

<p>Return <em>the order of the largest <strong>axis-aligned</strong> plus sign of </em>1<em>&#39;s contained in </em><code>grid</code>. If there is none, return <code>0</code>.</p>

<p>An <strong>axis-aligned plus sign</strong> of <code>1</code>&#39;s of order <code>k</code> has some center <code>grid[r][c] == 1</code> along with four arms of length <code>k - 1</code> going up, down, left, and right, and made of <code>1</code>&#39;s. Note that there could be <code>0</code>&#39;s or <code>1</code>&#39;s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for <code>1</code>&#39;s.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/plus1-grid.jpg" style="width: 404px; height: 405px;" />
<pre>
<strong>Input:</strong> n = 5, mines = [[4,2]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> In the above grid, the largest plus sign can only be of order 2. One of them is shown.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/plus2-grid.jpg" style="width: 84px; height: 85px;" />
<pre>
<strong>Input:</strong> n = 1, mines = [[0,0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no plus sign, so return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>1 &lt;= mines.length &lt;= 5000</code></li>
	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt; n</code></li>
	<li>All the pairs <code>(x<sub>i</sub>, y<sub>i</sub>)</code> are <strong>unique</strong>.</li>
</ul>


---

## Solutions

- [cpp](0764-largest-plus-sign.cpp) — 2021-09-10T19:31:25.000Z

---

### cpp — 2021-09-10T19:31:25.000Z

- Runtime: 176 ms  
- Memory: 32.9 MB  

[View raw solution](0764-largest-plus-sign.cpp)


```cpp
class Solution {
public:
    int orderOfLargestPlusSign(int n, vector<vector<int>>& mines) {
        
        vector<vector<int>> mat(n, vector<int>(n, 1));
        
        // for (auto m : mines) {
        //     mat[m[0]][m[1]] = 0;
        // }
        
//         for(int i = 0;i< mines.size() ; i++)
//         {
//             mat[mines[i][0]][mines[i][1]] = 0;
//         }
        
//         vector<vector<int>> lef, rig, top, bot;
//         lef = rig = top = bot = mat;
        
//         for(int i=0;i<n;i++)
//         {
//             for(int j=0;j<n;j++)
//             {
//                 int x = n - i - 1;
//                 int y = n - j - 1;
//                 if( (i>0)   && top[i][j] )
//                     top[i][j] += top[i-1][j];
//                 if( (j>0)   && lef[i][j] ) 
//                     lef[i][j] += lef[i][j-1];
//                 if( (x<n-1) && bot[x][y] ) 
//                     bot[x][y] += bot[x+1][y];
//                 if( (y<n-1) && rig[x][y] ) 
//                     rig[x][y] += rig[x][y+1];
//             }
//         }
        
//         int ans = 0;
        
//         for(int i=0;i<n;i++)
//             for(int j=0;j<n;j++)
//                 ans = max(ans, min({lef[i][j], rig[i][j], top[i][j], bot[i][j]}));

//         return ans;
        
        
        int t[n][n];
        for(int i = 0; i<n; i++) {
            for(int j = 0; j<n; j++) {
                t[i][j] = n;
            }
        }
        
        for(vector<int>& vec : mines)
            t[vec[0]][vec[1]] = 0;
        
        int ans = 0;
        
        for(int i = 0; i<n; i++) {
            //t[][] will be updated to minimum of its left, right, up and down (count of 1s)
            
            //Look for longest streak of 1 at its left
            int left = 0;
            for(int j = 0; j < n; j++) {
                left = t[i][j] == 0 ? 0 : left+1;
                t[i][j] = min(t[i][j], left);
            }
            
            //Look for longest streak of 1 at its right
            int right = 0;
            for(int j = n-1; j>=0; j--) {
                right = t[i][j] == 0 ? 0 : right+1;
                t[i][j] = min(t[i][j], right);
            }
            
            //Look for longest streak of 1 at its up
            int up = 0;
            for(int k = 0; k < n; k++) {
                up = t[k][i] == 0 ? 0 : up+1;
                t[k][i] = min(t[k][i], up);
            }
            
            //Look for longest streak of 1 at its down
            int down = 0;
            for(int k = n-1; k >= 0; k--) {
                down = t[k][i] == 0 ? 0 : down+1;
                t[k][i] = min(t[k][i], down);
            }
        }
        
        //Finally, find the max one
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                ans = max(ans, t[i][j]);
            }
        }
        
        return ans;
        
        
    }
};
```

