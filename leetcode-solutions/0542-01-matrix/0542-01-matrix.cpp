class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        
        int rows = mat.size(), cols = mat[0].size();
        
        if(rows == 0)
            return mat;
        
        vector<vector<int>> dist(rows, vector<int> (cols, rows*cols));
        queue<pair<int, int>> q;
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                if(mat[i][j] == 0){
                    dist[i][j] = 0;
                q.push({i, j});
                }
            }
        }
        
        int x[] = {0, 0, 1, -1}, y[] = {1, -1, 0, 0};
        
        while(!q.empty()) {
            
            // pair<int, int> curr = q.front();
            auto [r, c] = q.front();
            q.pop();
            
            for(int i = 0; i < 4; i++) {
                int nr = r + x[i], nc = c + y[i];
                
                if (nr >= 0 and nr < rows and nc >= 0 and nc < cols) {
                    if(dist[nr][nc] > dist[r][c] + 1) {
                        dist[nr][nc] = dist[r][c] + 1;
                        q.push({nr, nc});
                    }
                }
            }
        }
        return dist;
    }
};



// class Solution {
// public:
//     vector<int> DIR = {0, 1, 0, -1, 0};
//     vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
//         int m = mat.size(), n = mat[0].size();
//         queue<pair<int, int>> q;
//         for (int r = 0; r < m; ++r)
//             for (int c = 0; c < n; ++c)
//                 if (mat[r][c] == 0) q.emplace(r, c);
//                 else mat[r][c] = -1; // Marked as not processed yet!

//         while (!q.empty()) {
//             auto [r, c] = q.front(); q.pop();
//             for (int i = 0; i < 4; ++i) {
//                 int nr = r + DIR[i], nc = c + DIR[i+1];
//                 if (nr < 0 || nr == m || nc < 0 || nc == n || mat[nr][nc] != -1) continue;
//                 mat[nr][nc] = mat[r][c] + 1;
//                 q.emplace(nr, nc);
//             }
//         }
//         return mat;
//     }
// };
