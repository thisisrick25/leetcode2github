# 1337. the-k-weakest-rows-in-a-matrix

## cpp

[View Solution](1337-the-k-weakest-rows-in-a-matrix.cpp)


```cpp
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int n = mat.size();
        
        // count of 1 in ith row, {count,index};
        set<pair<int,int> > s;
        
        // set will automatically sort the pair {count, index} in ascending order.
        
        for(int i = 0; i<n; ++i)
        {
            int cnt = count(mat[i].begin(), mat[i].end(), 1);
            s.insert({cnt, i});
        }
        
        vector<int> ans;
        // first k weakest row is our answer 
        for(auto i : s)
        {
            if(k == 0)
                break;
            ans.push_back(i.second);
            --k;
        }
        
        return ans;
    }
};
```
