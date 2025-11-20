---
number: 1359
slug: count-all-valid-pickup-and-delivery-options
difficulty: Hard
languages: cpp
latest_solved_at: 2022-03-26T22:50:25.000Z
generated_at: 2025-11-20T18:55:12.986Z
---

# 1359. Count All Valid Pickup and Delivery Options

**URL:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2022-03-26T22:50:25.000Z

---

## Problem Description

<p>Given <code>n</code> orders, each order consists of a pickup and a delivery service.</p>

<p>Count all valid pickup/delivery possible sequences such that delivery(i) is always after of&nbsp;pickup(i).&nbsp;</p>

<p>Since the answer&nbsp;may be too large,&nbsp;return it modulo&nbsp;10^9 + 7.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong> All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 90
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 500</code></li>
</ul>


---

## Solutions

- [cpp](1359-count-all-valid-pickup-and-delivery-options.cpp)

---

[View raw solution](1359-count-all-valid-pickup-and-delivery-options.cpp)

```cpp
class Solution {
public:
    int countOrders(int n) {
        long res = 1, mod = 1e9 + 7;
        for (int i = 1; i <= n; ++i)
            res = res * (i * 2 - 1) * i % mod;
        
        return res;
    }

};
```

