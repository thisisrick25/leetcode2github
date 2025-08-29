# 1010. pairs-of-songs-with-total-durations-divisible-by-60

## cpp

[View Solution](1010-pairs-of-songs-with-total-durations-divisible-by-60.cpp)


```cpp
class Solution {
public:
    int numPairsDivisibleBy60(vector<int>& time) {
        vector<int> c(60);
        int res = 0;
        for (int t : time) {
            res += c[(600 - t) % 60];
            c[t % 60] += 1;
        }
        return res;
    }
};
```
