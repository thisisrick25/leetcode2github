---
number: 1337
slug: the-k-weakest-rows-in-a-matrix
difficulty: Easy
languages: cpp
latest_solved_at: 2022-03-28T12:55:15.000Z
generated_at: 2025-11-20T18:55:11.282Z
---

# 1337. The K Weakest Rows in a Matrix

**URL:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-03-28T12:55:15.000Z

---

## Problem Description

<p>You are given an <code>m x n</code> binary matrix <code>mat</code> of <code>1</code>&#39;s (representing soldiers) and <code>0</code>&#39;s (representing civilians). The soldiers are positioned <strong>in front</strong> of the civilians. That is, all the <code>1</code>&#39;s will appear to the <strong>left</strong> of all the <code>0</code>&#39;s in each row.</p>

<p>A row <code>i</code> is <strong>weaker</strong> than a row <code>j</code> if one of the following is true:</p>

<ul>
	<li>The number of soldiers in row <code>i</code> is less than the number of soldiers in row <code>j</code>.</li>
	<li>Both rows have the same number of soldiers and <code>i &lt; j</code>.</li>
</ul>

<p>Return <em>the indices of the </em><code>k</code><em> <strong>weakest</strong> rows in the matrix ordered from weakest to strongest</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
<strong>Output:</strong> [2,0,3]
<strong>Explanation:</strong> 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
<strong>Output:</strong> [0,2]
<strong>Explanation:</strong> 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>2 &lt;= n, m &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= m</code></li>
	<li><code>matrix[i][j]</code> is either 0 or 1.</li>
</ul>


---

## Solutions

- [cpp](1337-the-k-weakest-rows-in-a-matrix.cpp)

---

[View raw solution](1337-the-k-weakest-rows-in-a-matrix.cpp)

```cpp
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int n = mat.size();
        
        // count of 1 in ith row, {count,index};
        set<pair<int,int> > s;
        
        // set will automatically sort the pair {count, index} in ascending order.
        
        for(int i = 0; i<n; ++i)
        {
            int cnt = count(mat[i].begin(), mat[i].end(), 1);
            s.insert({cnt, i});
        }
        
        vector<int> ans;
        // first k weakest row is our answer 
        for(auto i : s)
        {
            if(k == 0)
                break;
            ans.push_back(i.second);
            --k;
        }
        
        return ans;
    }
};
```

