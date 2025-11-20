class Solution {
public:
    vector<int> lastVisitedIntegers(vector<string>& words) {
        vector<int> ans;
        vector<int> nums;
        int prevCount = 0;

        for(string& word : words) {
            if (word == "prev") {
                if (prevCount < nums.size()) {
                    ans.push_back(nums[nums.size() - 1 - prevCount]);
                } else {
                    ans.push_back(-1);
                }
                prevCount++;
            }
            else {
                int num = stoi(word);
                nums.push_back(num);
                prevCount = 0;
            }
        }

        return ans;
    }
};

