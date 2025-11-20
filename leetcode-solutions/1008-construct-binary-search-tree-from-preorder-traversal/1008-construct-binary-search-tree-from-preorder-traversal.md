---
number: 1008
slug: construct-binary-search-tree-from-preorder-traversal
title: Construct Binary Search Tree from Preorder Traversal
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:18:29.861Z
---

# 1008. Construct Binary Search Tree from Preorder Traversal

**URL:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an array of integers preorder, which represents the <strong>preorder traversal</strong> of a BST (i.e., <strong>binary search tree</strong>), construct the tree and return <em>its root</em>.</p>

<p>It is <strong>guaranteed</strong> that there is always possible to find a binary search tree with the given requirements for the given test cases.</p>

<p>A <strong>binary search tree</strong> is a binary tree where for every node, any descendant of <code>Node.left</code> has a value <strong>strictly less than</strong> <code>Node.val</code>, and any descendant of <code>Node.right</code> has a value <strong>strictly greater than</strong> <code>Node.val</code>.</p>

<p>A <strong>preorder traversal</strong> of a binary tree displays the value of the node first, then traverses <code>Node.left</code>, then traverses <code>Node.right</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/03/06/1266.png" style="height: 386px; width: 590px;" />
<pre>
<strong>Input:</strong> preorder = [8,5,1,7,10,12]
<strong>Output:</strong> [8,5,10,1,7,null,12]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> preorder = [1,3]
<strong>Output:</strong> [1,null,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= preorder.length &lt;= 100</code></li>
	<li><code>1 &lt;= preorder[i] &lt;= 1000</code></li>
	<li>All the values of <code>preorder</code> are <strong>unique</strong>.</li>
</ul>


---

## Solutions

- [cpp](1008-construct-binary-search-tree-from-preorder-traversal.cpp) — 2021-10-14T04:56:03.000Z

---

### cpp — 2021-10-14T04:56:03.000Z

- Runtime: 4 ms  
- Memory: 13.8 MB  

[View raw solution](1008-construct-binary-search-tree-from-preorder-traversal.cpp)


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
    int i = 0;
    TreeNode* bstFromPreorder(vector<int>& A, int bound = INT_MAX) {
        if (i == A.size() || A[i] > bound) return NULL;
        TreeNode* root = new TreeNode(A[i++]);
        root->left = bstFromPreorder(A, root->val);
        root->right = bstFromPreorder(A, bound);
        return root;
    }
};
```

