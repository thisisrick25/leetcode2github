---
number: 2023
slug: number-of-pairs-of-strings-with-concatenation-equal-to-target
title: Number of Pairs of Strings With Concatenation Equal to Target
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:18:49.995Z
---

# 2023. Number of Pairs of Strings With Concatenation Equal to Target

**URL:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an array of <strong>digit</strong> strings <code>nums</code> and a <strong>digit</strong> string <code>target</code>, return <em>the number of pairs of indices </em><code>(i, j)</code><em> (where </em><code>i != j</code><em>) such that the <strong>concatenation</strong> of </em><code>nums[i] + nums[j]</code><em> equals </em><code>target</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [&quot;777&quot;,&quot;7&quot;,&quot;77&quot;,&quot;77&quot;], target = &quot;7777&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong> Valid pairs are:
- (0, 1): &quot;777&quot; + &quot;7&quot;
- (1, 0): &quot;7&quot; + &quot;777&quot;
- (2, 3): &quot;77&quot; + &quot;77&quot;
- (3, 2): &quot;77&quot; + &quot;77&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [&quot;123&quot;,&quot;4&quot;,&quot;12&quot;,&quot;34&quot;], target = &quot;1234&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> Valid pairs are:
- (0, 1): &quot;123&quot; + &quot;4&quot;
- (2, 3): &quot;12&quot; + &quot;34&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;], target = &quot;11&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> Valid pairs are:
- (0, 1): &quot;1&quot; + &quot;1&quot;
- (1, 0): &quot;1&quot; + &quot;1&quot;
- (0, 2): &quot;1&quot; + &quot;1&quot;
- (2, 0): &quot;1&quot; + &quot;1&quot;
- (1, 2): &quot;1&quot; + &quot;1&quot;
- (2, 1): &quot;1&quot; + &quot;1&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i].length &lt;= 100</code></li>
	<li><code>2 &lt;= target.length &lt;= 100</code></li>
	<li><code>nums[i]</code> and <code>target</code> consist of digits.</li>
	<li><code>nums[i]</code> and <code>target</code> do not have leading zeros.</li>
</ul>


---

## Solutions

- [cpp](2023-number-of-pairs-of-strings-with-concatenation-equal-to-target.cpp) — 2021-10-04T15:25:42.000Z

---

### cpp — 2021-10-04T15:25:42.000Z

- Runtime: 116 ms  
- Memory: 67.2 MB  

[View raw solution](2023-number-of-pairs-of-strings-with-concatenation-equal-to-target.cpp)


```cpp
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        
        int c = 0;
        for(int i = 0; i < nums.size(); i++) {
            for(int j = 0; j < nums.size(); j++) {
                if((i != j) && (nums[i] + nums[j] == target))
                    c++;
            }
        }
        
        return c;
    }
};
```

