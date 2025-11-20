---
number: 61
slug: rotate-list
title: Rotate List
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:16:51.985Z
---

# 0061. Rotate List

**URL:** [https://leetcode.com/problems/rotate-list/](https://leetcode.com/problems/rotate-list/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given the <code>head</code> of a linked&nbsp;list, rotate the list to the right by <code>k</code> places.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg" style="width: 450px; height: 191px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [4,5,1,2,3]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg" style="width: 305px; height: 350px;" />
<pre>
<strong>Input:</strong> head = [0,1,2], k = 4
<strong>Output:</strong> [2,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 500]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li><code>0 &lt;= k &lt;= 2 * 10<sup>9</sup></code></li>
</ul>


---

## Solutions

- [cpp](0061-rotate-list.cpp) — 2022-03-11T20:27:52.000Z

---

### cpp — 2022-03-11T20:27:52.000Z

- Runtime: 0 ms  
- Memory: 11.8 MB  

[View raw solution](0061-rotate-list.cpp)


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
    ListNode* rotateRight(ListNode* head, int k) {
        if(!head)return head;
        int size = 1;
        ListNode* tmp = head;
        while(tmp->next){
            tmp = tmp->next;
            size++;
        }
        k = size - k % size;
        tmp->next = head;
        while(k--)tmp = tmp->next;
        head = tmp->next;
        tmp->next = NULL;
        return head;
        
    }
};
```

