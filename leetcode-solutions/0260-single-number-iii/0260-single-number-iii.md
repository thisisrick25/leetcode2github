---
number: 0260
slug: single-number-iii
difficulty: Medium
languages: cpp
latest_solved_at: 2021-11-06T19:52:46.000Z
generated_at: 2025-11-20T19:25:01.400Z
---

# 0260. Single Number III

**URL:** [https://leetcode.com/problems/single-number-iii/](https://leetcode.com/problems/single-number-iii/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-11-06T19:52:46.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code>, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in <strong>any order</strong>.</p>

<p>You must write an&nbsp;algorithm that runs in linear runtime complexity and uses&nbsp;only constant extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,3,2,5]
<strong>Output:</strong> [3,5]
<strong>Explanation: </strong> [5, 3] is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0]
<strong>Output:</strong> [-1,0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [1,0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each integer in <code>nums</code> will appear twice, only two integers will appear once.</li>
</ul>


---

## Solutions

[View raw cpp solution](0260-single-number-iii.cpp)

```cpp
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        unordered_map<int, int> freq;
	// generate freq
	for (auto &num: nums) ++freq[num];
	vector<int> ans;
	// generate ans
	for (auto &[x, f]: freq)
		if (f == 1) {
			ans.push_back(x);
			if (ans.size() == 2)
				return ans;
		}
	return ans;
    }
};
```

