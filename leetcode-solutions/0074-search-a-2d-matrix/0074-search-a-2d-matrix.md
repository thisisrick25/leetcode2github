# 0074. search-a-2d-matrix

## cpp

[View Solution](0074-search-a-2d-matrix.cpp)


```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();
        
        int start = 0;
        int end = m * n - 1;
        
        while (start <= end){
            int mid = start + (end - start) / 2;
            if(matrix[mid / n][mid % n] == target)
                return true;
            
            if (matrix[mid / n][mid % n] < target)
                start = mid + 1;
            else if (matrix[mid / n][mid % n] > target)
                end = mid - 1;
        }
        
        return false;
    }
};
```
