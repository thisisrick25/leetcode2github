---
number: 0069
slug: sqrtx
difficulty: Easy
languages: cpp
latest_solved_at: 2021-12-05T19:57:24.000Z
generated_at: 2025-11-20T19:24:57.214Z
---

# 0069. Sqrt(x)

**URL:** [https://leetcode.com/problems/sqrtx/](https://leetcode.com/problems/sqrtx/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-12-05T19:57:24.000Z

---

## Problem Description

<p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.</p>

<p>You <strong>must not use</strong> any built-in exponent function or operator.</p>

<ul>
	<li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 4 is 2, so we return 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0069-sqrtx.cpp)

```cpp
class Solution {
public:
    int mySqrt(int x) {
        if(x == 0)
            return 0;

  int left = 0, right = x, ans = 1;
  while(left <= right){
    // Prevent (left + right) overflow
    long long mid = left + (right - left) / 2;
      
    if(mid * mid == x){ return mid; }
      
    else if(mid * mid < x) { 
        ans = mid;
        left = mid + 1;
    }
      
    else { right = mid - 1; }
  }
        return ans;
    }
    
    // // ----newton
    // long r = x;
    // while (r*r > x)
    //     r = (r + x/r) / 2;
    // return r;
};
```

