---
number: 0713
slug: subarray-product-less-than-k
difficulty: Medium
languages: cpp
latest_solved_at: 2022-06-04T11:42:09.000Z
generated_at: 2025-11-20T18:54:42.630Z
---

# 0713. Subarray Product Less Than K

**URL:** [https://leetcode.com/problems/subarray-product-less-than-k/](https://leetcode.com/problems/subarray-product-less-than-k/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-06-04T11:42:09.000Z

---

## Problem Description

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than </em><code>k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,5,2,6], k = 100
<strong>Output:</strong> 8
<strong>Explanation:</strong> The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3], k = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>6</sup></code></li>
</ul>


---

## Solutions

- [cpp](0713-subarray-product-less-than-k.cpp)

---

[View raw solution](0713-subarray-product-less-than-k.cpp)

```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        
        int begin = 0, end = 0, prod = 1, ans = 0;
        
        if(k <= 1)
            return 0;
        
        while(end < nums.size()) {
            prod *= nums[end];
            end++;
            
            while(prod >= k) {
                prod /= nums[begin];
                begin++;
            }
            ans += end - begin;
            
        }
        return ans;
    }
};
```

