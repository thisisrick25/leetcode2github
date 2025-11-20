# 2023. number-of-pairs-of-strings-with-concatenation-equal-to-target

## cpp

[View Solution](2023-number-of-pairs-of-strings-with-concatenation-equal-to-target.cpp)


```cpp
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        
        int c = 0;
        for(int i = 0; i < nums.size(); i++) {
            for(int j = 0; j < nums.size(); j++) {
                if((i != j) && (nums[i] + nums[j] == target))
                    c++;
            }
        }
        
        return c;
    }
};
```
