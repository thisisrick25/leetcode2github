---
number: 0739
slug: daily-temperatures
difficulty: Medium
languages: cpp
latest_solved_at: 2023-02-05T20:31:26.000Z
generated_at: 2025-11-20T19:22:13.315Z
---

# 0739. Daily Temperatures

**URL:** [https://leetcode.com/problems/daily-temperatures/](https://leetcode.com/problems/daily-temperatures/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-02-05T20:31:26.000Z

---

## Problem Description

<p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>i<sup>th</sup></code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> temperatures = [73,74,75,71,69,72,76,73]
<strong>Output:</strong> [1,1,4,2,1,1,0,0]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> temperatures = [30,40,50,60]
<strong>Output:</strong> [1,1,1,0]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> temperatures = [30,60,90]
<strong>Output:</strong> [1,1,0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;temperatures.length &lt;= 10<sup>5</sup></code></li>
	<li><code>30 &lt;=&nbsp;temperatures[i] &lt;= 100</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0739-daily-temperatures.cpp)

```cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        stack<int> s;
        vector<int> ans(size(T));
        for(int cur = 0; cur < size(T); cur++) {
            while(size(s) and T[cur] > T[s.top()]) {    // pop till current temp < stack's top's temp. This maintains monotonic stack
                ans[s.top()] = cur - s.top();           // cur day will be next warmer day for each element that's popped
                s.pop();
            }
            s.push(cur);                                // push onto stack to find next warmer day for cur later on
        }
        return ans;
    }
};

```

