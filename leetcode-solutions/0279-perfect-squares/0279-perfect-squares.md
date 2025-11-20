---
number: 279
slug: perfect-squares
title: Perfect Squares
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:18:28.516Z
---

# 0279. Perfect Squares

**URL:** [https://leetcode.com/problems/perfect-squares/](https://leetcode.com/problems/perfect-squares/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer <code>n</code>, return <em>the least number of perfect square numbers that sum to</em> <code>n</code>.</p>

<p>A <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, <code>1</code>, <code>4</code>, <code>9</code>, and <code>16</code> are perfect squares while <code>3</code> and <code>11</code> are not.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 12
<strong>Output:</strong> 3
<strong>Explanation:</strong> 12 = 4 + 4 + 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 13
<strong>Output:</strong> 2
<strong>Explanation:</strong> 13 = 4 + 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0279-perfect-squares.cpp) — 2021-10-14T19:57:12.000Z

---

### cpp — 2021-10-14T19:57:12.000Z

- Runtime: 0 ms  
- Memory: 5.7 MB  

[View raw solution](0279-perfect-squares.cpp)


```cpp
class Solution {
public:
    int numSquares(int n) {
        while (n % 4 == 0)
        n /= 4;
    if (n % 8 == 7)
        return 4;
    bool min2 = false;
    for (int i=2; i<=n; ++i) {
        if (i > n/i)
            i = n;
        int e = 0;
        while (n % i == 0)
            n /= i, ++e;
        if (e % 2 && i % 4 == 3)
            return 3;
        min2 |= e % 2;
    }
    return 1 + min2;
    }
};
```

