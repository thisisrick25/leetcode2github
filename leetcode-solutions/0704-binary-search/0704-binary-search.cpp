class Solution {
public:
    int search(vector<int>& nums, int target) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        cout.tie(0);
        int first = 0, last = nums.size() - 1;
        while(first <= last)
        {
            int mid = last + (first - last)/2;
            if(nums[mid] == target)
                return mid;
            else if(nums[mid] > target)
                last = mid - 1;
            else
                first = mid + 1;
        }
        return -1;
        
    }
};