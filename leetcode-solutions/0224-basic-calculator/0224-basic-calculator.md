---
number: 224
slug: basic-calculator
title: Basic Calculator
difficulty: Hard
languages: cpp
generated_at: 2025-11-20T18:19:52.354Z
---

# 0224. Basic Calculator

**URL:** [https://leetcode.com/problems/basic-calculator/](https://leetcode.com/problems/basic-calculator/)  
**Difficulty:** Hard  
**Languages:** cpp

---

## Problem Description

<p>Given a string <code>s</code> representing a valid expression, implement a basic calculator to evaluate it, and return <em>the result of the evaluation</em>.</p>

<p><strong>Note:</strong> You are <strong>not</strong> allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1 + 1&quot;
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot; 2-1 + 2 &quot;
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(1+(4+5+2)-3)+(6+8)&quot;
<strong>Output:</strong> 23
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists of digits, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, and <code>&#39; &#39;</code>.</li>
	<li><code>s</code> represents a valid expression.</li>
	<li><code>&#39;+&#39;</code> is <strong>not</strong> used as a unary operation (i.e., <code>&quot;+1&quot;</code> and <code>&quot;+(2 + 3)&quot;</code> is invalid).</li>
	<li><code>&#39;-&#39;</code> could be used as a unary operation (i.e., <code>&quot;-1&quot;</code> and <code>&quot;-(2 + 3)&quot;</code> is valid).</li>
	<li>There will be no two consecutive operators in the input.</li>
	<li>Every number and running calculation will fit in a signed 32-bit integer.</li>
</ul>


---

## Solutions

- [cpp](0224-basic-calculator.cpp) — 2021-09-11T21:44:59.000Z

---

### cpp — 2021-09-11T21:44:59.000Z

- Runtime: 9 ms  
- Memory: 8.1 MB  

[View raw solution](0224-basic-calculator.cpp)


```cpp
class Solution {
public:
    int calculate(string s) {
        int n = s.size(), result = 0, sign = 1;
        stack<int> stk;
        for (int i = 0; i < n; i++) {
            if (isdigit(s[i])) {
                int num = s[i] - '0';
                while (i + 1 < n && isdigit(s[i + 1])) {
                    num = num * 10 + (s[++i] - '0');
                }
                result += sign * num;
            } else if (s[i] == '+') {
                sign = 1;
            } else if (s[i] == '-') {
                sign = -1;
            } else if (s[i] == '(') {
                stk.push(result);
                stk.push(sign);
                result = 0;
                sign = 1;
            } else if (s[i] == ')') {
                result *= stk.top();
                stk.pop();
                result += stk.top();
                stk.pop();
            }
        }
        return result;
    }
};
```

