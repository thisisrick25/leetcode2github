# 0442. find-all-duplicates-in-an-array

## cpp

[View Solution](0442-find-all-duplicates-in-an-array.cpp)


```cpp
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        
        if(nums.empty())
            return {};
        vector<int>ans;
        unordered_map<int,int>mp;
        
        for(int no:nums)
            mp[no]++;
        
        for(auto it:mp)
            if(it.second==2)
                ans.push_back(it.first);
        return ans;
    }
};
```
