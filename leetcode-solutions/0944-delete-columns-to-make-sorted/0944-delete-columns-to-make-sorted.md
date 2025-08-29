# 0944. delete-columns-to-make-sorted

## cpp

[View Solution](0944-delete-columns-to-make-sorted.cpp)


```cpp
class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        const int n = strs[0].length();
        int ans = 0;

        for (int j = 0; j < n; ++j)
          for (int i = 0; i + 1 < strs.size(); ++i)
            if (strs[i][j] > strs[i + 1][j]) {
              ++ans;
              break;
            }

        return ans;
    }
};
```
