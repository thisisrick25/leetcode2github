---
number: 0121
slug: best-time-to-buy-and-sell-stock
difficulty: Easy
languages: cpp
latest_solved_at: 2022-02-13T17:38:57.000Z
generated_at: 2025-11-20T18:55:53.181Z
---

# 0121. Best Time to Buy and Sell Stock

**URL:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-02-13T17:38:57.000Z

---

## Problem Description

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>

<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0121-best-time-to-buy-and-sell-stock.cpp)

---

[View raw solution](0121-best-time-to-buy-and-sell-stock.cpp)

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

