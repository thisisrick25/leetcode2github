---
number: 35
slug: search-insert-position
title: Search Insert Position
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:42.441Z
---

# 0035. Search Insert Position

**URL:** [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>

<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 5
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 2
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 7
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0035-search-insert-position.cpp) — 2021-09-18T05:41:06.000Z

---

### cpp — 2021-09-18T05:41:06.000Z

- Runtime: 3 ms  
- Memory: 9.7 MB  

[View raw solution](0035-search-insert-position.cpp)


```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        
        int first = 0, last = nums.size() - 1;
        
        while(first <= last) {
            int mid = first + (last - first)/2;
            
            if(nums[mid] == target)
                return mid;
            else if(nums[mid] < target)
                first = mid + 1;
            else if(nums[mid] > target)
                last = mid - 1;
            
        }
        return first;
        
    }
};
```

