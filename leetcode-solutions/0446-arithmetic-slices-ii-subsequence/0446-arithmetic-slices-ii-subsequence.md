# 0446. arithmetic-slices-ii-subsequence

## cpp

[View Solution](0446-arithmetic-slices-ii-subsequence.cpp)


```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        
        long n = nums.size();
        long ans = 0;
        vector<unordered_map<long, long>> dp(n); // dp[i][d]
        for (long i = 1; i < n; i++) {
            for (long j = 0; j < i; j++) {
                long diff = (long)nums[i] - (long)nums[j];
                
                long cnt = dp[j].count(diff) ? dp[j][diff] : 0;
                dp[i][diff] += cnt + 1;
                ans += cnt;
            }
        }
        
        return ans;
        
    }
};
```
