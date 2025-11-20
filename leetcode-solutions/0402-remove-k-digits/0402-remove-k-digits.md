---
number: 0402
slug: remove-k-digits
difficulty: Medium
languages: cpp
latest_solved_at: 2022-02-18T20:45:26.000Z
generated_at: 2025-11-20T18:55:44.512Z
---

# 0402. Remove K Digits

**URL:** [https://leetcode.com/problems/remove-k-digits/](https://leetcode.com/problems/remove-k-digits/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-02-18T20:45:26.000Z

---

## Problem Description

<p>Given string num representing a non-negative integer <code>num</code>, and an integer <code>k</code>, return <em>the smallest possible integer after removing</em> <code>k</code> <em>digits from</em> <code>num</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;1432219&quot;, k = 3
<strong>Output:</strong> &quot;1219&quot;
<strong>Explanation:</strong> Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;10200&quot;, k = 1
<strong>Output:</strong> &quot;200&quot;
<strong>Explanation:</strong> Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;10&quot;, k = 2
<strong>Output:</strong> &quot;0&quot;
<strong>Explanation:</strong> Remove all the digits from the number and it is left with nothing which is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= num.length &lt;= 10<sup>5</sup></code></li>
	<li><code>num</code> consists of only digits.</li>
	<li><code>num</code> does not have any leading zeros except for the zero itself.</li>
</ul>


---

## Solutions

- [cpp](0402-remove-k-digits.cpp)

---

[View raw solution](0402-remove-k-digits.cpp)

```cpp
class Solution
{
public:
    string removeKdigits(string num, int k)
    {
        int n = num.size();
        if (n <= k) return "0";
        stack<char> s;
        for (auto &&c : num) {
            while (!s.empty() and k > 0 and s.top() > c) s.pop(), k--;
            if (!s.empty() or c != '0') s.push(c);
        }
        while (!s.empty() and k--) s.pop();
        if (s.empty()) return "0";
        while (!s.empty()) {
            num[n - 1] = s.top();
            s.pop(), n--;
        }
        return num.substr(n);
    }
};
```

