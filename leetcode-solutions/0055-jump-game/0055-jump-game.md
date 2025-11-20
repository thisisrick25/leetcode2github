---
number: 0055
slug: jump-game
difficulty: Medium
languages: cpp
latest_solved_at: 2021-10-03T17:57:00.000Z
generated_at: 2025-11-20T19:25:37.179Z
---

# 0055. Jump Game

**URL:** [https://leetcode.com/problems/jump-game/](https://leetcode.com/problems/jump-game/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2021-10-03T17:57:00.000Z

---

## Problem Description

<p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.</p>

<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> true
<strong>Explanation:</strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,0,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


---

## Solutions

[View raw cpp solution](0055-jump-game.cpp)

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
//         int lastIndexPos = nums.size() - 1;
        
//         for(int i = lastIndexPos - 1; i >=0; i--) {
//             if(i + nums[i] >= lastIndexPos)
//                 lastIndexPos = i;
//         }
        
//         if(lastIndexPos == 0)
//             return true;
        
//         return false;
        
        
    //     int size=nums.size();
    // int step=nums[0];
    // for(int i=1;i<size;++i){
    //     step--;
    //     if(step<0)
    //        return false;
    //     if(nums[i]>step)
    //        step=nums[i];
    // }
    // return true;
        
        
//         int n = nums.size();
//         int can_reach = 0;
        
//         for(int i=0;i<=can_reach;i++){
//             can_reach = max(can_reach,i+nums[i]);
//             if(can_reach >= n-1) return 1;
//         }
        
//         return 0;
        
        
        
        int next = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            next = max(next, i + nums[i]);

            if (next == i) {
                return false;
              }
        }

        return true;
        
    }
};
```

