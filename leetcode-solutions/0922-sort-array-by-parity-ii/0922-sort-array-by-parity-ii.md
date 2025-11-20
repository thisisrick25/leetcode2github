---
number: 922
slug: sort-array-by-parity-ii
title: Sort Array By Parity II
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:15.214Z
---

# 0922. Sort Array By Parity II

**URL:** [https://leetcode.com/problems/sort-array-by-parity-ii/](https://leetcode.com/problems/sort-array-by-parity-ii/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given an array of integers <code>nums</code>, half of the integers in <code>nums</code> are <strong>odd</strong>, and the other half are <strong>even</strong>.</p>

<p>Sort the array so that whenever <code>nums[i]</code> is odd, <code>i</code> is <strong>odd</strong>, and whenever <code>nums[i]</code> is even, <code>i</code> is <strong>even</strong>.</p>

<p>Return <em>any answer array that satisfies this condition</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,2,5,7]
<strong>Output:</strong> [4,5,2,7]
<strong>Explanation:</strong> [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3]
<strong>Output:</strong> [2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>nums.length</code> is even.</li>
	<li>Half of the integers in <code>nums</code> are even.</li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow Up:</strong> Could you solve it in-place?</p>


---

## Solutions

- [cpp](0922-sort-array-by-parity-ii.cpp) — 2021-09-28T17:20:27.000Z

---

### cpp — 2021-09-28T17:20:27.000Z

- Runtime: 12 ms  
- Memory: 21.5 MB  

[View raw solution](0922-sort-array-by-parity-ii.cpp)


```cpp
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        
        int i = 0, j = 1; 
        
        while(i < nums.size() && j < nums.size()) {
            if(nums[i] % 2 == 0)
                i += 2;
            else if(nums[j] % 2 != 0)
                j += 2;
            else {
                swap(nums[i], nums[j]);
                j += 2;
                i += 2;
            }
        }
        return nums;
    }
};
```

