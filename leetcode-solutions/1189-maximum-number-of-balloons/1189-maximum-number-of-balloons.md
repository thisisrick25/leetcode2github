---
number: 1189
slug: maximum-number-of-balloons
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-13T21:37:16.000Z
generated_at: 2025-11-20T19:26:33.223Z
---

# 1189. Maximum Number of Balloons

**URL:** [https://leetcode.com/problems/maximum-number-of-balloons/](https://leetcode.com/problems/maximum-number-of-balloons/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-13T21:37:16.000Z

---

## Problem Description

<p>Given a string <code>text</code>, you want to use the characters of <code>text</code> to form as many instances of the word <strong>&quot;balloon&quot;</strong> as possible.</p>

<p>You can use each character in <code>text</code> <strong>at most once</strong>. Return the maximum number of instances that can be formed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG" style="width: 132px; height: 35px;" /></strong></p>

<pre>
<strong>Input:</strong> text = &quot;nlaebolko&quot;
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG" style="width: 267px; height: 35px;" /></strong></p>

<pre>
<strong>Input:</strong> text = &quot;loonbalxballpoon&quot;
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;leetcode&quot;
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= text.length &lt;= 10<sup>4</sup></code></li>
	<li><code>text</code> consists of lower case English letters only.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as <a href="https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/" target="_blank"> 2287: Rearrange Characters to Make Target String.</a></p>


---

## Solutions

[View raw cpp solution](1189-maximum-number-of-balloons.cpp)

```cpp
class Solution {
public:
    int maxNumberOfBalloons(string text) {

        string str = "balloon";
        unordered_map<char, int> str_freq, txt_freq;
        for (auto s : str)
            str_freq[s]++;
        for (auto s : text)
            txt_freq[s]++;
        int prev = txt_freq['b']/str_freq['b'];
        for (auto e : str_freq) {
            int curr = txt_freq[e.first]/e.second;
            prev = min(prev, curr);
        }
        return prev;
    }
};
```

