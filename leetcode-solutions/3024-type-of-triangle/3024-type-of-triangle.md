---
number: 3024
slug: type-of-triangle
title: Type of Triangle
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:14:17.058Z
---

# 3024. Type of Triangle

**URL:** [https://leetcode.com/problems/type-of-triangle/](https://leetcode.com/problems/type-of-triangle/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of size <code>3</code> which can form the sides of a triangle.</p>

<ul>
	<li>A triangle is called <strong>equilateral</strong> if it has all sides of equal length.</li>
	<li>A triangle is called <strong>isosceles</strong> if it has exactly two sides of equal length.</li>
	<li>A triangle is called <strong>scalene</strong> if all its sides are of different lengths.</li>
</ul>

<p>Return <em>a string representing</em> <em>the type of triangle that can be formed </em><em>or </em><code>&quot;none&quot;</code><em> if it <strong>cannot</strong> form a triangle.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3,3]
<strong>Output:</strong> &quot;equilateral&quot;
<strong>Explanation:</strong> Since all the sides are of equal length, therefore, it will form an equilateral triangle.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,5]
<strong>Output:</strong> &quot;scalene&quot;
<strong>Explanation:</strong> 
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3. 
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums.length == 3</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


---

## Solutions

- [cpp](3024-type-of-triangle.cpp) — 2024-02-03T15:31:27.000Z

---

### cpp — 2024-02-03T15:31:27.000Z

- Runtime: 4 ms  
- Memory: 22.3 MB  

[View raw solution](3024-type-of-triangle.cpp)


```cpp
class Solution {
public:
    string triangleType(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        if(nums[0]==nums[1] && nums[1]==nums[2]){
            return "equilateral";
        }
        if (nums[0] + nums[1] > nums[2]) {
            if (nums[0] == nums[1] && nums[1] == nums[2]) {
                return "equilateral";
            } else if (nums[0] == nums[1] || nums[1] == nums[2]) {
                return "isosceles";
            } else {
                return "scalene";
            }
        } else {
            return "none";
        }
    }
};
```

