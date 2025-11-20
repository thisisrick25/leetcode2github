# 1431. kids-with-the-greatest-number-of-candies

## cpp

[View Solution](1431-kids-with-the-greatest-number-of-candies.cpp)


```cpp
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> result;
        for(int x : candies){
            if(x + extraCandies >= *max_element(candies.begin(), candies.end())){
                result.push_back(true);
            }
            else
                result.push_back(false);
        }
        return result;
    }
};
```
