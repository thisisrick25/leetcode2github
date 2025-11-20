# 0974. subarray-sums-divisible-by-k

## cpp

[View Solution](0974-subarray-sums-divisible-by-k.cpp)


```cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& A, int K) {
        vector<int> count(K);
        count[0] = 1;
        int prefix = 0, res = 0;
        for (int a : A) {
            prefix = (prefix + a % K + K) % K;
            res += count[prefix]++;
        }
        return res;

    }
};
```
