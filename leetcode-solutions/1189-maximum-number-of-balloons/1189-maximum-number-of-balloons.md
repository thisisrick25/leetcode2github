# 1189. maximum-number-of-balloons

## cpp

[View Solution](1189-maximum-number-of-balloons.cpp)


```cpp
class Solution {
public:
    int maxNumberOfBalloons(string text) {

        string str = "balloon";
        unordered_map<char, int> str_freq, txt_freq;
        for (auto s : str)
            str_freq[s]++;
        for (auto s : text)
            txt_freq[s]++;
        int prev = txt_freq['b']/str_freq['b'];
        for (auto e : str_freq) {
            int curr = txt_freq[e.first]/e.second;
            prev = min(prev, curr);
        }
        return prev;
    }
};
```
