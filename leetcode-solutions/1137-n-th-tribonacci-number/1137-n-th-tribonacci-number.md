---
number: 1137
slug: n-th-tribonacci-number
title: N-th Tribonacci Number
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:24.421Z
---

# 1137. N-th Tribonacci Number

**URL:** [https://leetcode.com/problems/n-th-tribonacci-number/](https://leetcode.com/problems/n-th-tribonacci-number/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>The Tribonacci sequence T<sub>n</sub> is defined as follows:&nbsp;</p>

<p>T<sub>0</sub> = 0, T<sub>1</sub> = 1, T<sub>2</sub> = 1, and T<sub>n+3</sub> = T<sub>n</sub> + T<sub>n+1</sub> + T<sub>n+2</sub> for n &gt;= 0.</p>

<p>Given <code>n</code>, return the value of T<sub>n</sub>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 4
<strong>Explanation:</strong>
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 25
<strong>Output:</strong> 1389537
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 37</code></li>
	<li>The answer is guaranteed to fit within a 32-bit integer, ie. <code>answer &lt;= 2^31 - 1</code>.</li>
</ul>


---

## Solutions

- [cpp](1137-n-th-tribonacci-number.cpp) — 2021-09-24T14:26:24.000Z

---

### cpp — 2021-09-24T14:26:24.000Z

- Runtime: 0 ms  
- Memory: 5.9 MB  

[View raw solution](1137-n-th-tribonacci-number.cpp)


```cpp
class Solution {
public:
    int tribonacci(int n) {
        int a = 0, b = 1, c = 1, d = 0;
        
        if(n < 2)
            return n;
        
        while(n-- > 2) {
            d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        
        return c;
    }
};
```

