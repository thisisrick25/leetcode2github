---
number: 567
slug: permutation-in-string
title: Permutation in String
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:17:26.297Z
---

# 0567. Permutation in String

**URL:** [https://leetcode.com/problems/permutation-in-string/](https://leetcode.com/problems/permutation-in-string/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> if <code>s2</code> contains a <span data-keyword="permutation-string">permutation</span> of <code>s1</code>, or <code>false</code> otherwise.</p>

<p>In other words, return <code>true</code> if one of <code>s1</code>&#39;s permutations is the substring of <code>s2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> s2 contains one permutation of s1 (&quot;ba&quot;).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>


---

## Solutions

- [cpp](0567-permutation-in-string.cpp) — 2022-02-11T20:30:07.000Z

---

### cpp — 2022-02-11T20:30:07.000Z

- Runtime: 4 ms  
- Memory: 7.1 MB  

[View raw solution](0567-permutation-in-string.cpp)


```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
        
        vector<int> s1hash(26,0);
        vector<int> s2hash(26,0);
        int s1len = s1.size();
        int s2len = s2.size();
        
        if(s1len>s2len)
            return false;
        
        int left=0,right=0;
        while(right<s1len)
        {
            s1hash[s1[right]-'a']++; //returns (ASCII value of s1.charAt(i) - ASCII value of 'a')
            s2hash[s2[right]-'a']++;
            right +=1;
        }
        right -=1;  // to point right to the end of the window
        while(right<s2len)
        {
            if(s1hash==s2hash)
                return true;
            right+=1;
            if(right!=s2len)
                s2hash[s2[right]-'a']++;
            s2hash[s2[left]-'a']--;
            left++;
        }
        return false;
        
    }
};





// class Solution {
// public:
//     bool checkInclusion(string s1, string s2) {
//         int map[26] = {0};
//         for(char c : s1) map[c - 'a']++;
//         int j = 0, i = 0, count_chars = s1.size();
//         while(j < s2.size()){
//             if(map[s2.at(j++) - 'a']-- > 0)
//                 count_chars--;
//             if(count_chars == 0) return true;
//             if(j - i == s1.size() && map[s2.at(i++) - 'a']++ >= 0)
//                 count_chars++;
//         }
//         return false;
//     }
// };






// class Solution {
// public:
//     bool check(vector<int>& A,vector<int>& B){
        
//         for(int i = 0;i<A.size();i++){
//             if(A[i] != B[i])
//                 return false;
//         }
//         return true;
//     }
//     bool checkInclusion(string B, string A) {
//         if(B.size()>A.size())
//             return false;
        
//         vector<int> countB(26,0);
//         vector<int> countA(26,0);
        
//         for(int i=0;i<B.size();i++){
//             countB[B[i]-'a']++;
//             countA[A[i]-'a']++;
//         }
        
//         if(check(countA,countB))
//             return true;
        
//         for(int i = B.size();i<A.size();i++){
            
//             countA[A[i-B.size()]-'a']--;
//             countA[A[i] - 'a']++;
            
//             if(check(countA,countB))
//                 return true;
//         }
        
//         return false;
//     }
// };
```

