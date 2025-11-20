---
number: 0278
slug: first-bad-version
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-18T05:39:44.000Z
generated_at: 2025-11-20T18:58:28.617Z
---

# 0278. First Bad Version

**URL:** [https://leetcode.com/problems/first-bad-version/](https://leetcode.com/problems/first-bad-version/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-18T05:39:44.000Z

---

## Problem Description

<p>You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.</p>

<p>Suppose you have <code>n</code> versions <code>[1, 2, ..., n]</code> and you want to find out the first bad one, which causes all the following ones to be bad.</p>

<p>You are given an API <code>bool isBadVersion(version)</code> which returns whether <code>version</code> is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5, bad = 4
<strong>Output:</strong> 4
<strong>Explanation:</strong>
call isBadVersion(3) -&gt; false
call isBadVersion(5)&nbsp;-&gt; true
call isBadVersion(4)&nbsp;-&gt; true
Then 4 is the first bad version.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1, bad = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= bad &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

- [cpp](0278-first-bad-version.cpp)

---

[View raw solution](0278-first-bad-version.cpp)

```cpp
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        unsigned int low = 1, high = n;
        
        while(low <= high) {
            unsigned int mid = low + (high - low)/2;
            
            // according to question everything is true after the key element so (arr[mid] == key) == (arr[mid] > key)
            if(isBadVersion(mid)) // this condition includes both arr[mid] == key and arr[mid] > key
                high = mid - 1;
            else
                low = mid + 1;
            
        }
        return low;
        
    }
};
```

