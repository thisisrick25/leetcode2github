---
number: 485
slug: max-consecutive-ones
title: Max Consecutive Ones
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:19:31.409Z
---

# 0485. Max Consecutive Ones

**URL:** [https://leetcode.com/problems/max-consecutive-ones/](https://leetcode.com/problems/max-consecutive-ones/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive </em><code>1</code><em>&#39;s in the array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,0,1,1,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,1,0,1]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


---

## Solutions

- [cpp](0485-max-consecutive-ones.cpp) — 2021-09-21T08:18:54.000Z

---

### cpp — 2021-09-21T08:18:54.000Z

- Runtime: 36 ms  
- Memory: 36.1 MB  

[View raw solution](0485-max-consecutive-ones.cpp)


```cpp
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        
        int m = 0, c = 0;
        
        for(int i = 0; i <= nums.size()-1; i++) {
            if(nums[i] == 1)
                c++;
            else
                c = 0;
            m = max(m, c);
        }
        return m;
    }
};
```

