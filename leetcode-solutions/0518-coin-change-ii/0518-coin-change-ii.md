# 0518. coin-change-ii

## cpp

[View Solution](0518-coin-change-ii.cpp)


```cpp
class Solution {
public:
    int change(int t, vector<int>& cs) {
  int dp[5001] = { 1 };
  for (auto c : cs)
    for (auto j = c; j <= t; ++j) dp[j] += dp[j - c];
  return dp[t];
}

};
```
