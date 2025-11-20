---
number: 0136
slug: single-number
difficulty: Easy
languages: cpp
latest_solved_at: 2022-02-15T14:02:40.000Z
generated_at: 2025-11-20T18:55:47.785Z
---

# 0136. Single Number

**URL:** [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-02-15T14:02:40.000Z

---

## Problem Description

<p>Given a <strong>non-empty</strong>&nbsp;array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>

<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,2,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,1,2,1,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
	<li>Each element in the array appears twice except for one element which appears only once.</li>
</ul>


---

## Solutions

- [cpp](0136-single-number.cpp)

---

[View raw solution](0136-single-number.cpp)

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int output = 0;
        for(int i = 0; i<nums.size(); i++) {
            output ^= nums[i];
        }
        
        return output;
        
    }
};
```

