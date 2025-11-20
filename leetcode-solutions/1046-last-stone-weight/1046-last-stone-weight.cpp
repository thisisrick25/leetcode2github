class Solution {
public:
    int lastStoneWeight(vector<int>& s) {
        // priority_queue<int> q(begin(st), end(st));
        // while (q.size() > 1) {
        //     auto w1 = q.top(); q.pop();
        //     auto w2 = q.top(); q.pop();
        //     if (w1 - w2 > 0)
        //         q.push(w1 - w2);
        // }
        // return q.empty() ? 0 : q.top();
        
        make_heap(s.begin(), s.end());
        
         while (s.size() > 1) {
            int x = s.front();
            pop_heap(s.begin(), s.end());
            s.pop_back();
            
            int y = s.front();
            pop_heap(s.begin(), s.end());
            s.pop_back();
            
            if (x == y) continue;
            
            s.push_back(abs(x - y));
            push_heap(s.begin(), s.end());
        }
        
        return s.size() ? s.front() : 0;

    }
};