# 0452. minimum-number-of-arrows-to-burst-balloons

## cpp

[View Solution](0452-minimum-number-of-arrows-to-burst-balloons.cpp)


```cpp
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& p) {
        sort(p.begin(), p.end());
        int lastpoint = p[0][1];
        int ans = 1;
        for(auto point : p) {
            if(point[0] > lastpoint) {
                ans++;
                lastpoint = point[1];
            }
            lastpoint = min(point[1],lastpoint);
        }
        return ans;
    }

};
```
