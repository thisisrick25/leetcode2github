class Solution {
public:
    int sumCounts(vector<int>& nums) {
        int n = nums.size();
        int result = 0;

        for (int i = 0; i < n; i++) {
            unordered_set<int> uniqueElements;
            for (int j = i; j < n; j++) {
                uniqueElements.insert(nums[j]);
                result += uniqueElements.size() * uniqueElements.size();
            }
        }

        return result;
    }
};