---
number: 442
slug: find-all-duplicates-in-an-array
title: Find All Duplicates in an Array
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:18:42.329Z
---

# 0442. Find All Duplicates in an Array

**URL:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/](https://leetcode.com/problems/find-all-duplicates-in-an-array/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code> of length <code>n</code> where all the integers of <code>nums</code> are in the range <code>[1, n]</code> and each integer appears <strong>at most</strong> <strong>twice</strong>, return <em>an array of all the integers that appears <strong>twice</strong></em>.</p>

<p>You must write an algorithm that runs in <code>O(n)</code> time and uses only <em>constant</em> auxiliary space, excluding the space needed to store the output</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,3,2,7,8,2,3,1]
<strong>Output:</strong> [2,3]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> [1]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> []
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= n</code></li>
	<li>Each element in <code>nums</code> appears <strong>once</strong> or <strong>twice</strong>.</li>
</ul>


---

## Solutions

- [cpp](0442-find-all-duplicates-in-an-array.cpp) — 2021-10-06T19:43:21.000Z

---

### cpp — 2021-10-06T19:43:21.000Z

- Runtime: 96 ms  
- Memory: 44.6 MB  

[View raw solution](0442-find-all-duplicates-in-an-array.cpp)


```cpp
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        
        if(nums.empty())
            return {};
        vector<int>ans;
        unordered_map<int,int>mp;
        
        for(int no:nums)
            mp[no]++;
        
        for(auto it:mp)
            if(it.second==2)
                ans.push_back(it.first);
        return ans;
    }
};
```

