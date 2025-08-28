# 3393. count-paths-with-the-given-xor-value

## cpp

[View Solution](3393-count-paths-with-the-given-xor-value.cpp)


```cpp
class Solution {
public:
    int countPathsWithXorValue(vector<vector<int>>& grid, int k) {
        const int MOD = 1e9 + 7;
        int m = grid.size();
        int n = grid[0].size();
        int maxXor = 15;
        
        vector<vector<vector<int>>> dp(m, vector<vector<int>>(n, vector<int>(maxXor + 1, 0)));
        
        dp[0][0][grid[0][0]] = 1;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int xorVal = 0; xorVal <= maxXor; xorVal++) {
                    if (dp[i][j][xorVal] > 0) {
                        if (j + 1 < n) {
                            int newXor = xorVal ^ grid[i][j + 1];
                            dp[i][j + 1][newXor] = (dp[i][j + 1][newXor] + dp[i][j][xorVal]) % MOD;
                        }
                        if (i + 1 < m) {
                            int newXor = xorVal ^ grid[i + 1][j];
                            dp[i + 1][j][newXor] = (dp[i + 1][j][newXor] + dp[i][j][xorVal]) % MOD;
                        }
                    }
                }
            }
        }
        
        return dp[m - 1][n - 1][k];
    }
};
```
