class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
// 	// start from level 1 till the bottom-most level. Each time determine the best path to arrive at current cell
// 	for(int level = 1; level < size(triangle); level++) 
// 		for(int i = 0; i <= level; i++)  // triangle[level].size() == level + 1 (level starts from 0)
// 			// for the current level: 
// 			triangle[level][i] += min(triangle[level - 1][min(i, (int)size(triangle[level - 1]) - 1)], // we can either come from previous level and same index
// 			                          triangle[level - 1][max(i - 1, 0)]); // or the previous level and index-1
// 	// finally return the last element of the bottom level
// 	return *min_element(begin(triangle.back()), end(triangle.back())); 
// }
    
    
//     	for(int level = size(triangle) - 2; level >= 0; level--) // start from bottom-1 level
// 		for(int i = 0; i <= level; i++)
// 			 // for every cell: we could have moved here from same index or index+1 of next level
// 			triangle[level][i] += min(triangle[level + 1][i], triangle[level + 1][i + 1]);
// 	return triangle[0][0]; // lastly t[0][0] will contain accumulated sum of minimum path
// }
        
        
        int n;
        n=triangle.size();
        int dp[n][n];
        if(n==1)
            return triangle[0][0];
        for(int i=0;i<n;i++)
            for(int j=0;j<=i;j++)
                dp[i][j]=INT_MAX;
        for(int i=0;i<n-1;i++)
        {
            for(int j=0;j<=i;j++){
                if(i==0)
                {
                    dp[i][j]=triangle[0][0];
                    
                }
                //cout<<triangle[i][j]+triangle[i+1][j]<<" ";
                dp[i+1][j]=min(dp[i+1][j],dp[i][j]+triangle[i+1][j]);
                 //cout<<triangle[i][j]+triangle[i+1][j+1]<<" ";
                dp[i+1][j+1]=min(dp[i+1][j+1],dp[i][j]+triangle[i+1][j+1]);
            }
         
        }
        int mi;
        for(int i=0;i<n;i++){
            mi=min(mi,dp[n-1][i]);
        }
        return mi;
    }
};