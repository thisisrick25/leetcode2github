---
number: 1071
slug: greatest-common-divisor-of-strings
title: Greatest Common Divisor of Strings
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:15:19.517Z
---

# 1071. Greatest Common Divisor of Strings

**URL:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/](https://leetcode.com/problems/greatest-common-divisor-of-strings/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>For two strings <code>s</code> and <code>t</code>, we say &quot;<code>t</code> divides <code>s</code>&quot; if and only if <code>s = t + t + t + ... + t + t</code> (i.e., <code>t</code> is concatenated with itself one or more times).</p>

<p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the largest string </em><code>x</code><em> such that </em><code>x</code><em> divides both </em><code>str1</code><em> and </em><code>str2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;ABCABC&quot;, str2 = &quot;ABC&quot;
<strong>Output:</strong> &quot;ABC&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;ABABAB&quot;, str2 = &quot;ABAB&quot;
<strong>Output:</strong> &quot;AB&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;LEET&quot;, str2 = &quot;CODE&quot;
<strong>Output:</strong> &quot;&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li>
	<li><code>str1</code> and <code>str2</code> consist of English uppercase letters.</li>
</ul>


---

## Solutions

- [cpp](1071-greatest-common-divisor-of-strings.cpp) — 2023-07-27T20:10:03.000Z

---

### cpp — 2023-07-27T20:10:03.000Z

- Runtime: 5 ms  
- Memory: 7 MB  

[View raw solution](1071-greatest-common-divisor-of-strings.cpp)


```cpp
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        return (str1 + str2 == str2 + str1)? 
        str1.substr(0, gcd(size(str1),size(str2))): "";
    }
};
```

