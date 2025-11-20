---
number: 0189
slug: rotate-array
difficulty: Medium
languages: cpp
latest_solved_at: 2022-06-28T10:47:13.000Z
generated_at: 2025-11-20T18:54:37.761Z
---

# 0189. Rotate Array

**URL:** [https://leetcode.com/problems/rotate-array/](https://leetcode.com/problems/rotate-array/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-06-28T10:47:13.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>Output:</strong> [5,6,7,1,2,3,4]
<strong>Explanation:</strong>
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-100,3,99], k = 2
<strong>Output:</strong> [3,99,-1,-100]
<strong>Explanation:</strong> 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.</li>
	<li>Could you do it in-place with <code>O(1)</code> extra space?</li>
</ul>


---

## Solutions

- [cpp](0189-rotate-array.cpp)

---

[View raw solution](0189-rotate-array.cpp)

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector<int> temp(nums.size());
        
        for (int i = 0; i < nums.size(); i++) {
            temp[(i + k) % nums.size()] = nums[i];
        }
        for (int i = 0; i < nums.size(); i++) {
            nums[i] = temp[i];
        }
        // return;
    }
};
```

