# 0344. reverse-string

## cpp

[View Solution](0344-reverse-string.cpp)


```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        while(left < right)
            swap(s[left++], s[right--]);
        
    }
};
```
