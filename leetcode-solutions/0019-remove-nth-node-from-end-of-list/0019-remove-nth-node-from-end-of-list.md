---
number: 0019
slug: remove-nth-node-from-end-of-list
difficulty: Medium
languages: cpp
latest_solved_at: 2021-09-22T08:20:34.000Z
generated_at: 2025-11-20T19:26:12.429Z
---

# 0019. Remove Nth Node From End of List

**URL:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-09-22T08:20:34.000Z

---

## Problem Description

<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], n = 2
<strong>Output:</strong> [1,2,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1], n = 1
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2], n = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>sz</code>.</li>
	<li><code>1 &lt;= sz &lt;= 30</code></li>
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
	<li><code>1 &lt;= n &lt;= sz</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do this in one pass?</p>


---

## Solutions

[View raw cpp solution](0019-remove-nth-node-from-end-of-list.cpp)

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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *first = head, *second = head;

	    // move fast pointer to the n + 1 element
        for(int i = 0; i < n; i++)
            first = first -> next;
        
        // handle edge case: given n is always valid, 
        // if fast reached the end, we need to remove the first element
	    if(!first) // first == nullptr // if fast is already null, it means we have to delete head itself. So, just return next of head
            return head -> next;
        
        // move both pointers at the same time maintaing the difference
        while(first -> next) {
            first = first -> next;
            second = second -> next;
        }
        
        // slow will be pointing to the element before the one we want to remove
        second -> next = second -> next -> next;
        
        return head;
	    
    }
        
};

// class Solution {
// public:

// ListNode *removeNthFromEnd(ListNode *head, int &n)
// {
// 	if(head == NULL) // if end
// 		return NULL;

// 	head->next = removeNthFromEnd(head->next,n);// set to the next node
//     n--;
    
// 	if(n == 0) // do I need to remove this node
// 		return head->next;
// 	return head;
// }
// };
```

