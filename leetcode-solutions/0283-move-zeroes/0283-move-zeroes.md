# 0283. move-zeroes

## cpp

[View Solution](0283-move-zeroes.cpp)


```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
//         int c = 0;
        
//         for(int i = 0; i < nums.size(); i++) {
//             if(nums[i] != 0)
//                 nums[c++] = nums[i];
//         }
        
//         while(c < nums.size())
//             nums[c++] = 0;
        // std::fill(std::remove(nums.begin(), nums.end(), 0), nums.end(), 0);
        
        
        for (int lastNonZeroFoundAt = 0, cur = 0; cur < nums.size(); cur++) {
        if (nums[cur] != 0) {
            swap(nums[lastNonZeroFoundAt++], nums[cur]);
        }
    }
    }
};
```
