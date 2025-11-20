---
number: 78
slug: subsets
title: Subsets
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:17:20.272Z
---

# 0078. Subsets

**URL:** [https://leetcode.com/problems/subsets/](https://leetcode.com/problems/subsets/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em> <span data-keyword="subset"><em>subsets</em></span> <em>(the power set)</em>.</p>

<p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> [[],[0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>All the numbers of&nbsp;<code>nums</code> are <strong>unique</strong>.</li>
</ul>


---

## Solutions

- [cpp](0078-subsets.cpp) — 2022-02-13T20:30:06.000Z

---

### cpp — 2022-02-13T20:30:06.000Z

- Runtime: 3 ms  
- Memory: 7 MB  

[View raw solution](0078-subsets.cpp)


```cpp
// class Solution {
// public:
//     vector<vector<int>> subsets(vector<int>& nums) {
//         vector<vector<int>> subs = {{}};
//         for (int num : nums) {
//             int n = subs.size();
//             for (int i = 0; i < n; i++) {
//                 subs.push_back(subs[i]); 
//                 subs.back().push_back(num);
//             }
//         }
//         return subs;
//     }
// };

class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> subs;
        vector<int> sub;
        subsets(nums, 0, sub, subs);
        return subs;
    }
private:
    void subsets(vector<int>& nums, int i, vector<int>& sub, vector<vector<int>>& subs) {
        subs.push_back(sub);
        for (int j = i; j < nums.size(); j++) {
            sub.push_back(nums[j]);
            subsets(nums, j + 1, sub, subs);
            sub.pop_back();
        }
    }
};
```

