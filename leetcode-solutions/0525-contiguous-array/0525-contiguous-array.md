---
number: 0525
slug: contiguous-array
difficulty: Medium
languages: cpp
latest_solved_at: 2022-02-04T20:12:27.000Z
generated_at: 2025-11-20T18:56:05.085Z
---

# 0525. Contiguous Array

**URL:** [https://leetcode.com/problems/contiguous-array/](https://leetcode.com/problems/contiguous-array/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-02-04T20:12:27.000Z

---

## Problem Description

<p>Given a binary array <code>nums</code>, return <em>the maximum length of a contiguous subarray with an equal number of </em><code>0</code><em> and </em><code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong> [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,1,1,1,1,0,0,0]
<strong>Output:</strong> 6
<strong>Explanation:</strong> [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


---

## Solutions

- [cpp](0525-contiguous-array.cpp)

---

[View raw solution](0525-contiguous-array.cpp)

```cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int,int> mp; mp[0]=-1;
        int sum = 0,longest_subarray = 0;
        for(int i = 0; i < nums.size(); i++)
        {
            sum += nums[i] == 0 ? - 1 : 1;    
            if(mp.find(sum) != mp.end())
            {
                if(longest_subarray < i - mp[sum])
                {
                    longest_subarray = i - mp[sum];
                }
            }
            else
            {
                mp[sum] = i;
            }
        }
        return longest_subarray;
    }
};
```

