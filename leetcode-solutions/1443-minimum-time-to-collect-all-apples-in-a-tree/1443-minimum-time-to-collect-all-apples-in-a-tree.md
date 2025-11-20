---
number: 1443
slug: minimum-time-to-collect-all-apples-in-a-tree
title: Minimum Time to Collect All Apples in a Tree
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:15:45.947Z
---

# 1443. Minimum Time to Collect All Apples in a Tree

**URL:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an undirected tree consisting of <code>n</code> vertices numbered from <code>0</code> to <code>n-1</code>, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. <em>Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at <strong>vertex 0</strong> and coming back to this vertex.</em></p>

<p>The edges of the undirected tree are given in the array <code>edges</code>, where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> means that exists an edge connecting the vertices <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. Additionally, there is a boolean array <code>hasApple</code>, where <code>hasApple[i] = true</code> means that vertex <code>i</code> has an apple; otherwise, it does not have any apple.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_1.png" style="width: 300px; height: 212px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
<strong>Output:</strong> 8 
<strong>Explanation:</strong> The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_2.png" style="width: 300px; height: 212px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>hasApple.length == n</code></li>
</ul>


---

## Solutions

- [cpp](1443-minimum-time-to-collect-all-apples-in-a-tree.cpp) — 2023-01-11T20:40:26.000Z

---

### cpp — 2023-01-11T20:40:26.000Z

- Runtime: 193 ms  
- Memory: 60.4 MB  

[View raw solution](1443-minimum-time-to-collect-all-apples-in-a-tree.cpp)


```cpp
class Solution {
public:
    vector<vector<int>> adjList;
    int dfs(vector<bool>& hasApple,int node,int d,int prev)
    {
        int result=0,temp;
        for(int &i:adjList[node])
	    if(i!=prev)
	    {
	        temp=dfs(hasApple,i,d+1,node);
	        if(temp)			//If child has apples it'll return a non zero result which is the distance traveled upto that node.
		    result+=temp-d;
	    }
        return result||hasApple[node]?result+d:0;  //If nothing is added to result and current node doesnt have apple return 0 else return distances of children + current distance from root.
        
    }
    int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) 
    {
        adjList.resize(n);
        for(vector<int> &e:edges)
            adjList[e[0]].push_back(e[1]),adjList[e[1]].push_back(e[0]);
        return dfs(hasApple,0,0,-1)*2;     //Result is doubled the distance travelled as per our observation.
    }
};

```

