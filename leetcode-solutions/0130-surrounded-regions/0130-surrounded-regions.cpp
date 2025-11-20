class Solution {
public:
    void solve(vector<vector<char>>& board) {
       int m=board.size();
        int n=board[0].size();
        vector<vector<bool>> visit(m,vector<bool>(n,1));
        for(int i=0;i<m;i++)
        {
            dfs(board,i,0,m,n);
            dfs(board,i,n-1,m,n);
        }
         for(int i=0;i<n;i++)
        {
            dfs(board,0,i,m,n);
            dfs(board,m-1,i,m,n);
        }
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                 if(board[i][j]=='O')
                 board[i][j]='X';
                else if(board[i][j]=='.')
                    board[i][j]='O';
            }
        }
        return ;
    }
    void dfs(vector<vector<char>>& board,int i,int j,int m,int n)
    {
        if(i<0 || j<0 || i>m-1 ||j>n-1 || board[i][j]!='O')
            return;
        board[i][j]='.';
        
        int x[]={0,0,1,-1}, y[]={1,-1,0,0};
        for(int k=0;k<4;k++){
            dfs(board,i+x[k],j+y[k],m,n);
        }
        
        return ;
    }
};