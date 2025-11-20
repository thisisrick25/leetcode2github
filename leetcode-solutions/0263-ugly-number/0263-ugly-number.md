---
number: 263
slug: ugly-number
title: Ugly Number
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:21.803Z
---

# 0263. Ugly Number

**URL:** [https://leetcode.com/problems/ugly-number/](https://leetcode.com/problems/ugly-number/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>An <strong>ugly number</strong> is a <em>positive</em> integer which does not have a prime factor other than 2, 3, and 5.</p>

<p>Given an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>is an <strong>ugly number</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 6
<strong>Output:</strong> true
<strong>Explanation:</strong> 6 = 2 &times; 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> 1 has no prime factors.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 14
<strong>Output:</strong> false
<strong>Explanation:</strong> 14 is not ugly since it includes the prime factor 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

- [cpp](0263-ugly-number.cpp) — 2021-09-26T12:15:25.000Z

---

### cpp — 2021-09-26T12:15:25.000Z

- Runtime: 4 ms  
- Memory: 5.7 MB  

[View raw solution](0263-ugly-number.cpp)


```cpp
class Solution {
public:
//     vector<int> primes = {2, 3, 5};
//     bool isUgly(int n) {
//         if (n < 1) 
//             return false;
//         for (int p: primes) {
            
//             while (n % p == 0) 
//                 n /= p;
//         }
        
//         if(n==1)
//             return true;
        
//         return false;
//     }
    
    
    bool isUgly(int n) {
        if(n==0)
            return false;
        while(n%2==0)
            n/=2;
        while(n%3==0)
            n/=3;
        while(n%5==0)
            n/=5;
        if(n==1)
            return true;
        return false;
    }
    
    
    
//     bool isUgly(int num) {
        
//         if(num<1)
//             return false;
//         else if(num==1)
//             return true;
//         else if(num%2==0)
//             return isUgly(num/2);
//         else if(num%3==0)
//             return isUgly(num/3);
//         else if(num%5==0)
//             return isUgly(num/5);
//         else
//             return false;
        
//     }
};
```

