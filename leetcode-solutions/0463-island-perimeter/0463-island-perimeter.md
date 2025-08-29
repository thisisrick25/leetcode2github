# 0463. island-perimeter

## cpp

[View Solution](0463-island-perimeter.cpp)


```cpp
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        
        if (grid.empty() || grid[0].empty())
            return 0;
        
        int x[] = {0, 0, 1, -1}, y[] = {1, -1, 0, 0};
        
        int row = grid.size(), col = grid[0].size(), perimeter = 0;
        for (int r = 0; r < row; ++r) {
            for (int c = 0; c < col; ++c) {
                if (grid[r][c] == 0)
                    continue; // Skip water cell
                perimeter += 4;
                for (int i = 0; i < 4; ++i) {
                    int nr = r + x[i], nc = c + y[i];
                    if (nr < 0 || nr == row || nc < 0 || nc == col || grid[nr][nc] == 0)
                        continue;
                    perimeter -= 1;
                }
            }
        }
        return perimeter;
        
    }
};
```
