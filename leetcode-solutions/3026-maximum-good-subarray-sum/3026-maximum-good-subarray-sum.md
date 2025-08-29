# 3026. maximum-good-subarray-sum

## cpp

[View Solution](3026-maximum-good-subarray-sum.cpp)


```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    long long maximumSubarraySum(vector<int>& nums, int k) {
        unordered_map<int, vector<int>> mp;
        vector<long long> ps(nums.size());
        ps[0] = nums[0];
        long long maxsum = numeric_limits<long long>::min();
        bool present = false;

        for (int i = 1; i < nums.size(); ++i) {
            ps[i] = ps[i - 1] + nums[i];
        }

        for (int i = 0; i < nums.size(); ++i) {
            if (mp.find(nums[i] - k) != mp.end() || mp.find(nums[i] + k) != mp.end()) {
                present = true;
                for (auto x : mp[nums[i] - k]) {
                    maxsum = std::max(maxsum, ps[i] - (x == 0 ? 0 : ps[x - 1]));
                }
                for (auto x : mp[nums[i] + k]) {
                    maxsum = std::max(maxsum, ps[i] - (x == 0 ? 0 : ps[x - 1]));
                }
            }
            mp[nums[i]].push_back(i);
        }

        return present ? maxsum : 0;
    }
};

```
