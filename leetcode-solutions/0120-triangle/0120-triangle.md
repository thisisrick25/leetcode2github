---
number: 0120
slug: triangle
difficulty: Medium
languages: cpp
latest_solved_at: 2021-10-01T17:25:39.000Z
generated_at: 2025-11-20T19:25:48.824Z
---

# 0120. Triangle

**URL:** [https://leetcode.com/problems/triangle/](https://leetcode.com/problems/triangle/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-10-01T17:25:39.000Z

---

## Problem Description

<p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.</p>

<p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The triangle looks like:
   <u>2</u>
  <u>3</u> 4
 6 <u>5</u> 7
4 <u>1</u> 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> triangle = [[-10]]
<strong>Output:</strong> -10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= triangle.length &lt;= 200</code></li>
	<li><code>triangle[0].length == 1</code></li>
	<li><code>triangle[i].length == triangle[i - 1].length + 1</code></li>
	<li><code>-10<sup>4</sup> &lt;= triangle[i][j] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you&nbsp;do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?

---

## Solutions

[View raw cpp solution](0120-triangle.cpp)

```cpp
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
// 	// start from level 1 till the bottom-most level. Each time determine the best path to arrive at current cell
// 	for(int level = 1; level < size(triangle); level++) 
// 		for(int i = 0; i <= level; i++)  // triangle[level].size() == level + 1 (level starts from 0)
// 			// for the current level: 
// 			triangle[level][i] += min(triangle[level - 1][min(i, (int)size(triangle[level - 1]) - 1)], // we can either come from previous level and same index
// 			                          triangle[level - 1][max(i - 1, 0)]); // or the previous level and index-1
// 	// finally return the last element of the bottom level
// 	return *min_element(begin(triangle.back()), end(triangle.back())); 
// }
    
    
//     	for(int level = size(triangle) - 2; level >= 0; level--) // start from bottom-1 level
// 		for(int i = 0; i <= level; i++)
// 			 // for every cell: we could have moved here from same index or index+1 of next level
// 			triangle[level][i] += min(triangle[level + 1][i], triangle[level + 1][i + 1]);
// 	return triangle[0][0]; // lastly t[0][0] will contain accumulated sum of minimum path
// }
        
        
        int n;
        n=triangle.size();
        int dp[n][n];
        if(n==1)
            return triangle[0][0];
        for(int i=0;i<n;i++)
            for(int j=0;j<=i;j++)
                dp[i][j]=INT_MAX;
        for(int i=0;i<n-1;i++)
        {
            for(int j=0;j<=i;j++){
                if(i==0)
                {
                    dp[i][j]=triangle[0][0];
                    
                }
                //cout<<triangle[i][j]+triangle[i+1][j]<<" ";
                dp[i+1][j]=min(dp[i+1][j],dp[i][j]+triangle[i+1][j]);
                 //cout<<triangle[i][j]+triangle[i+1][j+1]<<" ";
                dp[i+1][j+1]=min(dp[i+1][j+1],dp[i][j]+triangle[i+1][j+1]);
            }
         
        }
        int mi;
        for(int i=0;i<n;i++){
            mi=min(mi,dp[n-1][i]);
        }
        return mi;
    }
};
```

