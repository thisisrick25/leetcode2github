---
number: 1288
slug: remove-covered-intervals
title: Remove Covered Intervals
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:17:11.666Z
---

# 1288. Remove Covered Intervals

**URL:** [https://leetcode.com/problems/remove-covered-intervals/](https://leetcode.com/problems/remove-covered-intervals/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an array <code>intervals</code> where <code>intervals[i] = [l<sub>i</sub>, r<sub>i</sub>]</code> represent the interval <code>[l<sub>i</sub>, r<sub>i</sub>)</code>, remove all intervals that are covered by another interval in the list.</p>

<p>The interval <code>[a, b)</code> is covered by the interval <code>[c, d)</code> if and only if <code>c &lt;= a</code> and <code>b &lt;= d</code>.</p>

<p>Return <em>the number of remaining intervals</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,4],[3,6],[2,8]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Interval [3,6] is covered by [2,8], therefore it is removed.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,4],[2,3]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= intervals.length &lt;= 1000</code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= l<sub>i</sub> &lt; r<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
	<li>All the given intervals are <strong>unique</strong>.</li>
</ul>


---

## Solutions

- [cpp](1288-remove-covered-intervals.cpp) — 2022-02-21T19:46:03.000Z

---

### cpp — 2022-02-21T19:46:03.000Z

- Runtime: 19 ms  
- Memory: 11.4 MB  

[View raw solution](1288-remove-covered-intervals.cpp)


```cpp
class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& A) {
        int res = 0, left = -1, right = -1;
        sort(A.begin(), A.end());
        for (auto& v: A) {
            if (v[0] > left && v[1] > right) {
                left = v[0];
                ++res;
            }
            right = max(right, v[1]);
        }
        return res;
    }
    
};
```

