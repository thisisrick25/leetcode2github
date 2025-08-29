class Solution {
public:
    bool canJump(vector<int>& nums) {
//         int lastIndexPos = nums.size() - 1;
        
//         for(int i = lastIndexPos - 1; i >=0; i--) {
//             if(i + nums[i] >= lastIndexPos)
//                 lastIndexPos = i;
//         }
        
//         if(lastIndexPos == 0)
//             return true;
        
//         return false;
        
        
    //     int size=nums.size();
    // int step=nums[0];
    // for(int i=1;i<size;++i){
    //     step--;
    //     if(step<0)
    //        return false;
    //     if(nums[i]>step)
    //        step=nums[i];
    // }
    // return true;
        
        
//         int n = nums.size();
//         int can_reach = 0;
        
//         for(int i=0;i<=can_reach;i++){
//             can_reach = max(can_reach,i+nums[i]);
//             if(can_reach >= n-1) return 1;
//         }
        
//         return 0;
        
        
        
        int next = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            next = max(next, i + nums[i]);

            if (next == i) {
                return false;
              }
        }

        return true;
        
    }
};