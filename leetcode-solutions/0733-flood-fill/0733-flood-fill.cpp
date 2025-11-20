class Solution {
public:
void colorizer(vector<vector<int>>& image, int sr, int sc, int oldColor,int newColor){
    
       // if(sr>=image.size()||sc>=image[0].size()||sc<0||sr<0||image[sr][sc]!=oldColor||oldColor==newColor) 
    
//  if the given cell is already filled with new color image[sr][sc] == newColor then there is no need to visit it again as it will further increase repetitions among already colored cells linked with it and hence increasing the execution time. so  splitting the if condition into two prevents stack overflow
    
        if(sr>=image.size()||sc>=image[0].size()||sc<0||sr<0)
            return;
        if(image[sr][sc]!=oldColor||oldColor==newColor)
            return;
        image[sr][sc]=newColor;                                                 
    
    // colorizer(image,sr+1,sc,oldColor,newColor);
    // colorizer(image,sr-1,sc,oldColor,newColor);
    // colorizer(image,sr,sc+1,oldColor,newColor);
    // colorizer(image,sr,sc-1,oldColor,newColor);
    
    int x[]={0,0,1,-1}, y[]={1,-1,0,0};
        for(int i=0;i<4;i++){
            colorizer(image,sr+x[i],sc+y[i],oldColor,newColor);
        }
    
    }
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor){
        colorizer(image,sr,sc,image[sr][sc],newColor);
        return image;
    }
};



// class Solution {
// public:
//     vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        
//         int rows=image.size(), cols=image[0].size(), oldColor=image[sr][sc];
        
//         list<vector<int>> togo; togo.push_back({sr,sc});
        
//         int seen[51][51] = {{0}};
//         int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
        
//         while(togo.size()) {
//             int r=togo.front()[0], c=togo.front()[1]; togo.pop_front();
            
//             image[r][c]=newColor;
//             for(auto& d:dirs) {
                
//                 int rr=r+d[0], cc=c+d[1];
//                 if(rr<0 || rr>=rows ||cc<0 ||cc>=cols)
//                     continue; // keep togo safe
//                 if(image[rr][cc]!=oldColor)
//                     continue;            // keep togo clean
//                 if(seen[rr][cc])
//                     continue;
//                 seen[rr][cc]=1;
                
//                 togo.push_back({rr,cc});
//             }
//         }
//         return image;
        
//     }
// };