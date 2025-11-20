# 0978. longest-turbulent-subarray

## cpp

[View Solution](0978-longest-turbulent-subarray.cpp)


```cpp
class Solution {
public:
    int maxTurbulenceSize(vector<int>& arr) {
        vector<vector<int>> dp(arr.size(), vector<int>(2, 1));
        int ans = 1;
        
        for (int i = arr.size() - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1])
                dp[i][0] = dp[i + 1][1] + 1;
            
            else if (arr[i] < arr[i + 1]) 
                dp[i][1] = dp[i + 1][0] + 1;
            
            ans = max(ans, max(dp[i][0], dp[i][1]));   
        }
        return ans;
    }
};
```
