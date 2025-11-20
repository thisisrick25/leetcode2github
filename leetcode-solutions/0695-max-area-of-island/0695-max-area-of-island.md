---
number: 695
slug: max-area-of-island
title: Max Area of Island
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:19:20.164Z
---

# 0695. Max Area of Island

**URL:** [https://leetcode.com/problems/max-area-of-island/](https://leetcode.com/problems/max-area-of-island/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group of <code>1</code>&#39;s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.</p>

<p>The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.</p>

<p>Return <em>the maximum <strong>area</strong> of an island in </em><code>grid</code>. If there is no island, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" style="width: 500px; height: 310px;" />
<pre>
<strong>Input:</strong> grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The answer is not 11, because the island must be connected 4-directionally.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,0,0,0,0,0,0,0]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 50</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


---

## Solutions

- [cpp](0695-max-area-of-island.cpp) — 2021-09-27T20:54:50.000Z

---

### cpp — 2021-09-27T20:54:50.000Z

- Runtime: 12 ms  
- Memory: 23.2 MB  

[View raw solution](0695-max-area-of-island.cpp)


```cpp
class Solution {
public:
    int totalAreaOfIsland(vector<vector<int>>& grid, int i, int j) {
        int total = 1;
        
        if(i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size())
            return 0;
        
        if(grid[i][j] == 0)
            return 0;
        
        grid[i][j] = 0;
        
        int x[]={0,0,1,-1}, y[]={1,-1,0,0};
        
        for(int k = 0; k < 4; k++) {
            total += totalAreaOfIsland(grid, i + x[k], j + y[k]);
        }
        return total;
    }
    
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int rows = grid.size(), columns = grid[0].size();
        
        int area = 0;
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                if(grid[i][j] == 1) {
                    area = max(area, totalAreaOfIsland(grid, i, j));
                }
            }
        }
        return area;
    }
};


// class Solution {
//     int rows, cols;
//      int count = 0;
// public:
//     void totalAreaOfIsland(vector<vector<int>>& grid,int x, int y){
        
//         if( x< 0 || y<0 || x>= rows || y>= cols || grid[x][y] != 1)
//             return;
        
//         count++;
//         grid[x][y] = 0;
//         int dx[] = {1,-1,0,0};
//         int dy[] = {0,0,1,-1};
        
//         for(int i = 0; i<4; i++){
//             totalAreaOfIsland(grid, x + dx[i], y + dy[i]);
//         }
//     }
    
//     int maxAreaOfIsland(vector<vector<int>>& grid) {
//         rows = grid.size();
//         cols = grid[0].size();
        
//         int ans = 0;
//         for(int i = 0; i<rows; i++){
//             for(int j = 0; j<cols; j++){
//                 if(grid[i][j] == 1){
//                    count = 0;
//                     totalAreaOfIsland(grid,i,j);
//                     ans = max(ans,count);
//                 }
//             }
//         }
//         return ans;
//     }
// };
```

