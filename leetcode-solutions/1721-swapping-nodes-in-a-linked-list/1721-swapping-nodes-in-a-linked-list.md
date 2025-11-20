---
number: 1721
slug: swapping-nodes-in-a-linked-list
difficulty: Medium
languages: cpp
latest_solved_at: 2022-04-04T21:50:07.000Z
generated_at: 2025-11-20T18:54:54.967Z
---

# 1721. Swapping Nodes in a Linked List

**URL:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-04-04T21:50:07.000Z

---

## Problem Description

<p>You are given the <code>head</code> of a linked list, and an integer <code>k</code>.</p>

<p>Return <em>the head of the linked list after <strong>swapping</strong> the values of the </em><code>k<sup>th</sup></code> <em>node from the beginning and the </em><code>k<sup>th</sup></code> <em>node from the end (the list is <strong>1-indexed</strong>).</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/21/linked1.jpg" style="width: 400px; height: 112px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [1,4,3,2,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [7,9,6,6,7,8,3,0,9,5], k = 5
<strong>Output:</strong> [7,9,6,6,8,7,3,0,9,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
</ul>


---

## Solutions

- [cpp](1721-swapping-nodes-in-a-linked-list.cpp)

---

[View raw solution](1721-swapping-nodes-in-a-linked-list.cpp)

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *dummy = new ListNode(0);
        dummy->next = head;
        ListNode *pre_left =dummy ,*pre_right = dummy,*left = head ,*right =head;
        for(int i=1;i<k;i++){
            pre_left = left;
            left = left->next;
        }
        
        ListNode *null_checker = left;
        while(null_checker->next){
            pre_right = right;
            right = right->next;
            null_checker = null_checker->next;
        }
        
        if(left == right) return dummy->next;
        
        pre_left->next = right;
        pre_right->next = left;
        
        ListNode *remb = left->next;
        left->next = right->next;
        right->next = remb;
        
        return dummy->next;
    }
};
```

