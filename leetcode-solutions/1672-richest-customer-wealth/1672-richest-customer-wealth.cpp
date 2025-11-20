class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int maxx = 0;
        
        for(vector<int> i : accounts) {
            int sum = 0;
            for(int j : i) {
                sum += j;
            }
            maxx = max(maxx, sum);
        }
        return maxx;
    }
};