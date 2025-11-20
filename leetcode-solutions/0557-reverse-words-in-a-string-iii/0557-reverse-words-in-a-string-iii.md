---
number: 0557
slug: reverse-words-in-a-string-iii
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-21T07:36:27.000Z
generated_at: 2025-11-20T18:58:16.743Z
---

# 0557. Reverse Words in a String III

**URL:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/](https://leetcode.com/problems/reverse-words-in-a-string-iii/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-21T07:36:27.000Z

---

## Problem Description

<p>Given a string <code>s</code>, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Let&#39;s take LeetCode contest&quot;
<strong>Output:</strong> &quot;s&#39;teL ekat edoCteeL tsetnoc&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Mr Ding&quot;
<strong>Output:</strong> &quot;rM gniD&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> contains printable <strong>ASCII</strong> characters.</li>
	<li><code>s</code> does not contain any leading or trailing spaces.</li>
	<li>There is <strong>at least one</strong> word in <code>s</code>.</li>
	<li>All the words in <code>s</code> are separated by a single space.</li>
</ul>


---

## Solutions

- [cpp](0557-reverse-words-in-a-string-iii.cpp)

---

[View raw solution](0557-reverse-words-in-a-string-iii.cpp)

```cpp
static const auto io_sync_off = [](){
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    return nullptr;
}();

class Solution {
public:
    string reverseWords(string s) {
        int index = 0;
        for(int i = 0; i <= s.size(); i++)
        {
            if(s[i] == ' ' || i == s.size()) {
        //         for(int j = index, k = i-1; j < k; j++, k--) {
        //     char temp = s[j];
        //     s[j] = s[k];
        //     s[k] = temp;  
        // }
                    
                reverse(s.begin()+index, s.begin()+i);
                index = i+1;
            }
        }
        // reverse(s.begin()+index, s.end());
        return s;
    }
};
```

