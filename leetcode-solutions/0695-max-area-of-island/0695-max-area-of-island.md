# 0695. max-area-of-island

## cpp

[View Solution](0695-max-area-of-island.cpp)


```cpp
class Solution {
public:
    int totalAreaOfIsland(vector<vector<int>>& grid, int i, int j) {
        int total = 1;
        
        if(i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size())
            return 0;
        
        if(grid[i][j] == 0)
            return 0;
        
        grid[i][j] = 0;
        
        int x[]={0,0,1,-1}, y[]={1,-1,0,0};
        
        for(int k = 0; k < 4; k++) {
            total += totalAreaOfIsland(grid, i + x[k], j + y[k]);
        }
        return total;
    }
    
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int rows = grid.size(), columns = grid[0].size();
        
        int area = 0;
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                if(grid[i][j] == 1) {
                    area = max(area, totalAreaOfIsland(grid, i, j));
                }
            }
        }
        return area;
    }
};


// class Solution {
//     int rows, cols;
//      int count = 0;
// public:
//     void totalAreaOfIsland(vector<vector<int>>& grid,int x, int y){
        
//         if( x< 0 || y<0 || x>= rows || y>= cols || grid[x][y] != 1)
//             return;
        
//         count++;
//         grid[x][y] = 0;
//         int dx[] = {1,-1,0,0};
//         int dy[] = {0,0,1,-1};
        
//         for(int i = 0; i<4; i++){
//             totalAreaOfIsland(grid, x + dx[i], y + dy[i]);
//         }
//     }
    
//     int maxAreaOfIsland(vector<vector<int>>& grid) {
//         rows = grid.size();
//         cols = grid[0].size();
        
//         int ans = 0;
//         for(int i = 0; i<rows; i++){
//             for(int j = 0; j<cols; j++){
//                 if(grid[i][j] == 1){
//                    count = 0;
//                     totalAreaOfIsland(grid,i,j);
//                     ans = max(ans,count);
//                 }
//             }
//         }
//         return ans;
//     }
// };
```
