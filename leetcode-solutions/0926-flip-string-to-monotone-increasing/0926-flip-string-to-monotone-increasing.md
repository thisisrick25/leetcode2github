---
number: 0926
slug: flip-string-to-monotone-increasing
difficulty: Medium
languages: cpp
latest_solved_at: 2023-01-17T16:31:31.000Z
generated_at: 2025-11-20T18:54:01.968Z
---

# 0926. Flip String to Monotone Increasing

**URL:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/](https://leetcode.com/problems/flip-string-to-monotone-increasing/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-01-17T16:31:31.000Z

---

## Problem Description

<p>A binary string is monotone increasing if it consists of some number of <code>0</code>&#39;s (possibly none), followed by some number of <code>1</code>&#39;s (also possibly none).</p>

<p>You are given a binary string <code>s</code>. You can flip <code>s[i]</code> changing it from <code>0</code> to <code>1</code> or from <code>1</code> to <code>0</code>.</p>

<p>Return <em>the minimum number of flips to make </em><code>s</code><em> monotone increasing</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00110&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> We flip the last digit to get 00111.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;010110&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 011111, or alternatively 000111.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00011000&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 00000000.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>


---

## Solutions

- [cpp](0926-flip-string-to-monotone-increasing.cpp)

---

[View raw solution](0926-flip-string-to-monotone-increasing.cpp)

```cpp
class Solution {
public:
    int minFlipsMonoIncr(string S) {
        int count_flip = 0, count_one = 0;
        for (auto i : S)
        { 
 //keep track of all one (we will use count_one in else condition if we need)  
//if we want flip one into 0
            if (i == '1')
                count_one++;
            else{
                count_flip++;
            count_flip = min(count_flip, count_one);
            }
        }
        return count_flip;
    }
};
```

