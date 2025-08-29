class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int, int> map;
        
//         int end = 0, begin = 0;
        
//         while(end < nums.size()) {
            
//             if(end>k){
//                 map[nums[begin++]]--;
//             }
            
//             if(map[nums[end]]>0){
//                 return true;
//             }
            
//             map[nums[end]]++;
//             end++;
//         }
//         return false;
        
        int i = 0;
        while (i < nums.size()) {
            if (map.find(nums[i]) != map.end() && i - map[nums[i]] <= k) {
                return true;
            }
            map[nums[i]] = i;
            i++;
        }
        return false;

    }
};