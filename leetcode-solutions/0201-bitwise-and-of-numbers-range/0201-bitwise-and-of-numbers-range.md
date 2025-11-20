---
number: 201
slug: bitwise-and-of-numbers-range
title: Bitwise AND of Numbers Range
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:18:34.746Z
---

# 0201. Bitwise AND of Numbers Range

**URL:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/](https://leetcode.com/problems/bitwise-and-of-numbers-range/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

- [cpp](0201-bitwise-and-of-numbers-range.cpp) — 2021-10-10T20:11:59.000Z

---

### cpp — 2021-10-10T20:11:59.000Z

- Runtime: 25 ms  
- Memory: 6 MB  

[View raw solution](0201-bitwise-and-of-numbers-range.cpp)


```cpp
class Solution {
public:
    int rangeBitwiseAnd(int m, int n) {
        // edge case - zero AND anything will always stay zero
        if ((m == 0) || (n == 0)) return 0;
        
        // if there is a different amount of digits in binary - always will be zero
        if ((int)log2(m) != (int)log2(n)) return 0;
        
        // None of the above - not too many numbers left to calculate one by one...
        int res = m;
        for (long i = m; i <= n; i++)
            res &= i;
                
        return res;
    }
};
```

