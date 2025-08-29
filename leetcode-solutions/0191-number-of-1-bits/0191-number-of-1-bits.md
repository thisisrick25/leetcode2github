# 0191. number-of-1-bits

## cpp

[View Solution](0191-number-of-1-bits.cpp)


```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
    int count = 0;
    
    while (n) {
        n &= (n - 1);
        count++;
    }
    
    return count;
}
};
```
