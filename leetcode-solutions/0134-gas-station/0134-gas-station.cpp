class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        ios_base::sync_with_stdio(false);
        cout.tie(NULL);
        cin.tie(NULL);

        if ((accumulate(gas.begin(), gas.end(), 0)) < accumulate(cost.begin(), cost.end(), 0))
            return -1;

        int n = gas.size();
        int total_surplus = 0;
        int surplus = 0;
        int start = 0;
        
        for(int i = 0; i < n; i++){
            surplus += gas[i] - cost[i];
            if(surplus < 0){
                surplus = 0;
                start = i + 1;
            }
        }
        return start;
    }
};