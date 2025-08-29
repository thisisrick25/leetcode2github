class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> map;        
        
        for(auto c: t)
            map[c]++;
        
        int counter = t.size(), begin = 0, end = 0, ans = INT_MAX;
        int nextBegin = 0;
        
        while(end < s.size()){
            if(map[s[end]] > 0)
                counter--;
            map[s[end]]--;
            end++;
            
            while(counter == 0){
                if(end - begin < ans) {
                    nextBegin = begin;
                    ans = end - begin;
                }
                
                map[s[begin]]++;
                if(map[s[begin]] > 0)
                    counter++;
                begin++;
                
            }
        }
        return ans == INT_MAX ? "" : s.substr(nextBegin, ans);
    }
};