---
number: 0165
slug: compare-version-numbers
difficulty: Medium
languages: cpp
latest_solved_at: 2022-02-25T21:25:28.000Z
generated_at: 2025-11-20T19:23:52.437Z
---

# 0165. Compare Version Numbers

**URL:** [https://leetcode.com/problems/compare-version-numbers/](https://leetcode.com/problems/compare-version-numbers/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-02-25T21:25:28.000Z

---

## Problem Description

<p>Given two <strong>version strings</strong>, <code>version1</code> and <code>version2</code>, compare them. A version string consists of <strong>revisions</strong> separated by dots <code>&#39;.&#39;</code>. The <strong>value of the revision</strong> is its <strong>integer conversion</strong> ignoring leading zeros.</p>

<p>To compare version strings, compare their revision values in <strong>left-to-right order</strong>. If one of the version strings has fewer revisions, treat the missing revision values as <code>0</code>.</p>

<p>Return the following:</p>

<ul>
	<li>If <code>version1 &lt; version2</code>, return -1.</li>
	<li>If <code>version1 &gt; version2</code>, return 1.</li>
	<li>Otherwise, return 0.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">version1 = &quot;1.2&quot;, version2 = &quot;1.10&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>version1&#39;s second revision is &quot;2&quot; and version2&#39;s second revision is &quot;10&quot;: 2 &lt; 10, so version1 &lt; version2.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">version1 = &quot;1.01&quot;, version2 = &quot;1.001&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>Ignoring leading zeroes, both &quot;01&quot; and &quot;001&quot; represent the same integer &quot;1&quot;.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">version1 = &quot;1.0&quot;, version2 = &quot;1.0.0.0&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>version1 has less revisions, which means every missing revision are treated as &quot;0&quot;.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= version1.length, version2.length &lt;= 500</code></li>
	<li><code>version1</code> and <code>version2</code>&nbsp;only contain digits and <code>&#39;.&#39;</code>.</li>
	<li><code>version1</code> and <code>version2</code>&nbsp;<strong>are valid version numbers</strong>.</li>
	<li>All the given revisions in&nbsp;<code>version1</code> and <code>version2</code>&nbsp;can be stored in&nbsp;a&nbsp;<strong>32-bit integer</strong>.</li>
</ul>


---

## Solutions

[View raw cpp solution](0165-compare-version-numbers.cpp)

```cpp
// class Solution {
// public:
//     int compareVersion(string s1, string s2) {
//         int n1 = s1.length(); // extracting length of string s1
//         int n2 = s2.length(); //extracting length of string s2
        
//         int i = 0, j = 0; // variables(pointers) used for moving
        
//         int number1 = 0, number2 = 0;  // numbers that generated between any two dots of the strings
        
//         // start traversing from string 1 and string 2
//         while(i < n1 || j < n2)
//         {
//             // generating number between dots for string s1
//             while(i < n1 && s1[i] != '.')
//             {
//                 number1 = number1 * 10 + (s1[i] - '0');
//                 i++;
//             }
            
//             // generating number between dots for string s2
//             while(j < n2 && s2[j] != '.')
//             {
//                 number2 = number2 * 10 + (s2[j] - '0');
//                 j++;
//             }
            
//             // if number1 is greater than number2, from here return 1
//             if(number1 > number2)
//             {
//                 return 1;
//             }
            
//              // if number1 is less than number2, from here return -1
//             if(number1 < number2)
//             {
//                 return -1;
//             }
            
//             // if equal then we have to proceed further
//             // again give numbers to zero, as we again generate numbers b/w dots 
//             number1 = 0, number2 = 0;
            
//             // move both pointers
//             i++;
//             j++;
//         }
        
//         // after traversing whole string, if all the versions are equal, that means
//         // strings are equal, so return 0
//         return 0;
//     }
// };

class Solution {
public:
    
    // Corner case 1: '01' vs '1'
    // Corner case 2: '1.0' vs '1'
    
    int compareVersion(string version1, string version2) {
        
        istringstream v1(version1);
        istringstream v2(version2);
        
        string num1, num2;
        // Consider corner case 2, we need continue the loop is either of them doesn't reach the end
        while( ! v1.eof() || ! v2.eof()) {
            if(! v1.eof()) {
                getline(v1, num1, '.');
            } else {
                num1 = "0";
            }
            
            if(! v2.eof()) {
                getline(v2, num2, '.');
            } else {
                num2 = "0";
            }
            
            // Cannot just use the string compare func since there could be leading '0's, e.g. '01' vs '1'  
            // TODO do we need consider overflow here ??!
            int n1 = stoi(num1), n2 = stoi(num2);
            
            if(n1 == n2)    continue;
            return (n1 > n2) ? 1 : - 1;
        }
        
        return 0;
    }
};
```

