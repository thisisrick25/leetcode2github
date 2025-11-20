---
number: 581
slug: shortest-unsorted-continuous-subarray
title: Shortest Unsorted Continuous Subarray
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:16:24.592Z
---

# 0581. Shortest Unsorted Continuous Subarray

**URL:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code>, you need to find one <b>continuous subarray</b> such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.</p>

<p>Return <em>the shortest such subarray and output its length</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,6,4,8,10,9,15]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time complexity?

---

## Solutions

- [cpp](0581-shortest-unsorted-continuous-subarray.cpp) — 2022-05-03T19:33:06.000Z

---

### cpp — 2022-05-03T19:33:06.000Z

- Runtime: 40 ms  
- Memory: 26.5 MB  

[View raw solution](0581-shortest-unsorted-continuous-subarray.cpp)


```cpp
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int start = -1, end = -1,  max = INT_MIN;
        for(int i=0; i<nums.size();i++){
            if(max>nums[i]){
                if(start == -1)start = i-1;
                while(start-1>=0 && nums[start-1]>nums[i])start--;
                end = i+1;
            }
            else max = nums[i];
        }
        return end - start;   

    }
};
```

