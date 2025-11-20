---
number: 206
slug: reverse-linked-list
title: Reverse Linked List
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:06.791Z
---

# 0206. Reverse Linked List

**URL:** [https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [5,4,3,2,1]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" style="width: 182px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2]
<strong>Output:</strong> [2,1]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
	<li><code>-5000 &lt;= Node.val &lt;= 5000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?</p>


---

## Solutions

- [cpp](0206-reverse-linked-list.cpp) — 2021-10-01T10:37:41.000Z

---

### cpp — 2021-10-01T10:37:41.000Z

- Runtime: 15 ms  
- Memory: 8.4 MB  

[View raw solution](0206-reverse-linked-list.cpp)


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
// class Solution {
// public:
//     ListNode* reverseList(ListNode* head) {
        
//         // ListNode* prev=NULL;
//         // ListNode* cur=head;
//         // ListNode* n;
//         // while(cur!=NULL){
//         //     n=cur->next;
//         //     cur->next=prev;
//         //     prev=cur;
//         //     cur=n;
//         // }
//         // return prev;
        
//         ListNode* cur = NULL;
//         while (head) {
//             ListNode* next = head -> next;
//             head -> next = cur;
//             cur = head;
//             head = next;
//         }
//         return cur;
//     }
// };



class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        if (!head || !head->next)
            return head;
 
        ListNode* rest = reverseList(head->next);
        head->next->next = head;
 
        head->next = nullptr;
 
        return rest;
        
        
    }
};
```

