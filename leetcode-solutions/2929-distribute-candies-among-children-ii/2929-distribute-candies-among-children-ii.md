# 2929. distribute-candies-among-children-ii

## cpp

[View Solution](2929-distribute-candies-among-children-ii.cpp)


```cpp
class Solution {
public:
    long long distributeCandies(int n, int limit) {
        auto c = [](int n) {
            return 1LL * n * (n - 1) / 2;
        };
        if (n > 3 * limit) {
            return 0;
        }
        long long ans = c(n + 2);
        if (n > limit) {
            ans -= 3 * c(n - limit + 1);
        }
        if (n - 2 >= 2 * limit) {
            ans += 3 * c(n - 2 * limit);
        }
        return ans;
    }
};
```
