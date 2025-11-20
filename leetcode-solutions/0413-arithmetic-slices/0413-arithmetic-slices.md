---
number: 0413
slug: arithmetic-slices
difficulty: Medium
languages: cpp
latest_solved_at: 2022-03-04T19:57:01.000Z
generated_at: 2025-11-20T18:55:24.188Z
---

# 0413. Arithmetic Slices

**URL:** [https://leetcode.com/problems/arithmetic-slices/](https://leetcode.com/problems/arithmetic-slices/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-03-04T19:57:01.000Z

---

## Problem Description

<p>An integer array is called arithmetic if it consists of <strong>at least three elements</strong> and if the difference between any two consecutive elements is the same.</p>

<ul>
	<li>For example, <code>[1,3,5,7,9]</code>, <code>[7,7,7,7]</code>, and <code>[3,-1,-5,-9]</code> are arithmetic sequences.</li>
</ul>

<p>Given an integer array <code>nums</code>, return <em>the number of arithmetic <strong>subarrays</strong> of</em> <code>nums</code>.</p>

<p>A <strong>subarray</strong> is a contiguous subsequence of the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


---

## Solutions

- [cpp](0413-arithmetic-slices.cpp)

---

[View raw solution](0413-arithmetic-slices.cpp)

```cpp
// class Solution {
// public:
//     int numberOfArithmeticSlices(vector<int>& nums) {
// 		// if nums size is less than 3 return false
//         if(nums.size() < 3)
//             return 0;
        
//         int cnt = 0, diff;
        
//         for(int i = 0; i<nums.size()-2; ++i)
//         {
// 			// storing diff of first 2 elements
//             diff = nums[i+1] - nums[i];
			
// 			// checking for consecutive elements with same difference.
//             for(int j = i+2; j<nums.size(); ++j)
//             {
// 				// if we find the same diff of next 2 elements
// 				// this means we  find consecutive elements
// 				// increase the Count
//                 if(nums[j] - nums[j-1] == diff)
//                     ++cnt;
//                 else
// 				// break as we need to cnt for consecutive diff elements
//                     break;
//             }
//         }
// 		// return cnt
//         return cnt;
//     }
// };

class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        if(nums.size() < 3)
            return 0;
        
        int cnt = 0, diff = 0 , ind = 0;
        int prev_diff = nums[1] - nums[0];
        
        for(int i = 1; i<nums.size()-1 ; ++i)
        {
            // curr difference
            int diff = nums[i+1] - nums[i];
            
            // if we find same diff of consecutive elements
            // increase count
            if(diff ==  prev_diff)
                ++ind;
            
            else
            {
                // update prev diff with curr diff
                // as we don't find consecutive elements with same diff
                prev_diff = diff;
                ind = 0;  // make ind to 0
            }
            
            // add cosecutive arithmetic sequence cnt
                cnt += ind;
        }
        
       
        return cnt;
    }
};
```

