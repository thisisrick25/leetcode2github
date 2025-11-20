---
number: 0463
slug: island-perimeter
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-04T18:42:39.000Z
generated_at: 2025-11-20T18:57:28.318Z
---

# 0463. Island Perimeter

**URL:** [https://leetcode.com/problems/island-perimeter/](https://leetcode.com/problems/island-perimeter/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-04T18:42:39.000Z

---

## Problem Description

<p>You are given <code>row x col</code> <code>grid</code> representing a map where <code>grid[i][j] = 1</code> represents&nbsp;land and <code>grid[i][j] = 0</code> represents water.</p>

<p>Grid cells are connected <strong>horizontally/vertically</strong> (not diagonally). The <code>grid</code> is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).</p>

<p>The island doesn&#39;t have &quot;lakes&quot;, meaning the water inside isn&#39;t connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don&#39;t exceed 100. Determine the perimeter of the island.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/12/island.png" style="width: 221px; height: 213px;" />
<pre>
<strong>Input:</strong> grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
<strong>Output:</strong> 16
<strong>Explanation:</strong> The perimeter is the 16 yellow stripes in the image above.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,0]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>row == grid.length</code></li>
	<li><code>col == grid[i].length</code></li>
	<li><code>1 &lt;= row, col &lt;= 100</code></li>
	<li><code>grid[i][j]</code> is <code>0</code> or <code>1</code>.</li>
	<li>There is exactly one island in <code>grid</code>.</li>
</ul>


---

## Solutions

- [cpp](0463-island-perimeter.cpp)

---

[View raw solution](0463-island-perimeter.cpp)

```cpp
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        
        if (grid.empty() || grid[0].empty())
            return 0;
        
        int x[] = {0, 0, 1, -1}, y[] = {1, -1, 0, 0};
        
        int row = grid.size(), col = grid[0].size(), perimeter = 0;
        for (int r = 0; r < row; ++r) {
            for (int c = 0; c < col; ++c) {
                if (grid[r][c] == 0)
                    continue; // Skip water cell
                perimeter += 4;
                for (int i = 0; i < 4; ++i) {
                    int nr = r + x[i], nc = c + y[i];
                    if (nr < 0 || nr == row || nc < 0 || nc == col || grid[nr][nc] == 0)
                        continue;
                    perimeter -= 1;
                }
            }
        }
        return perimeter;
        
    }
};
```

