---
number: 1768
slug: merge-strings-alternately
title: Merge Strings Alternately
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:15:20.856Z
---

# 1768. Merge Strings Alternately

**URL:** [https://leetcode.com/problems/merge-strings-alternately/](https://leetcode.com/problems/merge-strings-alternately/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>

<p>Return <em>the merged string.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;abc&quot;, word2 = &quot;pqr&quot;
<strong>Output:</strong> &quot;apbqcr&quot;
<strong>Explanation:</strong>&nbsp;The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;ab&quot;, word2 = &quot;pqrs&quot;
<strong>Output:</strong> &quot;apbqrs&quot;
<strong>Explanation:</strong>&nbsp;Notice that as word2 is longer, &quot;rs&quot; is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;abcd&quot;, word2 = &quot;pq&quot;
<strong>Output:</strong> &quot;apbqcd&quot;
<strong>Explanation:</strong>&nbsp;Notice that as word1 is longer, &quot;cd&quot; is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li>
	<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul>

---

## Solutions

- [cpp](1768-merge-strings-alternately.cpp) — 2023-06-25T17:46:04.000Z

---

### cpp — 2023-06-25T17:46:04.000Z

- Runtime: 5 ms  
- Memory: 6.4 MB  

[View raw solution](1768-merge-strings-alternately.cpp)


```cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int x = word1.size(), y = word2.size();
        int i = 0;
        string merged;

        while(i < x || i < y) {
            if(i < x)
                merged += word1[i];
            if(i < y)
                merged += word2[i];
            i++;
        }
        return merged;
    }
};
```

