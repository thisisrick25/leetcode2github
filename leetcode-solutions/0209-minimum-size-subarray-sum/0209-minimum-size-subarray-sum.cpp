class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        
        int begin = 0, end = 0, sum = 0, ans = INT_MAX;
        
        while(end < nums.size()) {
            sum += nums[end];
            // target -=nums[end];
            end++;
            while(sum >= target) {
            // while(target <= 0) {
                ans = min(ans, end - begin);
                // sum -= nums[begin];
                target += nums[begin];
                begin++;
            }
        }
        return ans == INT_MAX ? 0 : ans;
        // return ans % INT_MAX;
    }
};