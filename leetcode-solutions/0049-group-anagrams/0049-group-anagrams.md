# 0049. group-anagrams

## cpp

[View Solution](0049-group-anagrams.cpp)


```cpp
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> mp;
        
        for(string& x: strs){
            string word = x;
            sort(word.begin(), word.end());
            mp[word].push_back(x);
        }
        
        vector<vector<string>> ans;
        for(auto& x: mp){
            ans.push_back(x.second);
        }
        return ans;
    }
};

```
