class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        vector<int> arr;
        
        for(int i = 0; i < nums.size(); i++)
        {
            nums[i] = nums[i] * nums[i];
            arr.push_back(nums[i]);
        }
        
        sort(arr.begin(), arr.end());
        
        return arr;
        
//         int start=0;
//         int end=nums.size()-1;
        
//         vector <int> res(nums.size());
//         int pos = nums.size()-1;
        
//         while(start <= end)
//         {
//             if(abs(nums[start]) < abs(nums[end])) {
//                 res[pos--] = nums[end] * nums[end];
//                 end--;
//             } else{
//                 res[pos--] = nums[start] * nums[start];
//                 start++;
//             }
//         }
        
//         return res;
    }
};