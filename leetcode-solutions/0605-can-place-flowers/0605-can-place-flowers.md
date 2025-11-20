---
number: 605
slug: can-place-flowers
title: Can Place Flowers
difficulty: Easy
languages: cpp
generated_at: 2025-11-20T18:17:52.781Z
---

# 0605. Can Place Flowers

**URL:** [https://leetcode.com/problems/can-place-flowers/](https://leetcode.com/problems/can-place-flowers/)  
**Difficulty:** Easy  
**Languages:** cpp

---

## Problem Description

<p>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in <strong>adjacent</strong> plots.</p>

<p>Given an integer array <code>flowerbed</code> containing <code>0</code>&#39;s and <code>1</code>&#39;s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <code>true</code>&nbsp;<em>if</em> <code>n</code> <em>new flowers can be planted in the</em> <code>flowerbed</code> <em>without violating the no-adjacent-flowers rule and</em> <code>false</code> <em>otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 1
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 2
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= flowerbed.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.</li>
	<li>There are no two adjacent flowers in <code>flowerbed</code>.</li>
	<li><code>0 &lt;= n &lt;= flowerbed.length</code></li>
</ul>


---

## Solutions

- [cpp](0605-can-place-flowers.cpp) — 2022-01-18T16:48:12.000Z

---

### cpp — 2022-01-18T16:48:12.000Z

- Runtime: 32 ms  
- Memory: 20 MB  

[View raw solution](0605-can-place-flowers.cpp)


```cpp
// class Solution {
// public:
//     bool canPlaceFlowers(vector<int>& flowerbed, int n) {
//         if (n == 0) return true;
//         for (int i = 0; i < flowerbed.size(); i ++) {
//             if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.size() - 1 || flowerbed[i + 1] == 0)) { // can place?
//                 -- n;
//                 if (n == 0) return true;
//                 flowerbed[i] = 1; // place!
//             }
//         }
//         return false;
//     }
// };

class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int zeros = 1, ans = 0; // Easier handling of prefixes, just initialize zeros to 1
        for (int i = 0; i < flowerbed.size(); i ++) {
            if (flowerbed[i] == 0) {
                ++ zeros;
            } else {
                ans += (zeros - 1) / 2;
                zeros = 0;
            }
        }
        return ans + zeros / 2 >= n; // Note that suffix zeros need not -1
    }
};
```

