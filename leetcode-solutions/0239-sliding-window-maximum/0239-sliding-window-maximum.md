# 0239. sliding-window-maximum

## cpp

[View Solution](0239-sliding-window-maximum.cpp)


```cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        int len = nums.size(), hi, i, k1 = k - 1;
        vector<int> left(len), right(len), ret;

        for (i = len - 1, hi = INT_MIN; i >= 0; --i)
        {
            right[i] = hi = max(hi, nums[i]);
            if (i % k == 0) hi = INT_MIN;
        }

        for (i = 0, hi = INT_MIN; i < k1; ++i) left[i] = hi = max(hi, nums[i]);
        for (; i < len; ++i)
        {
            if (i % k == 0) hi = INT_MIN;
            left[i] = hi = max(hi, nums[i]);
            ret.push_back(max(hi, right[i - k1]));
        }

        return ret;
    }
};
```
