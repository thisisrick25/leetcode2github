---
number: 0054
slug: spiral-matrix
difficulty: Medium
languages: cpp
latest_solved_at: 2021-09-27T21:47:03.000Z
generated_at: 2025-11-20T19:26:00.959Z
---

# 0054. Spiral Matrix

**URL:** [https://leetcode.com/problems/spiral-matrix/](https://leetcode.com/problems/spiral-matrix/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-09-27T21:47:03.000Z

---

## Problem Description

<p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0054-spiral-matrix.cpp)

```cpp
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
    int row=matrix.size(),col=matrix[0].size();
    vector<int> ans;
    if(row==1){
        for(int i=0;i<col;i++)
            ans.push_back(matrix[0][i]);
        return ans;
    }
    for(int i=0;i<row-1;i++){
        for(int j=i;j<col-i;j++){
            if(ans.size()==row*col)return ans;
            ans.push_back(matrix[i][j]);
        }
        for(int j=i+1;j<row-i;j++){
            if(ans.size()==row*col)return ans;
            ans.push_back(matrix[j][col-i-1]);
        }
        for(int j=col-2-i;j>=i;j--){
            if(ans.size()==row*col)return ans;
            ans.push_back(matrix[row-1-i][j]);
        }
        for(int j=row-2-i;j>i;j--){
            if(ans.size()==row*col)return ans;
            ans.push_back(matrix[j][i]);
        }
    }
return ans;
    }
};
```

