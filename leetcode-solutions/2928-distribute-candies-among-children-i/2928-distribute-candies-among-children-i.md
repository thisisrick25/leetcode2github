---
number: 2928
slug: distribute-candies-among-children-i
difficulty: Easy
languages: cpp
latest_solved_at: 2023-11-11T15:31:55.000Z
generated_at: 2025-11-20T18:52:57.080Z
---

# 2928. Distribute Candies Among Children I

**URL:** [https://leetcode.com/problems/distribute-candies-among-children-i/](https://leetcode.com/problems/distribute-candies-among-children-i/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2023-11-11T15:31:55.000Z

---

## Problem Description

<p>You are given two positive integers <code>n</code> and <code>limit</code>.</p>

<p>Return <em>the <strong>total number</strong> of ways to distribute </em><code>n</code> <em>candies among </em><code>3</code><em> children such that no child gets more than </em><code>limit</code><em> candies.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5, limit = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, limit = 3
<strong>Output:</strong> 10
<strong>Explanation:</strong> There are 10 ways to distribute 3 candies such that no child gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 50</code></li>
	<li><code>1 &lt;= limit &lt;= 50</code></li>
</ul>


---

## Solutions

- [cpp](2928-distribute-candies-among-children-i.cpp)

---

[View raw solution](2928-distribute-candies-among-children-i.cpp)

```cpp
class Solution {
public:
    int distributeCandies(int n, int limit) {
        auto c = [](int n) {
            return 1LL * n * (n - 1) / 2;
        };
        if (n > 3 * limit) {
            return 0;
        }
        long long ans = c(n + 2);
        if (n > limit) {
            ans -= 3 * c(n - limit + 1);
        }
        if (n - 2 >= 2 * limit) {
            ans += 3 * c(n - 2 * limit);
        }
        return ans;
    }
};
```

