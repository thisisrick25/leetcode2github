---
number: 0290
slug: word-pattern
difficulty: Easy
languages: cpp
latest_solved_at: 2023-01-01T17:59:54.000Z
generated_at: 2025-11-20T19:22:49.639Z
---

# 0290. Word Pattern

**URL:** [https://leetcode.com/problems/word-pattern/](https://leetcode.com/problems/word-pattern/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2023-01-01T17:59:54.000Z

---

## Problem Description

<p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code>&nbsp;follows the same pattern.</p>

<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>. Specifically:</p>

<ul>
	<li>Each letter in <code>pattern</code> maps to <strong>exactly</strong> one unique word in <code>s</code>.</li>
	<li>Each unique word in <code>s</code> maps to <strong>exactly</strong> one letter in <code>pattern</code>.</li>
	<li>No two letters map to the same word, and no two words map to the same letter.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The bijection can be established as:</p>

<ul>
	<li><code>&#39;a&#39;</code> maps to <code>&quot;dog&quot;</code>.</li>
	<li><code>&#39;b&#39;</code> maps to <code>&quot;cat&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pattern.length &lt;= 300</code></li>
	<li><code>pattern</code> contains only lower-case English letters.</li>
	<li><code>1 &lt;= s.length &lt;= 3000</code></li>
	<li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li>
	<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li>
	<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li>
</ul>


---

## Solutions

[View raw cpp solution](0290-word-pattern.cpp)

```cpp
class Solution {
public:
    bool wordPattern(string pattern, string str) {
    map<char, int> p2i;
    map<string, int> w2i;
    istringstream in(str);
    int i = 0, n = pattern.size();
    for (string word; in >> word; ++i) {
        if (i == n || p2i[pattern[i]] != w2i[word])
            return false;
        p2i[pattern[i]] = w2i[word] = i + 1;
    }
    return i == n;
}
};
```

