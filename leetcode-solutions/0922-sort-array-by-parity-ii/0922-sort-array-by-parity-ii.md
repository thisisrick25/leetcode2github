# 0922. sort-array-by-parity-ii

## cpp

[View Solution](0922-sort-array-by-parity-ii.cpp)


```cpp
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        
        int i = 0, j = 1; 
        
        while(i < nums.size() && j < nums.size()) {
            if(nums[i] % 2 == 0)
                i += 2;
            else if(nums[j] % 2 != 0)
                j += 2;
            else {
                swap(nums[i], nums[j]);
                j += 2;
                i += 2;
            }
        }
        return nums;
    }
};
```
