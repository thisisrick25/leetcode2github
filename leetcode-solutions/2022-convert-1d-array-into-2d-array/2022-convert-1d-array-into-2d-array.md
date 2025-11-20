# 2022. convert-1d-array-into-2d-array

## cpp

[View Solution](2022-convert-1d-array-into-2d-array.cpp)


```cpp
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        
        if(original.size() != m*n)
            return {};
        
        vector<vector<int>> ans(m, vector<int>(n));
        int index = 0;
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                ans[i][j] = original[index];
                index++;
            }
        }
        
//         for(int i = 0; i < original.size(); i++) {
//             ans[i / n][i % n] = original[i];
//         }
        
        return ans;
        
    }
};
```
