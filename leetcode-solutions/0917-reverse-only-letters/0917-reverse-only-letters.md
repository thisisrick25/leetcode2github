---
number: 0917
slug: reverse-only-letters
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-14T10:11:25.000Z
generated_at: 2025-11-20T18:58:33.808Z
---

# 0917. Reverse Only Letters

**URL:** [https://leetcode.com/problems/reverse-only-letters/](https://leetcode.com/problems/reverse-only-letters/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-14T10:11:25.000Z

---

## Problem Description

<p>Given a string <code>s</code>, reverse the string according to the following rules:</p>

<ul>
	<li>All the characters that are not English letters remain in the same position.</li>
	<li>All the English letters (lowercase or uppercase) should be reversed.</li>
</ul>

<p>Return <code>s</code><em> after reversing it</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ab-cd"
<strong>Output:</strong> "dc-ba"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "a-bC-dEf-ghIj"
<strong>Output:</strong> "j-Ih-gfE-dCba"
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> s = "Test1ng-Leet=code-Q!"
<strong>Output:</strong> "Qedo1ct-eeLg=ntse-T!"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of characters with ASCII values in the range <code>[33, 122]</code>.</li>
	<li><code>s</code> does not contain <code>&#39;\&quot;&#39;</code> or <code>&#39;\\&#39;</code>.</li>
</ul>


---

## Solutions

- [cpp](0917-reverse-only-letters.cpp)

---

[View raw solution](0917-reverse-only-letters.cpp)

```cpp
class Solution {
public:
    string reverseOnlyLetters(string s) {
        int left=0,right=s.length()-1;
        while(left<right){
            if(isalpha(s[left]) && isalpha(s[right])){
                swap(s[left],s[right]);
                left++;
                right--;
            }else if(!isalpha(s[left]) && !isalpha(s[right])){
                left++;
                right--;
            }else if(!isalpha(s[left])){
                left++;
            }else 
                right--;
        }
        return s;
    }
};
```

