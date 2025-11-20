---
number: 1305
slug: all-elements-in-two-binary-search-trees
title: All Elements in Two Binary Search Trees
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:17:43.948Z
---

# 1305. All Elements in Two Binary Search Trees

**URL:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given two binary search trees <code>root1</code> and <code>root2</code>, return <em>a list containing all the integers from both trees sorted in <strong>ascending</strong> order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png" style="width: 457px; height: 207px;" />
<pre>
<strong>Input:</strong> root1 = [2,1,4], root2 = [1,0,3]
<strong>Output:</strong> [0,1,1,2,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png" style="width: 352px; height: 197px;" />
<pre>
<strong>Input:</strong> root1 = [1,null,8], root2 = [8,1]
<strong>Output:</strong> [1,1,8,8]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each tree is in the range <code>[0, 5000]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>


---

## Solutions

- [cpp](1305-all-elements-in-two-binary-search-trees.cpp) — 2022-01-26T20:06:39.000Z

---

### cpp — 2022-01-26T20:06:39.000Z

- Runtime: 286 ms  
- Memory: 84.2 MB  

[View raw solution](1305-all-elements-in-two-binary-search-trees.cpp)


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
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        stack<TreeNode *> st1, st2;
        vector<int> res;
        
        while(root1 || root2 || !st1.empty() || !st2.empty()){
            while(root1){
                st1.push(root1);
                root1 = root1->left;
            }
            while(root2){
                st2.push(root2);
                root2 = root2->left;
            }
            if(st2.empty() || (!st1.empty() && st1.top()->val <= st2.top()->val)){
                root1 = st1.top();
                st1.pop();
                res.push_back(root1->val);
                root1 = root1->right;
            }
            else{
                root2 = st2.top();
                st2.pop();
                res.push_back(root2->val);
                root2 = root2->right;
            }
        }
        return res;
    }
};
```

