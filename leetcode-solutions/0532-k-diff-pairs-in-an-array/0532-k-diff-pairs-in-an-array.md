# 0532. k-diff-pairs-in-an-array

## cpp

[View Solution](0532-k-diff-pairs-in-an-array.cpp)


```cpp
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        unordered_map<int,int> map;
        int c = 0;
        
        for(int i : nums)
            map[i]++;
        
        for(auto x : map) {
            if(k == 0) {
                if(x.second > 1)
                    c++;
            }
            else if(map.find(x.first+k) != map.end())
                c++;
        }
        return c;
    }
};
```
