# 0001. two-sum

## cpp

[View Solution](0001-two-sum.cpp)


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map <int, int> map;

        for(int i = 0; i < nums.size(); i++) {
            int b = nums[i];
            int a = target - b;
            if(map.count(a))
                return {i, map[a]};
            map[b] = i;
        }

        return {};
    }
};
