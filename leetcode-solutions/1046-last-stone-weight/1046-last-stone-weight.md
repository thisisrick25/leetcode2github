---
number: 1046
slug: last-stone-weight
difficulty: Easy
languages: cpp
latest_solved_at: 2022-04-08T14:40:16.000Z
generated_at: 2025-11-20T18:54:53.455Z
---

# 1046. Last Stone Weight

**URL:** [https://leetcode.com/problems/last-stone-weight/](https://leetcode.com/problems/last-stone-weight/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-04-08T14:40:16.000Z

---

## Problem Description

<p>You are given an array of integers <code>stones</code> where <code>stones[i]</code> is the weight of the <code>i<sup>th</sup></code> stone.</p>

<p>We are playing a game with the stones. On each turn, we choose the <strong>heaviest two stones</strong> and smash them together. Suppose the heaviest two stones have weights <code>x</code> and <code>y</code> with <code>x &lt;= y</code>. The result of this smash is:</p>

<ul>
	<li>If <code>x == y</code>, both stones are destroyed, and</li>
	<li>If <code>x != y</code>, the stone of weight <code>x</code> is destroyed, and the stone of weight <code>y</code> has new weight <code>y - x</code>.</li>
</ul>

<p>At the end of the game, there is <strong>at most one</strong> stone left.</p>

<p>Return <em>the weight of the last remaining stone</em>. If there are no stones left, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> stones = [2,7,4,1,8,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that&#39;s the value of the last stone.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> stones = [1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= stones.length &lt;= 30</code></li>
	<li><code>1 &lt;= stones[i] &lt;= 1000</code></li>
</ul>


---

## Solutions

- [cpp](1046-last-stone-weight.cpp)

---

[View raw solution](1046-last-stone-weight.cpp)

```cpp
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
```

