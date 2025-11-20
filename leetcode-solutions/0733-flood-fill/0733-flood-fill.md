---
number: 0733
slug: flood-fill
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-07T19:15:26.000Z
generated_at: 2025-11-20T19:25:25.203Z
---

# 0733. Flood Fill

**URL:** [https://leetcode.com/problems/flood-fill/](https://leetcode.com/problems/flood-fill/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-07T19:15:26.000Z

---

## Problem Description

<p>You are given an image represented by an <code>m x n</code> grid of integers <code>image</code>, where <code>image[i][j]</code> represents the pixel value of the image. You are also given three integers <code>sr</code>, <code>sc</code>, and <code>color</code>. Your task is to perform a <strong>flood fill</strong> on the image starting from the pixel <code>image[sr][sc]</code>.</p>

<p>To perform a <strong>flood fill</strong>:</p>

<ol>
	<li>Begin with the starting pixel and change its color to <code>color</code>.</li>
	<li>Perform the same process for each pixel that is <strong>directly adjacent</strong> (pixels that share a side with the original pixel, either horizontally or vertically) and shares the <strong>same color</strong> as the starting pixel.</li>
	<li>Keep <strong>repeating</strong> this process by checking neighboring pixels of the <em>updated</em> pixels&nbsp;and modifying their color if it matches the original color of the starting pixel.</li>
	<li>The process <strong>stops</strong> when there are <strong>no more</strong> adjacent pixels of the original color to update.</li>
</ol>

<p>Return the <strong>modified</strong> image after performing the flood fill.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">[[2,2,2],[2,2,0],[2,0,1]]</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg" style="width: 613px; height: 253px;" /></p>

<p>From the center of the image with position <code>(sr, sc) = (1, 1)</code> (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.</p>

<p>Note the bottom corner is <strong>not</strong> colored 2, because it is not horizontally or vertically connected to the starting pixel.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">[[0,0,0],[0,0,0]]</span></p>

<p><strong>Explanation:</strong></p>

<p>The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == image.length</code></li>
	<li><code>n == image[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 50</code></li>
	<li><code>0 &lt;= image[i][j], color &lt; 2<sup>16</sup></code></li>
	<li><code>0 &lt;= sr &lt; m</code></li>
	<li><code>0 &lt;= sc &lt; n</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0733-flood-fill.cpp)

```cpp
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
```

