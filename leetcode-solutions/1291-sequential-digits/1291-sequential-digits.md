---
number: 1291
slug: sequential-digits
difficulty: Medium
languages: cpp
latest_solved_at: 2022-01-23T21:16:08.000Z
generated_at: 2025-11-20T18:56:22.838Z
---

# 1291. Sequential Digits

**URL:** [https://leetcode.com/problems/sequential-digits/](https://leetcode.com/problems/sequential-digits/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-01-23T21:16:08.000Z

---

## Problem Description

<p>An&nbsp;integer has <em>sequential digits</em> if and only if each digit in the number is one more than the previous digit.</p>

<p>Return a <strong>sorted</strong> list of all the integers&nbsp;in the range <code>[low, high]</code>&nbsp;inclusive that have sequential digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> low = 100, high = 300
<strong>Output:</strong> [123,234]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> low = 1000, high = 13000
<strong>Output:</strong> [1234,2345,3456,4567,5678,6789,12345]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>10 &lt;= low &lt;= high &lt;= 10^9</code></li>
</ul>


---

## Solutions

- [cpp](1291-sequential-digits.cpp)

---

[View raw solution](1291-sequential-digits.cpp)

```cpp
class Solution {
public:
    vector<int> sequentialDigits(int l, int h) {
        queue<int> q;
        for(int i = 1; i <= 9; i++) {
            q.push(i);
        }
        vector<int> ret;
        while(!q.empty()) {
            int f = q.front();
            q.pop();
            if(f <= h && f >= l) {
                ret.push_back(f);
            }
            if(f > h)
                break;
            int num = f % 10;
            if(num < 9) {
                q.push(f * 10 + (num + 1));
            }
        }
        return ret;
    }
};
```

