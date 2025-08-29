# 2244. minimum-rounds-to-complete-all-tasks

## cpp

[View Solution](2244-minimum-rounds-to-complete-all-tasks.cpp)


```cpp
class Solution {
public:
    int minimumRounds(vector<int>& A) {
        unordered_map<int, int> count;
        int res = 0, freq1;
        for (int a: A)
            ++count[a];
        for (auto& it: count) {
            if (it.second == 1) return -1;
            res += (it.second + 2) / 3;
        }
        return res;
    }
};
```
