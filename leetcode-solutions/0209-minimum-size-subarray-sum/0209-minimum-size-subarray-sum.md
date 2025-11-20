---
number: 0209
slug: minimum-size-subarray-sum
difficulty: Medium
languages: cpp
latest_solved_at: 2022-06-03T13:13:56.000Z
generated_at: 2025-11-20T18:54:44.185Z
---

# 0209. Minimum Size Subarray Sum

**URL:** [https://leetcode.com/problems/minimum-size-subarray-sum/](https://leetcode.com/problems/minimum-size-subarray-sum/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-06-03T13:13:56.000Z

---

## Problem Description

<p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return <em>the <strong>minimal length</strong> of a </em><span data-keyword="subarray-nonempty"><em>subarray</em></span><em> whose sum is greater than or equal to</em> <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The subarray [4,3] has the minimal length under the problem constraint.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> target = 4, nums = [1,4,4]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.

---

## Solutions

- [cpp](0209-minimum-size-subarray-sum.cpp)

---

[View raw solution](0209-minimum-size-subarray-sum.cpp)

```cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        
        int begin = 0, end = 0, sum = 0, ans = INT_MAX;
        
        while(end < nums.size()) {
            sum += nums[end];
            // target -=nums[end];
            end++;
            while(sum >= target) {
            // while(target <= 0) {
                ans = min(ans, end - begin);
                // sum -= nums[begin];
                target += nums[begin];
                begin++;
            }
        }
        return ans == INT_MAX ? 0 : ans;
        // return ans % INT_MAX;
    }
};
```

