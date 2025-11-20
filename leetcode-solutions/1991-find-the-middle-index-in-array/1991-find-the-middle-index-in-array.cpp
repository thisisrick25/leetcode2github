class Solution {
public:
    int findMiddleIndex(vector<int>& nums)
    {
        
        if(nums.size() == 1)
            return 0;
    
        int n = nums.size();
        
        vector<int> prefixSum(nums);        // stores sum for 0 to n
        vector<int> suffixSum(nums);        // stores sum from n to 0
        
        // fill prefixSum array
        for(int i = 1; i < n; i++)
            prefixSum[i] += prefixSum[i-1];
        
        // fill suffix sum array
        for(int i = n-2; i >= 0; i--)
            suffixSum[i] += suffixSum[i+1];
        
        // handle edge case 1
        if(n>1 && suffixSum[1] == 0)
           return 0;      
        
        for(int i = 1; i < n-1; i++){
            if(prefixSum[i-1] == suffixSum[i+1])
                return i;
        }
        
       // handle edge case 2
        if(n > 1 && prefixSum[n-2]==0)
            return n-1;

        return -1;
    }
};