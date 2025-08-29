# 3024. type-of-triangle

## cpp

[View Solution](3024-type-of-triangle.cpp)


```cpp
class Solution {
public:
    string triangleType(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        if(nums[0]==nums[1] && nums[1]==nums[2]){
            return "equilateral";
        }
        if (nums[0] + nums[1] > nums[2]) {
            if (nums[0] == nums[1] && nums[1] == nums[2]) {
                return "equilateral";
            } else if (nums[0] == nums[1] || nums[1] == nums[2]) {
                return "isosceles";
            } else {
                return "scalene";
            }
        } else {
            return "none";
        }
    }
};
```
