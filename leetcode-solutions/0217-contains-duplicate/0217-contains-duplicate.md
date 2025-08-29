# 0217. contains-duplicate

## cpp

[View Solution](0217-contains-duplicate.cpp)


```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int, int> map;
        
        for(auto i : nums){
            map[i]++;
            if(map[i] >= 2)
                return true;
        }
        return false;
    }
};
```
