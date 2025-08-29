# 0121. best-time-to-buy-and-sell-stock

## cpp

[View Solution](0121-best-time-to-buy-and-sell-stock.cpp)


```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() == 0)
            return 0;
        
        int min = INT_MAX; //min price
        // int min = prices[0];
        int profit = 0; //overall profit
        int profit_t = 0; //profit if sold today
        
        for(int i = 0; i < prices.size(); i++) {
            if(min > prices[i]) {
                min = prices[i];
            }
            
            profit_t = prices[i] - min;
            if(profit < profit_t) {
                profit = profit_t;
            }
        }
        return profit;
    }
};
```
