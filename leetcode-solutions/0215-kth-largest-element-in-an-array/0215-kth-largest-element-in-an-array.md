# 0215. kth-largest-element-in-an-array

## cpp

[View Solution](0215-kth-largest-element-in-an-array.cpp)


```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        for (int num : nums) {
            pq.push(num);
            if (pq.size() > k) {
                pq.pop();
            }
        }
        return pq.top();
    }
};

```
