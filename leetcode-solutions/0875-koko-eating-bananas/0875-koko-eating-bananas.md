---
number: 875
slug: koko-eating-bananas
title: Koko Eating Bananas
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:16:36.847Z
---

# 0875. Koko Eating Bananas

**URL:** [https://leetcode.com/problems/koko-eating-bananas/](https://leetcode.com/problems/koko-eating-bananas/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p>

<p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p>

<p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p>

<p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> piles = [3,6,7,11], h = 8
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> piles = [30,11,23,4,20], h = 5
<strong>Output:</strong> 30
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> piles = [30,11,23,4,20], h = 6
<strong>Output:</strong> 23
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code></li>
	<li><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></li>
</ul>


---

## Solutions

- [cpp](0875-koko-eating-bananas.cpp) — 2022-04-02T16:33:26.000Z

---

### cpp — 2022-04-02T16:33:26.000Z

- Runtime: 40 ms  
- Memory: 18.9 MB  

[View raw solution](0875-koko-eating-bananas.cpp)


```cpp
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
```

