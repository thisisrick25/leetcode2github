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