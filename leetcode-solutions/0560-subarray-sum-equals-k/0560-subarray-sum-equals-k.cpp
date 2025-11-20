class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        
        //TLE------
//         int c = 0;
//         for(int i = 0; i < nums.size(); i++) {
//             int sum = nums[i];
//             if(sum == k)
//                 c++;
//             for(int j = i+1; j <nums.size(); j++) {
//                 sum += nums[j];
                
//                 if(sum == k)
//                     c++;
//             }
//         }
//         return c;
        
        unordered_map<int,int> mp;
        int sum=0,ans=0;
        mp[sum] = 1;
        for(auto it:nums){
            sum += it;
            int find = sum - k;
            if(mp.find(find) != mp.end()){
                ans += mp[find];
            }
            mp[sum]++;
        }
        return ans;
        
		// int ans = 0, sum = 0;
		// unordered_map<int, int> map; map[sum] = 1;
		// for(int i = 0; i < nums.size(); i++) {
		// 	sum += nums[i];
		// 	ans += map[sum - k];
		// 	map[sum]++;    
		// }
		// return ans; 
    }
};