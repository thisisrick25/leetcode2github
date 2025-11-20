---
number: 20
slug: valid-parentheses
title: Valid Parentheses
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:14:09.420Z
---

# 0020. Valid Parentheses

**URL:** [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()[]{}&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;(]&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;([])&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 5:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;([)]&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>


---

## Solutions

- [cpp](0020-valid-parentheses.cpp) — 2024-04-17T16:04:11.000Z

---

### cpp — 2024-04-17T16:04:11.000Z

- Runtime: 3 ms  
- Memory: 7.5 MB  

[View raw solution](0020-valid-parentheses.cpp)


```cpp
class Solution {
public:
    bool isValid(string s) {
        vector<char> st;

        if(s.size() == 0)
            return true;

        for(char c : s) {
            if(c == '(' || c == '{' || c == '[')
                st.push_back(c);

            else {
                if(st.empty() ||
                (c == ')' && st.back() != '(') ||
                (c == '}' && st.back() != '{') ||
                (c == ']' && st.back() != '[')) {
                    return false;
                }
                st.pop_back();
            }
        }
        return st.empty();
    }
};
```

