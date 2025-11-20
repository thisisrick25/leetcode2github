---
number: 905
slug: sort-array-by-parity
title: Sort Array By Parity
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:16:26.478Z
---

# 0905. Sort Array By Parity

**URL:** [https://leetcode.com/problems/sort-array-by-parity/](https://leetcode.com/problems/sort-array-by-parity/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p>

<p>Return <em><strong>any array</strong> that satisfies this condition</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,2,4]
<strong>Output:</strong> [2,4,3,1]
<strong>Explanation:</strong> The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 5000</code></li>
</ul>


---

## Solutions

- [cpp](0905-sort-array-by-parity.cpp) — 2022-05-03T18:33:06.000Z

---

### cpp — 2022-05-03T18:33:06.000Z

- Runtime: 7 ms  
- Memory: 16.3 MB  

[View raw solution](0905-sort-array-by-parity.cpp)


```cpp
class Solution {
public:
    vector<int> sortArrayByParity(vector<int> &A) {
        for (int i = 0, j = 0; j < A.size(); j++)
            if (A[j] % 2 == 0)
                swap(A[i++], A[j]);
        return A;
    }
};
```

