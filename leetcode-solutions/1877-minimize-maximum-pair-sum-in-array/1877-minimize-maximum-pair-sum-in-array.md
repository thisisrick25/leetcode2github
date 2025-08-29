# 1877. minimize-maximum-pair-sum-in-array

## cpp

[View Solution](1877-minimize-maximum-pair-sum-in-array.cpp)


```cpp
class Solution {
public:
    int minPairSum(vector<int>& nums) {
        int res = INT_MIN;
        sort(nums.begin(), nums.end());
        for (auto i = 0; i < nums.size() / 2; i++)
            res = max(res, nums[i] + nums[nums.size() - i - 1]);
        return res;
    }
};
```
