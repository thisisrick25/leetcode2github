---
number: 740
slug: delete-and-earn
title: Delete and Earn
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:16:56.204Z
---

# 0740. Delete and Earn

**URL:** [https://leetcode.com/problems/delete-and-earn/](https://leetcode.com/problems/delete-and-earn/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>You are given an integer array <code>nums</code>. You want to maximize the number of points you get by performing the following operation any number of times:</p>

<ul>
	<li>Pick any <code>nums[i]</code> and delete it to earn <code>nums[i]</code> points. Afterwards, you must delete <b>every</b> element equal to <code>nums[i] - 1</code> and <strong>every</strong> element equal to <code>nums[i] + 1</code>.</li>
</ul>

<p>Return <em>the <strong>maximum number of points</strong> you can earn by applying the above operation some number of times</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,2]
<strong>Output:</strong> 6
<strong>Explanation:</strong> You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,3,3,3,4]
<strong>Output:</strong> 9
<strong>Explanation:</strong> You can perform the following operations:
- Delete a 3 to earn 3 points. All 2&#39;s and 4&#39;s are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0740-delete-and-earn.cpp) — 2022-03-05T20:24:45.000Z

---

### cpp — 2022-03-05T20:24:45.000Z

- Runtime: 4 ms  
- Memory: 11.4 MB  

[View raw solution](0740-delete-and-earn.cpp)


```cpp
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        int n = 10001;
        vector<int> values(n, 0);
        for (int num : nums)
            values[num] += num;

        int take = 0, skip = 0;
        for (int i = 0; i < n; i++) {
            int takei = skip + values[i];
            int skipi = max(skip, take);
            take = takei;
            skip = skipi;
        }
        return max(take, skip);
    }
};
```

