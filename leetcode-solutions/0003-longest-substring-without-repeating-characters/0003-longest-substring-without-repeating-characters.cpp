class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;
        // vector<int> map(128, 0);
        int counter = 0, begin=0, end=0, ans=0;
        
        while(end < s.size()){
            if(map[s[end]] > 0)
                counter++;
            map[s[end]]++;
            end++;
            
            while(counter > 0){
                if(map[s[begin]] > 1)
                    counter--;
                map[s[begin]]--;
                begin++;
            }
            ans=max(ans, end-begin); //while valid, update ans
        }
        return ans;
    }
};