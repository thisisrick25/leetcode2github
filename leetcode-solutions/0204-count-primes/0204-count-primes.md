---
number: 0204
slug: count-primes
difficulty: Medium
languages: cpp
latest_solved_at: 2021-10-28T07:19:58.000Z
generated_at: 2025-11-20T18:57:01.034Z
---

# 0204. Count Primes

**URL:** [https://leetcode.com/problems/count-primes/](https://leetcode.com/problems/count-primes/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-10-28T07:19:58.000Z

---

## Problem Description

<p>Given an integer <code>n</code>, return <em>the number of prime numbers that are strictly less than</em> <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 0
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 5 * 10<sup>6</sup></code></li>
</ul>


---

## Solutions

- [cpp](0204-count-primes.cpp)

---

[View raw solution](0204-count-primes.cpp)

```cpp
// class Solution {
// public:
//     int countPrimes(int n) {
//         int c = 0;
//             while(n-- > 0) {
//                 if(isPrime(n))
//                     c++;
//             }
//         return c;
//     }
    
//     bool isPrime(int n)
//     {
//         if (n <= 1)
//             return false;
 
//         for (int i = 2; i < n; i++)
//             if (n % i == 0)
//                 return false;
  
//         return true;
//     }
    
// };

class Solution {
public:
    int countPrimes(int n) {
        if(n<2)
            return 0;
        vector<int> v(n,1);
        v[0]=0;
        v[1]=0;
        for(int i=0;i<sqrt(n);i++){
            if(v[i]==1){
                for(int j=2;j*i<n;j++){
                    v[i*j]=0;
                }
            }
        }
        return count(v.begin(),v.end(),1);
    }
};
```

