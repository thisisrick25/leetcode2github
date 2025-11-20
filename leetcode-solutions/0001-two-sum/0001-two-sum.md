---
number: 1
slug: two-sum
title: Two Sum
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:14:03.842Z
---

# 0001. Two Sum

**URL:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

---

## Solutions

- [cpp](0001-two-sum.cpp) — 2025-02-22T18:18:04.000Z

---

### cpp — 2025-02-22T18:18:04.000Z

- Runtime: 1 ms  
- Memory: 14.8 MB  

[View raw solution](0001-two-sum.cpp)


```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map <int, int> map;

        for(int i = 0; i < nums.size(); i++) {
            int b = nums[i];
            int a = target - b;
            if(map.count(a))
                return {i, map[a]};
            map[b] = i;
        }

        return {};
    }
};
```

