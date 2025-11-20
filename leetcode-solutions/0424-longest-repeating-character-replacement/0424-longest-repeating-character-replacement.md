---
number: 0424
slug: longest-repeating-character-replacement
difficulty: Medium
languages: cpp
latest_solved_at: 2022-09-22T08:46:38.000Z
generated_at: 2025-11-20T18:54:25.468Z
---

# 0424. Longest Repeating Character Replacement

**URL:** [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-09-22T08:46:38.000Z

---

## Problem Description

<p>You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most <code>k</code> times.</p>

<p>Return <em>the length of the longest substring containing the same letter you can get after performing the above operations</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ABAB&quot;, k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> Replace the two &#39;A&#39;s with two &#39;B&#39;s or vice versa.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;AABABBA&quot;, k = 1
<strong>Output:</strong> 4
<strong>Explanation:</strong> Replace the one &#39;A&#39; in the middle with &#39;B&#39; and form &quot;AABBBBA&quot;.
The substring &quot;BBBB&quot; has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only uppercase English letters.</li>
	<li><code>0 &lt;= k &lt;= s.length</code></li>
</ul>


---

## Solutions

- [cpp](0424-longest-repeating-character-replacement.cpp)

---

[View raw solution](0424-longest-repeating-character-replacement.cpp)

```cpp
class Solution {
public:
    int characterReplacement(string s, int k) {
        unordered_map<char, int> map;
        int start = 0, end = 0, maxOccur = INT_MIN, maxLen = INT_MIN;
        
        while(end < s.length()) {
            map[s[end]]++;
            maxOccur = max(maxOccur, map[s[end]]);
            end++;
            
            while(end - start - maxOccur > k) {
                map[s[start]]--;
                start++;
            }
            
            maxLen = max(maxLen, end - start);
        }
        return maxLen;
    }
};



```

