---
number: 0441
slug: arranging-coins
difficulty: Easy
languages: cpp
latest_solved_at: 2021-11-05T20:09:19.000Z
generated_at: 2025-11-20T18:56:56.498Z
---

# 0441. Arranging Coins

**URL:** [https://leetcode.com/problems/arranging-coins/](https://leetcode.com/problems/arranging-coins/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-11-05T20:09:19.000Z

---

## Problem Description

<p>You have <code>n</code> coins and you want to build a staircase with these coins. The staircase consists of <code>k</code> rows where the <code>i<sup>th</sup></code> row has exactly <code>i</code> coins. The last row of the staircase <strong>may be</strong> incomplete.</p>

<p>Given the integer <code>n</code>, return <em>the number of <strong>complete rows</strong> of the staircase you will build</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Because the 3<sup>rd</sup> row is incomplete, we return 2.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg" style="width: 333px; height: 333px;" />
<pre>
<strong>Input:</strong> n = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> Because the 4<sup>th</sup> row is incomplete, we return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

- [cpp](0441-arranging-coins.cpp)

---

[View raw solution](0441-arranging-coins.cpp)

```cpp
class Solution {
public:
    int arrangeCoins(int n) {
        // int k = 1;
        // long total = 1;
        // while (total <= n) {
        //     total += ++k;
        // }
        // return k-1;
        return int(sqrt(8*long(n)+1)-1)/2;
    }
};
```

