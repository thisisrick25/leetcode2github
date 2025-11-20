---
number: 2246
slug: longest-path-with-different-adjacent-characters
difficulty: Hard
languages: cpp
latest_solved_at: 2023-01-13T19:54:16.000Z
generated_at: 2025-11-20T18:54:07.504Z
---

# 2246. Longest Path With Different Adjacent Characters

**URL:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2023-01-13T19:54:16.000Z

---

## Problem Description

<p>You are given a <strong>tree</strong> (i.e. a connected, undirected graph that has no cycles) <strong>rooted</strong> at node <code>0</code> consisting of <code>n</code> nodes numbered from <code>0</code> to <code>n - 1</code>. The tree is represented by a <strong>0-indexed</strong> array <code>parent</code> of size <code>n</code>, where <code>parent[i]</code> is the parent of node <code>i</code>. Since node <code>0</code> is the root, <code>parent[0] == -1</code>.</p>

<p>You are also given a string <code>s</code> of length <code>n</code>, where <code>s[i]</code> is the character assigned to node <code>i</code>.</p>

<p>Return <em>the length of the <strong>longest path</strong> in the tree such that no pair of <strong>adjacent</strong> nodes on the path have the same character assigned to them.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/25/testingdrawio.png" style="width: 201px; height: 241px;" />
<pre>
<strong>Input:</strong> parent = [-1,0,0,1,1,2], s = &quot;abacbe&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -&gt; 1 -&gt; 3. The length of this path is 3, so 3 is returned.
It can be proven that there is no longer path that satisfies the conditions. 
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/25/graph2drawio.png" style="width: 201px; height: 221px;" />
<pre>
<strong>Input:</strong> parent = [-1,0,0,0], s = &quot;aabc&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest path where each two adjacent nodes have different characters is the path: 2 -&gt; 0 -&gt; 3. The length of this path is 3, so 3 is returned.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == parent.length == s.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= parent[i] &lt;= n - 1</code> for all <code>i &gt;= 1</code></li>
	<li><code>parent[0] == -1</code></li>
	<li><code>parent</code> represents a valid tree.</li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


---

## Solutions

- [cpp](2246-longest-path-with-different-adjacent-characters.cpp)

---

[View raw solution](2246-longest-path-with-different-adjacent-characters.cpp)

```cpp
class Solution {
public:
    int longestPath(vector<int>& parent, string s) {
        int n = s.size(), res = 0;
        vector<vector<int>> children(n, vector<int>());
        for (int i = 1; i < n; ++i)
            children[parent[i]].push_back(i);
        dfs(children, s, res, 0);
        return res;
    }

    int dfs(vector<vector<int>>& children, string& s, int& res, int i) {
        int big1 = 0, big2 = 0;
        for (int& j : children[i]) {
            int cur = dfs(children, s, res, j);
            if (s[i] == s[j]) continue;
            if (cur > big2) big2 = cur;
            if (big2 > big1) swap(big1, big2);
        }
        res = max(res, big1 + big2 + 1);
        return big1 + 1;
    }
};
```

