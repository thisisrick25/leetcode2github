---
number: 974
slug: subarray-sums-divisible-by-k
title: Subarray Sums Divisible by K
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:15:37.210Z
---

# 0974. Subarray Sums Divisible by K

**URL:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/](https://leetcode.com/problems/subarray-sums-divisible-by-k/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of non-empty <strong>subarrays</strong> that have a sum divisible by </em><code>k</code>.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,5,0,-2,-3,1], k = 5
<strong>Output:</strong> 7
<strong>Explanation:</strong> There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5], k = 9
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>2 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0974-subarray-sums-divisible-by-k.cpp) — 2023-01-19T18:21:22.000Z

---

### cpp — 2023-01-19T18:21:22.000Z

- Runtime: 41 ms  
- Memory: 30.1 MB  

[View raw solution](0974-subarray-sums-divisible-by-k.cpp)


```cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& A, int K) {
        vector<int> count(K);
        count[0] = 1;
        int prefix = 0, res = 0;
        for (int a : A) {
            prefix = (prefix + a % K + K) % K;
            res += count[prefix]++;
        }
        return res;

    }
};
```

