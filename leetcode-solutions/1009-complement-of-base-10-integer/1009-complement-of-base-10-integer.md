# 1009. complement-of-base-10-integer

## cpp

[View Solution](1009-complement-of-base-10-integer.cpp)


```cpp
class Solution {
public:
    int bitwiseComplement(int N) {
        int X = 1;
        while (N > X) X = X * 2 + 1;
        return X - N;
    }
};
```
