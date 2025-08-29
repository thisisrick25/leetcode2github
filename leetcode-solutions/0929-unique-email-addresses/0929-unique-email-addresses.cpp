class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
            
        for(auto &x:emails){
            auto pos2 = x.find('@');
            if(pos2 < x.size())
                x.erase(remove(x.begin(),x.begin()+pos2,'.'),x.begin()+pos2);
            
            auto pos1 = x.find('+');
            pos2 = x.find('@');
            if(pos1 < x.size() and pos2 < x.size())
                x.erase(pos1,pos2-pos1);
        }
        
        unordered_set<string> ans(emails.begin(),emails.end());
        return ans.size();
    }
};