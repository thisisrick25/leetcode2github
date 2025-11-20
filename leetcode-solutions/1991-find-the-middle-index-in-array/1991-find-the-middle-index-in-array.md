---
number: 1991
slug: find-the-middle-index-in-array
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-29T06:21:46.000Z
generated_at: 2025-11-20T19:25:06.185Z
---

# 1991. Find the Middle Index in Array

**URL:** [https://leetcode.com/problems/find-the-middle-index-in-array/](https://leetcode.com/problems/find-the-middle-index-in-array/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-29T06:21:46.000Z

---

## Problem Description

<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find the <strong>leftmost</strong> <code>middleIndex</code> (i.e., the smallest amongst all the possible ones).</p>

<p>A <code>middleIndex</code> is an index where <code>nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]</code>.</p>

<p>If <code>middleIndex == 0</code>, the left side sum is considered to be <code>0</code>. Similarly, if <code>middleIndex == nums.length - 1</code>, the right side sum is considered to be <code>0</code>.</p>

<p>Return <em>the <strong>leftmost</strong> </em><code>middleIndex</code><em> that satisfies the condition, or </em><code>-1</code><em> if there is no such index</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,-1,<u>8</u>,4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,-1,<u>4</u>]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,5]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is no valid middleIndex.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as&nbsp;724:&nbsp;<a href="https://leetcode.com/problems/find-pivot-index/" target="_blank">https://leetcode.com/problems/find-pivot-index/</a></p>


---

## Solutions

[View raw cpp solution](1991-find-the-middle-index-in-array.cpp)

```cpp
class Solution {
public:
    int findMiddleIndex(vector<int>& nums)
    {
        
        if(nums.size() == 1)
            return 0;
    
        int n = nums.size();
        
        vector<int> prefixSum(nums);        // stores sum for 0 to n
        vector<int> suffixSum(nums);        // stores sum from n to 0
        
        // fill prefixSum array
        for(int i = 1; i < n; i++)
            prefixSum[i] += prefixSum[i-1];
        
        // fill suffix sum array
        for(int i = n-2; i >= 0; i--)
            suffixSum[i] += suffixSum[i+1];
        
        // handle edge case 1
        if(n>1 && suffixSum[1] == 0)
           return 0;      
        
        for(int i = 1; i < n-1; i++){
            if(prefixSum[i-1] == suffixSum[i+1])
                return i;
        }
        
       // handle edge case 2
        if(n > 1 && prefixSum[n-2]==0)
            return n-1;

        return -1;
    }
};
```

