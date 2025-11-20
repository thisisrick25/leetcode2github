---
number: 0231
slug: power-of-two
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-01T18:10:22.000Z
generated_at: 2025-11-20T18:57:43.603Z
---

# 0231. Power of Two

**URL:** [https://leetcode.com/problems/power-of-two/](https://leetcode.com/problems/power-of-two/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-01T18:10:22.000Z

---

## Problem Description

<p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of two. Otherwise, return <code>false</code></em>.</p>

<p>An integer <code>n</code> is a power of two, if there exists an integer <code>x</code> such that <code>n == 2<sup>x</sup></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> true
<strong>Explanation: </strong>2<sup>0</sup> = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 16
<strong>Output:</strong> true
<strong>Explanation: </strong>2<sup>4</sup> = 16
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without loops/recursion?

---

## Solutions

- [cpp](0231-power-of-two.cpp)

---

[View raw solution](0231-power-of-two.cpp)

```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        
        // if (n <= 0) return false;
        // while (n%2 == 0) n/=2;
        // return n == 1;
        
        // return n > 0 && !(n&(n-1));
        
        // return n > 0 && (1073741824 % n == 0);
        
        // return n > 0 && Integer.bitCount(n) == 1;
        
        return n > 0 && (n == 1 || (n%2 == 0 && isPowerOfTwo(n/2)));
    }
};
```

