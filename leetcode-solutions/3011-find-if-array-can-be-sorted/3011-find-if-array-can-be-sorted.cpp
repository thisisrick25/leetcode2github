class Solution {
public:
    bool checker(int a, int b) {
        return __builtin_popcount(a) == __builtin_popcount(b);
    }

    bool canSortArray(vector<int>& arr) {
        vector<int> original = arr;

        bool swapsMade;
        do {
            swapsMade = false;
            for (int i = 0; i < arr.size() - 1; i++) {
                if (checker(arr[i], arr[i + 1])) {
                    if (arr[i] > arr[i + 1]) {
                        swap(arr[i], arr[i + 1]);
                        swapsMade = true;
                    }
                }
            }
        } while (swapsMade);

        return is_sorted(arr.begin(), arr.end());
    }
};