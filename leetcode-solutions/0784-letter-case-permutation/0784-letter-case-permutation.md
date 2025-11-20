---
number: 784
slug: letter-case-permutation
title: Letter Case Permutation
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:19:05.273Z
---

# 0784. Letter Case Permutation

**URL:** [https://leetcode.com/problems/letter-case-permutation/](https://leetcode.com/problems/letter-case-permutation/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given a string <code>s</code>, you&nbsp;can transform every letter individually to be lowercase or uppercase to create another string.</p>

<p>Return <em>a list of all possible strings we could create</em>. Return the output in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a1b2&quot;
<strong>Output:</strong> [&quot;a1b2&quot;,&quot;a1B2&quot;,&quot;A1b2&quot;,&quot;A1B2&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;3z4&quot;
<strong>Output:</strong> [&quot;3z4&quot;,&quot;3Z4&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 12</code></li>
	<li><code>s</code> consists of lowercase English letters, uppercase English letters, and digits.</li>
</ul>


---

## Solutions

- [cpp](0784-letter-case-permutation.cpp) — 2021-10-01T11:18:05.000Z

---

### cpp — 2021-10-01T11:18:05.000Z

- Runtime: 8 ms  
- Memory: 11.9 MB  

[View raw solution](0784-letter-case-permutation.cpp)


```cpp
// class Solution {
//     void backtrack(string &s, int i, vector<string> &res) {
//         if (i == s.size()) {
//             res.push_back(s);
//             return;
//         }
//         backtrack(s, i + 1, res);
//         if (isalpha(s[i])) {
//             // toggle case
//             s[i] ^= (1 << 5);
//             backtrack(s, i + 1, res);
//         }
//     }
// public:
//     vector<string> letterCasePermutation(string S) {
//         vector<string> res;
//         backtrack(S, 0, res);
//         return res;
//     }
// };


class Solution {
public:
    /**  
            a1b2   i=0, when it's at a, since it's a letter, we have two branches: a, A
         /        \
       a1b2       A1b2 i=1 when it's at 1, we only have 1 branch which is itself
        |          |   
       a1b2       A1b2 i=2 when it's at b, we have two branches: b, B
       /  \        / \
      a1b2 a1B2  A1b2 A1B2 i=3  when it's at 2, we only have one branch.
       |    |     |     |
      a1b2 a1B2  A1b2  A1B2 i=4 = S.length(). End recursion, add permutation to ans. 
      
      During this process, we are changing the S char array itself
    */
    vector<string> letterCasePermutation( string S ) {
        vector<string> result;
        backtrace( S, 0, result );
        return result;
    }
    
private:
    void backtrace( string S, int i, vector<string> &result ) {
        if( i == S.length() ) {
            result.push_back( S );
            return; 
        } 
        if( 'a' <= S[i] && S[i] <= 'z' ) { // two branches if a letter
            backtrace( S, i + 1, result );
            S[i] = 'A' + S[i] - 'a';
            backtrace( S, i + 1, result );
        } else if ( 'A' <= S[i] && S[i] <= 'Z' ) { // two branch if a letter 
            backtrace( S, i + 1, result );
            S[i] = 'a' + S[i] - 'A';
            backtrace( S, i + 1, result );
        } else { // one branch if a digit
            backtrace( S, i + 1, result );
        }
        
    }
};
```

