---
number: 283
slug: move-zeroes
title: Move Zeroes
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:35.604Z
---

# 0283. Move Zeroes

**URL:** [https://leetcode.com/problems/move-zeroes/](https://leetcode.com/problems/move-zeroes/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given an integer array <code>nums</code>, move all <code>0</code>&#39;s to the end of it while maintaining the relative order of the non-zero elements.</p>

<p><strong>Note</strong> that you must do this in-place without making a copy of the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,3,12]
<strong>Output:</strong> [1,3,12,0,0]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you minimize the total number of operations done?

---

## Solutions

- [cpp](0283-move-zeroes.cpp) — 2021-09-20T06:49:10.000Z

---

### cpp — 2021-09-20T06:49:10.000Z

- Runtime: 8 ms  
- Memory: 8.9 MB  

[View raw solution](0283-move-zeroes.cpp)


```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
//         int c = 0;
        
//         for(int i = 0; i < nums.size(); i++) {
//             if(nums[i] != 0)
//                 nums[c++] = nums[i];
//         }
        
//         while(c < nums.size())
//             nums[c++] = 0;
        // std::fill(std::remove(nums.begin(), nums.end(), 0), nums.end(), 0);
        
        
        for (int lastNonZeroFoundAt = 0, cur = 0; cur < nums.size(); cur++) {
        if (nums[cur] != 0) {
            swap(nums[lastNonZeroFoundAt++], nums[cur]);
        }
    }
    }
};
```

