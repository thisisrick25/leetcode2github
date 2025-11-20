---
number: 0074
slug: search-a-2d-matrix
difficulty: Medium
languages: cpp
latest_solved_at: 2022-03-31T15:50:18.000Z
generated_at: 2025-11-20T19:23:29.632Z
---

# 0074. Search a 2D Matrix

**URL:** [https://leetcode.com/problems/search-a-2d-matrix/](https://leetcode.com/problems/search-a-2d-matrix/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-03-31T15:50:18.000Z

---

## Problem Description

<p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:</p>

<ul>
	<li>Each row is sorted in non-decreasing order.</li>
	<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>

<p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.</p>

<p>You must write a solution in <code>O(log(m * n))</code> time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

[View raw cpp solution](0074-search-a-2d-matrix.cpp)

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();
        
        int start = 0;
        int end = m * n - 1;
        
        while (start <= end){
            int mid = start + (end - start) / 2;
            if(matrix[mid / n][mid % n] == target)
                return true;
            
            if (matrix[mid / n][mid % n] < target)
                start = mid + 1;
            else if (matrix[mid / n][mid % n] > target)
                end = mid - 1;
        }
        
        return false;
    }
};
```

