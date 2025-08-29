# 0020. valid-parentheses

## cpp

[View Solution](0020-valid-parentheses.cpp)


```cpp
class Solution {
public:
    bool isValid(string s) {
        vector<char> st;

        if(s.size() == 0)
            return true;

        for(char c : s) {
            if(c == '(' || c == '{' || c == '[')
                st.push_back(c);

            else {
                if(st.empty() ||
                (c == ')' && st.back() != '(') ||
                (c == '}' && st.back() != '{') ||
                (c == ']' && st.back() != '[')) {
                    return false;
                }
                st.pop_back();
            }
        }
        return st.empty();
    }
};
```
