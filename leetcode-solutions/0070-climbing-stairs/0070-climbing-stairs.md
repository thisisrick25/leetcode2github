# 0070. climbing-stairs

## cpp

[View Solution](0070-climbing-stairs.cpp)


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
