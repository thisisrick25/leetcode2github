# 0847. shortest-path-visiting-all-nodes

## cpp

[View Solution](0847-shortest-path-visiting-all-nodes.cpp)


```cpp
class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        if ((int)graph.size() == 1)
            return 0;
        int n = (int)graph.size();
        int endMask = (1 << n) - 1;
        vector<vector<bool>> seen(n, vector<bool>(endMask, false));

        queue<pair<int, int>> q;
        for (int i=0;i<n;i++) {
            q.push(make_pair(i, 1 << i));
            seen[i][1 << i] = true;
        }

        int steps = 0;

        while (!q.empty()) {
            int sz = (int)q.size();
            while (sz--) {
                auto top = q.front();
                q.pop();
                int node = top.first;
                int currentMask = top.second;
                for (int child : graph[node]) {
                    int nextMask = currentMask | (1 << child);
                    if (nextMask == endMask)
                        return 1 + steps;

                    if (!seen[child][nextMask]) {
                        seen[child][nextMask] = true;
                        q.push(make_pair(child, nextMask));
                    }
                }
            }
            steps++;
        }
        return -1;
    }
};
```
