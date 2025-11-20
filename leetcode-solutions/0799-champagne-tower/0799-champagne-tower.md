---
number: 0799
slug: champagne-tower
difficulty: Medium
languages: cpp
latest_solved_at: 2022-03-06T14:56:13.000Z
generated_at: 2025-11-20T19:23:40.018Z
---

# 0799. Champagne Tower

**URL:** [https://leetcode.com/problems/champagne-tower/](https://leetcode.com/problems/champagne-tower/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-03-06T14:56:13.000Z

---

## Problem Description

<p>We stack glasses in a pyramid, where the <strong>first</strong> row has <code>1</code> glass, the <strong>second</strong> row has <code>2</code> glasses, and so on until the 100<sup>th</sup> row.&nbsp; Each glass holds one cup&nbsp;of champagne.</p>

<p>Then, some champagne is poured into the first glass at the top.&nbsp; When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.&nbsp; When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.&nbsp; (A glass at the bottom row has its excess champagne fall on the floor.)</p>

<p>For example, after one cup of champagne is poured, the top most glass is full.&nbsp; After two cups of champagne are poured, the two glasses on the second row are half full.&nbsp; After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.&nbsp; After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.</p>

<p><img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png" style="height: 241px; width: 350px;" /></p>

<p>Now after pouring some non-negative integer cups of champagne, return how full the <code>j<sup>th</sup></code> glass in the <code>i<sup>th</sup></code> row is (both <code>i</code> and <code>j</code> are 0-indexed.)</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> poured = 1, query_row = 1, query_glass = 1
<strong>Output:</strong> 0.00000
<strong>Explanation:</strong> We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> poured = 2, query_row = 1, query_glass = 1
<strong>Output:</strong> 0.50000
<strong>Explanation:</strong> We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> poured = 100000009, query_row = 33, query_glass = 17
<strong>Output:</strong> 1.00000
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;=&nbsp;poured &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= query_glass &lt;= query_row&nbsp;&lt; 100</code></li>
</ul>

---

## Solutions

[View raw cpp solution](0799-champagne-tower.cpp)

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

