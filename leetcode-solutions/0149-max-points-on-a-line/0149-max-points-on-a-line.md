---
number: 149
slug: max-points-on-a-line
title: Max Points on a Line
difficulty: Hard
languages: cpp
generated_at: 2025-11-20T18:15:50.839Z
---

# 0149. Max Points on a Line

**URL:** [https://leetcode.com/problems/max-points-on-a-line/](https://leetcode.com/problems/max-points-on-a-line/)  
**Difficulty:** Hard  
**Languages:** cpp

---

## Problem Description

<p>Given an array of <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a point on the <strong>X-Y</strong> plane, return <em>the maximum number of points that lie on the same straight line</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg" style="width: 300px; height: 294px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[2,2],[3,3]]
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg" style="width: 300px; height: 294px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 300</code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
	<li>All the <code>points</code> are <strong>unique</strong>.</li>
</ul>


---

## Solutions

- [cpp](0149-max-points-on-a-line.cpp) — 2023-01-08T21:41:48.000Z

---

### cpp — 2023-01-08T21:41:48.000Z

- Runtime: 98 ms  
- Memory: 25.8 MB  

[View raw solution](0149-max-points-on-a-line.cpp)


```cpp
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        int n=points.size();
        
        if(n<=2)
            return n;
        
        int ans = 0;

        for(auto it1 : points){
            unordered_map<double,int> mp;
            double x1 = it1[0], y1 = it1[1];
            for(auto it2 : points){   
                if(it2 == it1)
                    continue;
                double x2 = it2[0], y2 = it2[1];
                double slope;
                if(x2-x1 == 0){
                    slope = INT_MAX; // slope is infinity for vertical line
                }
                else{
                    slope = (y2-y1)/(x2-x1);   
                }
                mp[slope]++;
                ans = max(ans,mp[slope]);
            }
        }
        return ans+1; //including point i
    }
};

```

