---
number: 0847
slug: shortest-path-visiting-all-nodes
difficulty: Hard
languages: cpp
latest_solved_at: 2022-02-27T19:01:49.000Z
generated_at: 2025-11-20T19:23:51.038Z
---

# 0847. Shortest Path Visiting All Nodes

**URL:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2022-02-27T19:01:49.000Z

---

## Problem Description

<p>You have an undirected, connected graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given an array <code>graph</code> where <code>graph[i]</code> is a list of all the nodes connected with node <code>i</code> by an edge.</p>

<p>Return <em>the length of the shortest path that visits every node</em>. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg" style="width: 222px; height: 183px;" />
<pre>
<strong>Input:</strong> graph = [[1,2,3],[0],[0],[0]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One possible path is [1,0,2,0,3]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg" style="width: 382px; height: 222px;" />
<pre>
<strong>Input:</strong> graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One possible path is [0,1,4,2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == graph.length</code></li>
	<li><code>1 &lt;= n &lt;= 12</code></li>
	<li><code>0 &lt;= graph[i].length &lt;&nbsp;n</code></li>
	<li><code>graph[i]</code> does not contain <code>i</code>.</li>
	<li>If <code>graph[a]</code> contains <code>b</code>, then <code>graph[b]</code> contains <code>a</code>.</li>
	<li>The input graph is always connected.</li>
</ul>


---

## Solutions

[View raw cpp solution](0847-shortest-path-visiting-all-nodes.cpp)

```cpp
class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        if ((int)graph.size() == 1)
            return 0;
        int n = (int)graph.size();
        int endMask = (1 << n) - 1;
        vector<vector<bool>> seen(n, vector<bool>(endMask, false));

        queue<pair<int, int>> q;
        for (int i=0;i<n;i++) {
            q.push(make_pair(i, 1 << i));
            seen[i][1 << i] = true;
        }

        int steps = 0;

        while (!q.empty()) {
            int sz = (int)q.size();
            while (sz--) {
                auto top = q.front();
                q.pop();
                int node = top.first;
                int currentMask = top.second;
                for (int child : graph[node]) {
                    int nextMask = currentMask | (1 << child);
                    if (nextMask == endMask)
                        return 1 + steps;

                    if (!seen[child][nextMask]) {
                        seen[child][nextMask] = true;
                        q.push(make_pair(child, nextMask));
                    }
                }
            }
            steps++;
        }
        return -1;
    }
};
```

