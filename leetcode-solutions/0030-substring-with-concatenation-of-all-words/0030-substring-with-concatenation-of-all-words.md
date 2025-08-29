# 0030. substring-with-concatenation-of-all-words

## cpp

[View Solution](0030-substring-with-concatenation-of-all-words.cpp)


```cpp
class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        unordered_map<string, int> map;
        int begin = 0, end = 0, lengthOfWords = words[0].length(), n = s.length();
        int numberOfWords = words.size();
        
        for(auto word : words)
            map[word]++;
        
        unordered_map<string, int> current;
        vector<int> ans; int i = 0;
        
        // for(int i=0; i <= n-lengthOfWords*numberOfWords; i++)
        while(i <= n-lengthOfWords*numberOfWords)
        {
            current.clear();
            
            for(int j = i; j < i+lengthOfWords*numberOfWords; j += lengthOfWords)
                current[s.substr(j, lengthOfWords)]++;
            
            if(current == map)
                ans.push_back(i);
            
            i++;
        }
          
        return ans;   

    }
};
```
