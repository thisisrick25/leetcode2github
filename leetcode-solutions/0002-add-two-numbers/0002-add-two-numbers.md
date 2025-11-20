---
number: 0002
slug: add-two-numbers
difficulty: Medium
languages: cpp
latest_solved_at: 2021-10-25T17:33:51.000Z
generated_at: 2025-11-20T19:25:09.740Z
---

# 0002. Add Two Numbers

**URL:** [https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-10-25T17:33:51.000Z

---

## Problem Description

<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>


---

## Solutions

[View raw cpp solution](0002-add-two-numbers.cpp)

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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
// 		if (l1 == NULL)
//             return l2;
// 		else if (l2 == NULL)
//             return l1;
        
//         int sum = l1->val + l2->val;
// 		ListNode *p = new ListNode(sum % 10);
// 		p -> next = addTwoNumbers(l1 -> next, l2 -> next);
// 		if (sum >= 10)
//             p -> next = addTwoNumbers(p -> next, new ListNode(1));
// 		return p;
        
        ListNode* head= new ListNode();
    ListNode* temp=head;
    int carry=0;
    while(l1!=NULL || l2!=NULL || carry){
        int sum=0;
        if(l1!=NULL){
            sum+= l1->val;
            l1=l1->next;
        }
        if(l2!=NULL){
            sum+= l2->val;
            l2=l2->next;
        }
        sum+=carry;
        carry=sum/10;
        ListNode* node=new ListNode(sum%10);
        temp->next=node;
        temp=temp->next;
    }
    return head->next;
    }
};
```

