---
number: 0876
slug: middle-of-the-linked-list
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-22T06:40:01.000Z
generated_at: 2025-11-20T19:26:13.891Z
---

# 0876. Middle of the Linked List

**URL:** [https://leetcode.com/problems/middle-of-the-linked-list/](https://leetcode.com/problems/middle-of-the-linked-list/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-22T06:40:01.000Z

---

## Problem Description

<p>Given the <code>head</code> of a singly linked list, return <em>the middle node of the linked list</em>.</p>

<p>If there are two middle nodes, return <strong>the second middle</strong> node.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg" style="width: 544px; height: 65px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5]
<strong>Output:</strong> [3,4,5]
<strong>Explanation:</strong> The middle node of the list is node 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg" style="width: 664px; height: 65px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5,6]
<strong>Output:</strong> [4,5,6]
<strong>Explanation:</strong> Since the list has two middle nodes with values 3 and 4, we return the second one.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[1, 100]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0876-middle-of-the-linked-list.cpp)

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
    ListNode* middleNode(ListNode* head) {
        
        // ListNode* p;
        // int count=0;
        // p=head;
        // while(p!=NULL){
        //     p=p->next;
        //     count++;
        // }
        // int mid=floor(count/2);
        // int tcount=0;
        // ListNode* q=head;
        // while(tcount<mid){
        //     q=q->next;
        //     tcount++;
        // }
        // return q;
        
        
        ListNode *slow = head, *fast = head;

        while(fast!=nullptr && fast->next!=nullptr)
        {
            fast = fast->next->next;
            slow = slow->next;
        }
        return slow;
    }
};
```

