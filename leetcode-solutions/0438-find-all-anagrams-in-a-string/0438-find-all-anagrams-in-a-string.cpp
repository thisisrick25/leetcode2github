class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        unordered_map<char, int> pHash;
        for(auto i : p)
            pHash[i]++;
        
        vector<int> result;
        
        int begin = 0, end = 0, count = p.size();
        
        while(end < s.size()) {
            if(pHash[s[end]] >= 1)
                count--;
            pHash[s[end]]--;
            end++;
            
            while(count == 0){
                if(pHash[s[begin]] >= 0)
                    count++;
                
                if(end - begin == p.size())
                    result.push_back(begin);
                
                pHash[s[begin]]++;
                begin++;
            }
        }
        return result;
    }
};