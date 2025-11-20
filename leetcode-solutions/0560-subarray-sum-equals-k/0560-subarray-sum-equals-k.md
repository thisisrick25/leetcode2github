---
number: 0560
slug: subarray-sum-equals-k
difficulty: Medium
languages: cpp
latest_solved_at: 2022-02-11T21:19:17.000Z
generated_at: 2025-11-20T19:24:11.924Z
---

# 0560. Subarray Sum Equals K

**URL:** [https://leetcode.com/problems/subarray-sum-equals-k/](https://leetcode.com/problems/subarray-sum-equals-k/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-02-11T21:19:17.000Z

---

## Problem Description

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1], k = 2
<strong>Output:</strong> 2
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3], k = 3
<strong>Output:</strong> 2
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>-10<sup>7</sup> &lt;= k &lt;= 10<sup>7</sup></code></li>
</ul>


---

## Solutions

[View raw cpp solution](0560-subarray-sum-equals-k.cpp)

```cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        
        //TLE------
//         int c = 0;
//         for(int i = 0; i < nums.size(); i++) {
//             int sum = nums[i];
//             if(sum == k)
//                 c++;
//             for(int j = i+1; j <nums.size(); j++) {
//                 sum += nums[j];
                
//                 if(sum == k)
//                     c++;
//             }
//         }
//         return c;
        
        unordered_map<int,int> mp;
        int sum=0,ans=0;
        mp[sum] = 1;
        for(auto it:nums){
            sum += it;
            int find = sum - k;
            if(mp.find(find) != mp.end()){
                ans += mp[find];
            }
            mp[sum]++;
        }
        return ans;
        
		// int ans = 0, sum = 0;
		// unordered_map<int, int> map; map[sum] = 1;
		// for(int i = 0; i < nums.size(); i++) {
		// 	sum += nums[i];
		// 	ans += map[sum - k];
		// 	map[sum]++;    
		// }
		// return ans; 
    }
};
```

