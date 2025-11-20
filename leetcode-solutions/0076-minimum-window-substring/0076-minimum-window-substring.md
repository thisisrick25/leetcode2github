---
number: 0076
slug: minimum-window-substring
difficulty: Hard
languages: cpp
latest_solved_at: 2023-11-18T20:50:56.000Z
generated_at: 2025-11-20T19:21:17.678Z
---

# 0076. Minimum Window Substring

**URL:** [https://leetcode.com/problems/minimum-window-substring/](https://leetcode.com/problems/minimum-window-substring/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2023-11-18T20:50:56.000Z

---

## Problem Description

<p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <span data-keyword="substring-nonempty"><strong><em>substring</em></strong></span><em> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return <em>the empty string </em><code>&quot;&quot;</code>.</p>

<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;
<strong>Output:</strong> &quot;BANC&quot;
<strong>Explanation:</strong> The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;, t = &quot;a&quot;
<strong>Output:</strong> &quot;a&quot;
<strong>Explanation:</strong> The entire string s is the minimum window.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;, t = &quot;aa&quot;
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> Both &#39;a&#39;s from t must be included in the window.
Since the largest window of s only has one &#39;a&#39;, return empty string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == s.length</code></li>
	<li><code>n == t.length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p>


---

## Solutions

[View raw cpp solution](0076-minimum-window-substring.cpp)

```cpp
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> map;        
        
        for(auto c: t)
            map[c]++;
        
        int counter = t.size(), begin = 0, end = 0, ans = INT_MAX;
        int nextBegin = 0;
        
        while(end < s.size()){
            if(map[s[end]] > 0)
                counter--;
            map[s[end]]--;
            end++;
            
            while(counter == 0){
                if(end - begin < ans) {
                    nextBegin = begin;
                    ans = end - begin;
                }
                
                map[s[begin]]++;
                if(map[s[begin]] > 0)
                    counter++;
                begin++;
                
            }
        }
        return ans == INT_MAX ? "" : s.substr(nextBegin, ans);
    }
};
```

