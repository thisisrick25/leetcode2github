---
number: 0410
slug: split-array-largest-sum
difficulty: Hard
languages: cpp
latest_solved_at: 2022-04-01T21:04:18.000Z
generated_at: 2025-11-20T18:55:01.352Z
---

# 0410. Split Array Largest Sum

**URL:** [https://leetcode.com/problems/split-array-largest-sum/](https://leetcode.com/problems/split-array-largest-sum/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2022-04-01T21:04:18.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, split <code>nums</code> into <code>k</code> non-empty subarrays such that the largest sum of any subarray is <strong>minimized</strong>.</p>

<p>Return <em>the minimized largest sum of the split</em>.</p>

<p>A <strong>subarray</strong> is a contiguous part of the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [7,2,5,10,8], k = 2
<strong>Output:</strong> 18
<strong>Explanation:</strong> There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5], k = 2
<strong>Output:</strong> 9
<strong>Explanation:</strong> There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= min(50, nums.length)</code></li>
</ul>


---

## Solutions

- [cpp](0410-split-array-largest-sum.cpp)

---

[View raw solution](0410-split-array-largest-sum.cpp)

```cpp
class Solution {
private:
    bool checkSplit(vector<int>& nums, int m, int mid) {
        int subArrayCount = 0, currSum=0;
            for(int i = 0; i < nums.size(); i++){
                if(currSum + nums[i] <= mid)
                    currSum += nums[i];
                else
                    subArrayCount++, currSum = nums[i];
            }
        subArrayCount++;
        return (subArrayCount <= m);
    }
    
public:
    int splitArray(vector<int>& nums, int m) {
        int lower = 0, upper = 0;
        for(auto x : nums) {
            lower = max(x, lower);
            upper += x;
        }
        
        int mid = 0, ans = 0;
        while(lower <= upper) {
            mid = (lower + upper) / 2;
            
            // int subArrayCount = 1, currSum=0;
            // for(int i = 0; i < nums.size(); ++i){
            //     if(currSum + nums[i] <= mid)
            //         currSum += nums[i];
            //     else
            //         subArrayCount++, currSum = nums[i];
            // }
            
            // if(subArrayCount <= m)
            if(checkSplit(nums, m, mid))
                upper = mid - 1, ans = mid;
            else
                lower = mid + 1;
        }
        return ans;
    }
};
```

