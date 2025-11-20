---
number: 0704
slug: binary-search
difficulty: Easy
languages: cpp
latest_solved_at: 2022-03-26T16:17:47.000Z
generated_at: 2025-11-20T18:55:15.374Z
---

# 0704. Binary Search

**URL:** [https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-03-26T16:17:47.000Z

---

## Problem Description

<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>

<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 9
<strong>Output:</strong> 4
<strong>Explanation:</strong> 9 exists in nums and its index is 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 2
<strong>Output:</strong> -1
<strong>Explanation:</strong> 2 does not exist in nums so return -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></code></li>
	<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>


---

## Solutions

- [cpp](0704-binary-search.cpp)

---

[View raw solution](0704-binary-search.cpp)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        cout.tie(0);
        int first = 0, last = nums.size() - 1;
        while(first <= last)
        {
            int mid = last + (first - last)/2;
            if(nums[mid] == target)
                return mid;
            else if(nums[mid] > target)
                last = mid - 1;
            else
                first = mid + 1;
        }
        return -1;
        
    }
};
```

