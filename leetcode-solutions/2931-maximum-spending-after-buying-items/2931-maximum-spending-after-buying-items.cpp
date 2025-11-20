class Solution {
public:
    long long maxSpending(vector<vector<int>>& values) {
        vector<int> vect;
    
        for (auto& it : values) {
            for (int x : it) {
                vect.push_back(x);
            }
        }
        sort(vect.begin(), vect.end());
        long long ans = 0;
        long long d = 1;
        for (int x : vect) {
            ans += d++ * static_cast<long long>(x);
        }
            return ans;
    }
};