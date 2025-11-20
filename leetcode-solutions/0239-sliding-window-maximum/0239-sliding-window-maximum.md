---
number: 0239
slug: sliding-window-maximum
difficulty: Hard
languages: cpp
latest_solved_at: 2023-08-16T20:29:56.000Z
generated_at: 2025-11-20T19:21:46.450Z
---

# 0239. Sliding Window Maximum

**URL:** [https://leetcode.com/problems/sliding-window-maximum/](https://leetcode.com/problems/sliding-window-maximum/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2023-08-16T20:29:56.000Z

---

## Problem Description

<p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>

<p>Return <em>the max sliding window</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3
<strong>Output:</strong> [3,3,5,5,6,7]
<strong>Explanation:</strong> 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       <strong>3</strong>
 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>
 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>
 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>
 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>
 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= k &lt;= nums.length</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0239-sliding-window-maximum.cpp)

```cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        int len = nums.size(), hi, i, k1 = k - 1;
        vector<int> left(len), right(len), ret;

        for (i = len - 1, hi = INT_MIN; i >= 0; --i)
        {
            right[i] = hi = max(hi, nums[i]);
            if (i % k == 0) hi = INT_MIN;
        }

        for (i = 0, hi = INT_MIN; i < k1; ++i) left[i] = hi = max(hi, nums[i]);
        for (; i < len; ++i)
        {
            if (i % k == 0) hi = INT_MIN;
            left[i] = hi = max(hi, nums[i]);
            ret.push_back(max(hi, right[i - k1]));
        }

        return ret;
    }
};
```

