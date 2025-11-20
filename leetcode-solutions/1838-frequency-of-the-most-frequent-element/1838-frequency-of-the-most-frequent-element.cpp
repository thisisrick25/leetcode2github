class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        int left = 0, right = 0;
        long sum = 0;
        sort(nums.begin(), nums.end());
        while(right < nums.size()) {
            long x = nums[right];
            sum += x;

            if(k + sum < x * (right - left + 1)){
                sum -= nums[left];
                left++;
            }
            right++;
        }
        return right - left;
    }
};