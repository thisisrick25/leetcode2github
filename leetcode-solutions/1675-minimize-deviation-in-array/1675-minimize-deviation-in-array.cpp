class Solution {
public:
//     int minimumDeviation(vector<int>& n) {
//     int res = INT_MAX, min_n = INT_MAX;
//     for (int i = 0; i < n.size(); ++i) {
//         n[i] = n[i] % 2 ? n[i] * 2 : n[i];
//         min_n = min(min_n, n[i]);
//     }     
//     make_heap(begin(n), end(n));
//     while (n[0] % 2 == 0) {
//         res = min(res, n[0] - min_n);
//         min_n = min(min_n, n[0] / 2);
//         pop_heap(begin(n), end(n));
//         n.back() /= 2;
//         push_heap(begin(n), end(n));
//     }
//     return min(res, n[0] - min_n);
// }
    
    int minimumDeviation(vector<int>& nums) {
    int res = INT_MAX, min_n = INT_MAX;
    priority_queue<int> pq;
    for (auto n : nums) {
        n = n % 2 ? n * 2 : n;
        pq.push(n);
        min_n = min(min_n, n); 
    }
    while (pq.top() % 2 == 0) {
        res = min(res, pq.top() - min_n);
        min_n = min(min_n, pq.top() / 2);
        pq.push(pq.top() / 2);
        pq.pop();
    }
    return min(res, pq.top() - min_n);
}
};