---
number: 0617
slug: merge-two-binary-trees
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-28T17:49:22.000Z
generated_at: 2025-11-20T18:57:57.102Z
---

# 0617. Merge Two Binary Trees

**URL:** [https://leetcode.com/problems/merge-two-binary-trees/](https://leetcode.com/problems/merge-two-binary-trees/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-28T17:49:22.000Z

---

## Problem Description

<p>You are given two binary trees <code>root1</code> and <code>root2</code>.</p>

<p>Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.</p>

<p>Return <em>the merged tree</em>.</p>

<p><strong>Note:</strong> The merging process must start from the root nodes of both trees.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" style="width: 600px; height: 163px;" />
<pre>
<strong>Input:</strong> root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
<strong>Output:</strong> [3,4,5,5,4,null,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1], root2 = [1,2]
<strong>Output:</strong> [2,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both trees is in the range <code>[0, 2000]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0617-merge-two-binary-trees.cpp)

---

[View raw solution](0617-merge-two-binary-trees.cpp)

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if(!t1) return t2;
        if(!t2) return t1;
        t1->val+=t2->val;
        if(t2->left) t1->left = mergeTrees(t1->left,t2->left);
        if(t2->right) t1->right = mergeTrees(t1->right,t2->right);
        return t1;
    }
};
```

