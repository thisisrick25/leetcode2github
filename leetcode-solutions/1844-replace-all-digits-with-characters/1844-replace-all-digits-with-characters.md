# 1844. replace-all-digits-with-characters

## cpp

[View Solution](1844-replace-all-digits-with-characters.cpp)


```cpp
class Solution {
public:
    string replaceDigits(string s) {
        // int n = s.length();
        // for(int i = 0; i<n; i++){
        //     if(i%2){
        //         int temp = (s[i-1] - 'a') + (s[i] - '0');
        //         s[i] = temp + 'a';
        //     }
        // }
        // return s;
        
        for (int i = 1; i < s.size(); i += 2)
            s[i] += s[i-1] - '0';
        return s;
    }
};
```
