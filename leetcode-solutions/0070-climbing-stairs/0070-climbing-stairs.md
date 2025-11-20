---
number: 0070
slug: climbing-stairs
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-05T15:36:00.000Z
generated_at: 2025-11-20T18:57:26.843Z
---

# 0070. Climbing Stairs

**URL:** [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-05T15:36:00.000Z

---

## Problem Description

<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>


---

## Solutions

- [cpp](0070-climbing-stairs.cpp)

---

[View raw solution](0070-climbing-stairs.cpp)

```cpp
class Solution {
public:
    int climbStairs(int n) {
//     // base cases
    // if(n <= 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    
//     int one_step_before = 2;
//     int two_steps_before = 1;
//     int all_ways = 0;
    
//     for(int i=2; i<n; i++){
//     	all_ways = one_step_before + two_steps_before;
//     	two_steps_before = one_step_before;
//         one_step_before = all_ways;
//     }
//     return all_ways;
//     }
        
        
        vector<int> dp(n+1);
        dp[0]=1;
        dp[1]=1;
        // dp[2]=2;
        for(int i=2;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n];
        
        // return climbStairs(n-1) + climbStairs(n-2);
        
    }
};
```

