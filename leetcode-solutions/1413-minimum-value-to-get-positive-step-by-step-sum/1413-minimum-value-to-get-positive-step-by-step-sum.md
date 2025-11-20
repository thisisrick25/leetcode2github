---
number: 1413
slug: minimum-value-to-get-positive-step-by-step-sum
title: Minimum Value to Get Positive Step by Step Sum
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:18:12.375Z
---

# 1413. Minimum Value to Get Positive Step by Step Sum

**URL:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given an array of integers&nbsp;<code>nums</code>, you start with an initial <strong>positive</strong> value <em>startValue</em><em>.</em></p>

<p>In each iteration, you calculate the step by step sum of <em>startValue</em>&nbsp;plus&nbsp;elements in <code>nums</code>&nbsp;(from left to right).</p>

<p>Return the minimum <strong>positive</strong> value of&nbsp;<em>startValue</em> such that the step by step sum is never less than 1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-3,2,-3,4,2]
<strong>Output:</strong> 5
<strong>Explanation: </strong>If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
<strong>step by step sum</strong>
<strong>startValue = 4 | startValue = 5 | nums</strong>
  (4 <strong>-3</strong> ) = 1  | (5 <strong>-3</strong> ) = 2    |  -3
  (1 <strong>+2</strong> ) = 3  | (2 <strong>+2</strong> ) = 4    |   2
  (3 <strong>-3</strong> ) = 0  | (4 <strong>-3</strong> ) = 1    |  -3
  (0 <strong>+4</strong> ) = 4  | (1 <strong>+4</strong> ) = 5    |   4
  (4 <strong>+2</strong> ) = 6  | (5 <strong>+2</strong> ) = 7    |   2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Minimum start value should be positive. 
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,-2,-3]
<strong>Output:</strong> 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>


---

## Solutions

- [cpp](1413-minimum-value-to-get-positive-step-by-step-sum.cpp) — 2021-11-11T18:59:27.000Z

---

### cpp — 2021-11-11T18:59:27.000Z

- Runtime: 0 ms  
- Memory: 7.3 MB  

[View raw solution](1413-minimum-value-to-get-positive-step-by-step-sum.cpp)


```cpp
class Solution {
public:
    int minStartValue(vector<int>& nums) {
        auto sum = 0, min_sum = 0;
    for (auto n : nums) {
        sum += n;
        min_sum = min(min_sum, sum);
    }
    return 1 - min_sum;
    }
};
```

