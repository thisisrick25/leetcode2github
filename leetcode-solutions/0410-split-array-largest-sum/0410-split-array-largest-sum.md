# 0410. split-array-largest-sum

## cpp

[View Solution](0410-split-array-largest-sum.cpp)


```cpp
class Solution {
private:
    bool checkSplit(vector<int>& nums, int m, int mid) {
        int subArrayCount = 0, currSum=0;
            for(int i = 0; i < nums.size(); i++){
                if(currSum + nums[i] <= mid)
                    currSum += nums[i];
                else
                    subArrayCount++, currSum = nums[i];
            }
        subArrayCount++;
        return (subArrayCount <= m);
    }
    
public:
    int splitArray(vector<int>& nums, int m) {
        int lower = 0, upper = 0;
        for(auto x : nums) {
            lower = max(x, lower);
            upper += x;
        }
        
        int mid = 0, ans = 0;
        while(lower <= upper) {
            mid = (lower + upper) / 2;
            
            // int subArrayCount = 1, currSum=0;
            // for(int i = 0; i < nums.size(); ++i){
            //     if(currSum + nums[i] <= mid)
            //         currSum += nums[i];
            //     else
            //         subArrayCount++, currSum = nums[i];
            // }
            
            // if(subArrayCount <= m)
            if(checkSplit(nums, m, mid))
                upper = mid - 1, ans = mid;
            else
                lower = mid + 1;
        }
        return ans;
    }
};
```
