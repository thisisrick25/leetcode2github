---
number: 0003
slug: longest-substring-without-repeating-characters
difficulty: Medium
languages: cpp
latest_solved_at: 2022-08-05T15:56:59.000Z
generated_at: 2025-11-20T19:23:02.385Z
---

# 0003. Longest Substring Without Repeating Characters

**URL:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-08-05T15:56:59.000Z

---

## Problem Description

<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword="substring-nonempty"><strong>substring</strong></span> without duplicate characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3. Note that <code>&quot;bca&quot;</code> and <code>&quot;cab&quot;</code> are also correct answers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>


---

## Solutions

[View raw cpp solution](0003-longest-substring-without-repeating-characters.cpp)

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;
        // vector<int> map(128, 0);
        int counter = 0, begin=0, end=0, ans=0;
        
        while(end < s.size()){
            if(map[s[end]] > 0)
                counter++;
            map[s[end]]++;
            end++;
            
            while(counter > 0){
                if(map[s[begin]] > 1)
                    counter--;
                map[s[begin]]--;
                begin++;
            }
            ans=max(ans, end-begin); //while valid, update ans
        }
        return ans;
    }
};
```

