# 0509. fibonacci-number

## cpp

[View Solution](0509-fibonacci-number.cpp)


```cpp
class Solution {
public:
    int fib(int n) {
        if(n == 0)  return 0;
        if(n == 1)  return 1;
        
        
        vector<int> dp(n+1);
        dp[0]=0;
        dp[1]=1;
        // dp[2]=2;
        for(int i=2;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n];
        
        
        // return fib(n-1) + fib(n-2);
    }
};
```
