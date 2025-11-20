static const auto io_sync_off = [](){
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    return nullptr;
}();

class Solution {
public:
    string reverseWords(string s) {
        int index = 0;
        for(int i = 0; i <= s.size(); i++)
        {
            if(s[i] == ' ' || i == s.size()) {
        //         for(int j = index, k = i-1; j < k; j++, k--) {
        //     char temp = s[j];
        //     s[j] = s[k];
        //     s[k] = temp;  
        // }
                    
                reverse(s.begin()+index, s.begin()+i);
                index = i+1;
            }
        }
        // reverse(s.begin()+index, s.end());
        return s;
    }
};