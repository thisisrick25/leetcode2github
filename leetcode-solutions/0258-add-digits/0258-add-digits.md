---
number: 0258
slug: add-digits
difficulty: Easy
languages: cpp
latest_solved_at: 2022-02-08T08:49:49.000Z
generated_at: 2025-11-20T19:24:15.086Z
---

# 0258. Add Digits

**URL:** [https://leetcode.com/problems/add-digits/](https://leetcode.com/problems/add-digits/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-02-08T08:49:49.000Z

---

## Problem Description

<p>Given an integer <code>num</code>, repeatedly add all its digits until the result has only one digit, and return it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 38
<strong>Output:</strong> 2
<strong>Explanation:</strong> The process is
38 --&gt; 3 + 8 --&gt; 11
11 --&gt; 1 + 1 --&gt; 2 
Since 2 has only one digit, return it.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do it without any loop/recursion in <code>O(1)</code> runtime?</p>


---

## Solutions

[View raw cpp solution](0258-add-digits.cpp)

```cpp
class Solution {
public:
    int addDigits(int num) {
//         if(num < 10)
//             return num;
        
//         int sum = 0;
//         while(num) {
//             sum += num%10;
//             num /= 10;
//         }
        
//         if(sum<10)
//             return sum;
//         else
//             return addDigits(sum);
        
         return num - 9 * ((num-1)/9);
    }
};
```

