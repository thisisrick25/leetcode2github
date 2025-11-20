---
number: 1010
slug: pairs-of-songs-with-total-durations-divisible-by-60
difficulty: Medium
languages: cpp
latest_solved_at: 2022-01-31T17:26:03.000Z
generated_at: 2025-11-20T18:56:10.805Z
---

# 1010. Pairs of Songs With Total Durations Divisible by 60

**URL:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-01-31T17:26:03.000Z

---

## Problem Description

<p>You are given a list of songs where the <code>i<sup>th</sup></code> song has a duration of <code>time[i]</code> seconds.</p>

<p>Return <em>the number of pairs of songs for which their total duration in seconds is divisible by</em> <code>60</code>. Formally, we want the number of indices <code>i</code>, <code>j</code> such that <code>i &lt; j</code> with <code>(time[i] + time[j]) % 60 == 0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> time = [30,20,150,100,40]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> time = [60,60,60]
<strong>Output:</strong> 3
<strong>Explanation:</strong> All three pairs have a total duration of 120, which is divisible by 60.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= time.length &lt;= 6 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= time[i] &lt;= 500</code></li>
</ul>


---

## Solutions

- [cpp](1010-pairs-of-songs-with-total-durations-divisible-by-60.cpp)

---

[View raw solution](1010-pairs-of-songs-with-total-durations-divisible-by-60.cpp)

```cpp
class Solution {
public:
    int numPairsDivisibleBy60(vector<int>& time) {
        vector<int> c(60);
        int res = 0;
        for (int t : time) {
            res += c[(600 - t) % 60];
            c[t % 60] += 1;
        }
        return res;
    }
};
```

