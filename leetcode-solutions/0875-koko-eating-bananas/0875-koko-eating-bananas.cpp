class Solution {
private:
    bool canEat(vector<int>& piles, int h, int mid) {
        int hourCount = 0;
            for(int i = 0; i < piles.size(); i++){
                hourCount += ceil(double(piles[i]) / mid);
            }
        return (hourCount <= h);
    }
    
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int low = 1, high = 0;
        for(auto x : piles) {
            high = max(high, x);
        }
        
        int ans = 0;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            
            if(canEat(piles, h, mid))
                high = mid - 1, ans = mid;
            else
                low = mid + 1;   
        }
        return ans;
    }
};