---
number: 438
slug: find-all-anagrams-in-a-string
title: Find All Anagrams in a String
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:16:02.869Z
---

# 0438. Find All Anagrams in a String

**URL:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/](https://leetcode.com/problems/find-all-anagrams-in-a-string/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given two strings <code>s</code> and <code>p</code>, return an array of all the start indices of <code>p</code>&#39;s <span data-keyword="anagram">anagrams</span> in <code>s</code>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;
<strong>Output:</strong> [0,6]
<strong>Explanation:</strong>
The substring with start index = 0 is &quot;cba&quot;, which is an anagram of &quot;abc&quot;.
The substring with start index = 6 is &quot;bac&quot;, which is an anagram of &quot;abc&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abab&quot;, p = &quot;ab&quot;
<strong>Output:</strong> [0,1,2]
<strong>Explanation:</strong>
The substring with start index = 0 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 1 is &quot;ba&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 2 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, p.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>p</code> consist of lowercase English letters.</li>
</ul>


---

## Solutions

- [cpp](0438-find-all-anagrams-in-a-string.cpp) — 2022-09-16T08:36:40.000Z

---

### cpp — 2022-09-16T08:36:40.000Z

- Runtime: 35 ms  
- Memory: 8.9 MB  

[View raw solution](0438-find-all-anagrams-in-a-string.cpp)


```cpp
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        unordered_map<char, int> pHash;
        for(auto i : p)
            pHash[i]++;
        
        vector<int> result;
        
        int begin = 0, end = 0, count = p.size();
        
        while(end < s.size()) {
            if(pHash[s[end]] >= 1)
                count--;
            pHash[s[end]]--;
            end++;
            
            while(count == 0){
                if(pHash[s[begin]] >= 0)
                    count++;
                
                if(end - begin == p.size())
                    result.push_back(begin);
                
                pHash[s[begin]]++;
                begin++;
            }
        }
        return result;
    }
};
```

