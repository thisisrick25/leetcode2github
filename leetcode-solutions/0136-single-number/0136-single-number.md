# 0136. single-number

## cpp

[View Solution](0136-single-number.cpp)


```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int output = 0;
        for(int i = 0; i<nums.size(); i++) {
            output ^= nums[i];
        }
        
        return output;
        
    }
};
```
