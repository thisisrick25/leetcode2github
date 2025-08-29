# 0035. search-insert-position

## cpp

[View Solution](0035-search-insert-position.cpp)


```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        
        int first = 0, last = nums.size() - 1;
        
        while(first <= last) {
            int mid = first + (last - first)/2;
            
            if(nums[mid] == target)
                return mid;
            else if(nums[mid] < target)
                first = mid + 1;
            else if(nums[mid] > target)
                last = mid - 1;
            
        }
        return first;
        
    }
};
```
