# 0078. subsets

## cpp

[View Solution](0078-subsets.cpp)


```cpp
// class Solution {
// public:
//     vector<vector<int>> subsets(vector<int>& nums) {
//         vector<vector<int>> subs = {{}};
//         for (int num : nums) {
//             int n = subs.size();
//             for (int i = 0; i < n; i++) {
//                 subs.push_back(subs[i]); 
//                 subs.back().push_back(num);
//             }
//         }
//         return subs;
//     }
// };

class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> subs;
        vector<int> sub;
        subsets(nums, 0, sub, subs);
        return subs;
    }
private:
    void subsets(vector<int>& nums, int i, vector<int>& sub, vector<vector<int>>& subs) {
        subs.push_back(sub);
        for (int j = i; j < nums.size(); j++) {
            sub.push_back(nums[j]);
            subsets(nums, j + 1, sub, subs);
            sub.pop_back();
        }
    }
};
```
