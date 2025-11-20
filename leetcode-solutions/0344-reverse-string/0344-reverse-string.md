---
number: 0344
slug: reverse-string
difficulty: Easy
languages: cpp
latest_solved_at: 2022-04-01T19:46:46.000Z
generated_at: 2025-11-20T19:23:26.830Z
---

# 0344. Reverse String

**URL:** [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-04-01T19:46:46.000Z

---

## Problem Description

<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>

<p>You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with <code>O(1)</code> extra memory.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = ["h","e","l","l","o"]
<strong>Output:</strong> ["o","l","l","e","h"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = ["H","a","n","n","a","h"]
<strong>Output:</strong> ["h","a","n","n","a","H"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is a <a href="https://en.wikipedia.org/wiki/ASCII#Printable_characters" target="_blank">printable ascii character</a>.</li>
</ul>


---

## Solutions

[View raw cpp solution](0344-reverse-string.cpp)

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        while(left < right)
            swap(s[left++], s[right--]);
        
    }
};
```

