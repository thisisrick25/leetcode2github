# 2900. longest-unequal-adjacent-groups-subsequence-i

## cpp

[View Solution](2900-longest-unequal-adjacent-groups-subsequence-i.cpp)


```cpp
class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        int longestSubsequenceLength = 0;
        int currentGroup = -1; 
        std::vector<std::string> longestSubsequence;
        for (int i = 0; i < n; ++i) {
            if (groups[i]!= currentGroup) { 
                currentGroup = groups[i];
            longestSubsequence.push_back(words[i]);
            ++longestSubsequenceLength;
            }
        }
        return longestSubsequence;

    }
};
```
