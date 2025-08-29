# 1679. max-number-of-k-sum-pairs

## cpp

[View Solution](1679-max-number-of-k-sum-pairs.cpp)


```cpp
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        unordered_map<int, int> seen;
        int ans = 0;
        for (int b : nums) {
            int a = k - b; // Explain: a + b = k  =>  a = k - b
            if (seen[a] > 0) {
                ans += 1;
                seen[a] -= 1;
            } else {
                seen[b] += 1;
            }
        }
        return ans;
    }

};
```
