---
number: 215
slug: kth-largest-element-in-an-array
title: Kth Largest Element in an Array
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:15:02.284Z
---

# 0215. Kth Largest Element in an Array

**URL:** [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>

<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>

<p>Can you solve it without sorting?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0215-kth-largest-element-in-an-array.cpp) — 2023-08-14T20:25:49.000Z

---

### cpp — 2023-08-14T20:25:49.000Z

- Runtime: 76 ms  
- Memory: 47.2 MB  

[View raw solution](0215-kth-largest-element-in-an-array.cpp)


```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        for (int num : nums) {
            pq.push(num);
            if (pq.size() > k) {
                pq.pop();
            }
        }
        return pq.top();
    }
};

```

