# 3012. minimize-length-of-array-using-operations

## cpp

[View Solution](3012-minimize-length-of-array-using-operations.cpp)


```cpp
class Solution {
public:
    int minimumArrayLength(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        int n = nums.size();
        
        if (n > 2 && nums[0] != nums[1])
            return 1;

        int d = nums[0]; 
        for (int i : nums) {
            d = gcd(d, i);
        }

        int count = 0;
        for (int i : nums) {
            if (i == d)
                count++;
        }

        return std::max(1, (count + 1) / 2);
    }

private:
    int gcd(int i, int j) {
        while (j != 0) {
            int temp = j;
            j = i % j;
            i = temp;
        }
        return i;
    }
};
```
