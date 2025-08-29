# 0713. subarray-product-less-than-k

## cpp

[View Solution](0713-subarray-product-less-than-k.cpp)


```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        
        int begin = 0, end = 0, prod = 1, ans = 0;
        
        if(k <= 1)
            return 0;
        
        while(end < nums.size()) {
            prod *= nums[end];
            end++;
            
            while(prod >= k) {
                prod /= nums[begin];
                begin++;
            }
            ans += end - begin;
            
        }
        return ans;
    }
};
```
