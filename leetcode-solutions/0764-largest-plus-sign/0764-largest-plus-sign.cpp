class Solution {
public:
    int orderOfLargestPlusSign(int n, vector<vector<int>>& mines) {
        
        vector<vector<int>> mat(n, vector<int>(n, 1));
        
        // for (auto m : mines) {
        //     mat[m[0]][m[1]] = 0;
        // }
        
//         for(int i = 0;i< mines.size() ; i++)
//         {
//             mat[mines[i][0]][mines[i][1]] = 0;
//         }
        
//         vector<vector<int>> lef, rig, top, bot;
//         lef = rig = top = bot = mat;
        
//         for(int i=0;i<n;i++)
//         {
//             for(int j=0;j<n;j++)
//             {
//                 int x = n - i - 1;
//                 int y = n - j - 1;
//                 if( (i>0)   && top[i][j] )
//                     top[i][j] += top[i-1][j];
//                 if( (j>0)   && lef[i][j] ) 
//                     lef[i][j] += lef[i][j-1];
//                 if( (x<n-1) && bot[x][y] ) 
//                     bot[x][y] += bot[x+1][y];
//                 if( (y<n-1) && rig[x][y] ) 
//                     rig[x][y] += rig[x][y+1];
//             }
//         }
        
//         int ans = 0;
        
//         for(int i=0;i<n;i++)
//             for(int j=0;j<n;j++)
//                 ans = max(ans, min({lef[i][j], rig[i][j], top[i][j], bot[i][j]}));

//         return ans;
        
        
        int t[n][n];
        for(int i = 0; i<n; i++) {
            for(int j = 0; j<n; j++) {
                t[i][j] = n;
            }
        }
        
        for(vector<int>& vec : mines)
            t[vec[0]][vec[1]] = 0;
        
        int ans = 0;
        
        for(int i = 0; i<n; i++) {
            //t[][] will be updated to minimum of its left, right, up and down (count of 1s)
            
            //Look for longest streak of 1 at its left
            int left = 0;
            for(int j = 0; j < n; j++) {
                left = t[i][j] == 0 ? 0 : left+1;
                t[i][j] = min(t[i][j], left);
            }
            
            //Look for longest streak of 1 at its right
            int right = 0;
            for(int j = n-1; j>=0; j--) {
                right = t[i][j] == 0 ? 0 : right+1;
                t[i][j] = min(t[i][j], right);
            }
            
            //Look for longest streak of 1 at its up
            int up = 0;
            for(int k = 0; k < n; k++) {
                up = t[k][i] == 0 ? 0 : up+1;
                t[k][i] = min(t[k][i], up);
            }
            
            //Look for longest streak of 1 at its down
            int down = 0;
            for(int k = n-1; k >= 0; k--) {
                down = t[k][i] == 0 ? 0 : down+1;
                t[k][i] = min(t[k][i], down);
            }
        }
        
        //Finally, find the max one
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                ans = max(ans, t[i][j]);
            }
        }
        
        return ans;
        
        
    }
};