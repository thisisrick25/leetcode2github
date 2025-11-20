---
number: 0082
slug: remove-duplicates-from-sorted-list-ii
difficulty: Medium
languages: cpp
latest_solved_at: 2022-03-09T20:40:22.000Z
generated_at: 2025-11-20T19:23:38.366Z
---

# 0082. Remove Duplicates from Sorted List II

**URL:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-03-09T20:40:22.000Z

---

## Problem Description

<p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg" style="width: 500px; height: 142px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,3,4,4,5]
<strong>Output:</strong> [1,2,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg" style="width: 500px; height: 205px;" />
<pre>
<strong>Input:</strong> head = [1,1,1,2,3]
<strong>Output:</strong> [2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li>
</ul>


---

## Solutions

[View raw cpp solution](0082-remove-duplicates-from-sorted-list-ii.cpp)

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
    ListNode* deleteDuplicates(ListNode* head) {
        //if head is NULL or just having a single node, simply return from here head 
        if(head == NULL || head->next == NULL) 
            return head;
        
        // creating our dummy node i.e prehead
        // we are giving it's value is -101, because see constraints
        // -100 <= Node.val <= 100
        ListNode* prehead = new ListNode(-101);
        
        prehead -> next = head; // prehead's next contain head
        
        ListNode* curr = prehead; // make a current pointer to move
        
        // while it not reaches to the end
        while(curr -> next != NULL && curr -> next -> next != NULL)
        {
            // if values are equal, now we have to delete values, till when they are equal
           if(curr -> next -> val == curr -> next -> next -> val)
           {
               // temp pointer to find upto when the va;ues are equal and delete that nodes which ar not be include in our answer
               ListNode* temp = curr -> next -> next;
               while(temp != NULL && curr -> next -> val == temp -> val)
               {
                   ListNode *anthortemp = temp;
                   temp = temp -> next;
                   delete anthortemp; // actually freeing up the memory
               }
               curr -> next = temp;
           }
           else // if values are not equal's then simply move curr to next
           {
               curr = curr -> next;
           }
        }
        
        // and at last, prehead's next contain head node, so return that
        return prehead -> next;
        
    }
};
```

