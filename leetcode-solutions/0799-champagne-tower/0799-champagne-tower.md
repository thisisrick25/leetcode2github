# 0799. champagne-tower

## cpp

[View Solution](0799-champagne-tower.cpp)


```cpp
class Solution {
public:
double champagneTower(int poured, int query_row, int query_glass) {
        
        //dp matrix
        double v[101][101] = {0.0};
    // vector<vector<double>> v( 101 , vector<double> (101, 0));
    
        // as first glass will be poured always
        // ans overflow will be flowed to next level
        v[0][0] = poured;
    
        for (int i = 0; i <= query_row; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                // If the glass >=1
                if (v[i][j] >= 1)
                {
                    // split  (v[i][j] - 1) into next level
                    v[i + 1][j]     += (v[i][j] - 1) / 2.0;
                    v[i + 1][j + 1] += (v[i][j] - 1) / 2.0;
                    v[i][j] = 1;
                }
            }
        }
        return v[query_row][query_glass];
    }
};


// class Solution {
// public:
//     int p;
//     vector<vector<double>>dp;
    
//     double f(int r , int c){
//         if(c<0 || c>r)return 0;
//         if(c==0 && r==0)return p;
//         if(dp[r][c]!=-1)return dp[r][c];
        
//         return dp[r][c] = ( max(f(r-1,c)-1,0.0) + max(f(r-1,c-1)-1,0.0) )/2;  
//        //Taking max becoz after subtracting 1 , its possible answer become <0 , which is not a possible liquid  count  . So 0 will be taken

//     } 
    
//     double champagneTower(int poured, int r, int c) {
//         p=poured;
//         dp.resize(r+1,vector<double>(c+1,-1));
//         return min(1.0,f(r,c));  
//         //Taking min becoz the liquid count be >1 , but each glass could contain at max 1 liquid count 
//     }
// };
```
