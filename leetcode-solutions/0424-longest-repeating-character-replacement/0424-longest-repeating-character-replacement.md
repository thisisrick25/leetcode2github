# 0424. longest-repeating-character-replacement

## cpp

[View Solution](0424-longest-repeating-character-replacement.cpp)


```cpp
class Solution {
public:
    int characterReplacement(string s, int k) {
        unordered_map<char, int> map;
        int start = 0, end = 0, maxOccur = INT_MIN, maxLen = INT_MIN;
        
        while(end < s.length()) {
            map[s[end]]++;
            maxOccur = max(maxOccur, map[s[end]]);
            end++;
            
            while(end - start - maxOccur > k) {
                map[s[start]]--;
                start++;
            }
            
            maxLen = max(maxLen, end - start);
        }
        return maxLen;
    }
};



```
