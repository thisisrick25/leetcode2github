---
number: 242
slug: valid-anagram
title: Valid Anagram
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:15:09.524Z
---

# 0242. Valid Anagram

**URL:** [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an <span data-keyword="anagram">anagram</span> of <code>s</code>, and <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;anagram&quot;, t = &quot;nagaram&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;rat&quot;, t = &quot;car&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>


---

## Solutions

- [cpp](0242-valid-anagram.cpp) — 2023-08-10T18:54:50.000Z

---

### cpp — 2023-08-10T18:54:50.000Z

- Runtime: 3 ms  
- Memory: 7.5 MB  

[View raw solution](0242-valid-anagram.cpp)


```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length())
            return false;
        
        int n = s.length();
        unordered_map<char, int> map;
        
        for (int i = 0; i < n; i++) {
            map[s[i]]++;
            map[t[i]]--;
        }
        for (auto i : map)
            if (i.second != 0)
                return false;
        return true;
    }
};

```

