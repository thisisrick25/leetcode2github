---
number: 0941
slug: valid-mountain-array
difficulty: Easy
languages: cpp
latest_solved_at: 2022-01-25T20:20:11.000Z
generated_at: 2025-11-20T18:56:21.293Z
---

# 0941. Valid Mountain Array

**URL:** [https://leetcode.com/problems/valid-mountain-array/](https://leetcode.com/problems/valid-mountain-array/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-01-25T20:20:11.000Z

---

## Problem Description

<p>Given an array of integers <code>arr</code>, return <em><code>true</code> if and only if it is a valid mountain array</em>.</p>

<p>Recall that arr is a mountain array if and only if:</p>

<ul>
	<li><code>arr.length &gt;= 3</code></li>
	<li>There exists some <code>i</code> with <code>0 &lt; i &lt; arr.length - 1</code> such that:
	<ul>
		<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i] </code></li>
		<li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li>
	</ul>
	</li>
</ul>
<img src="https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png" width="500" />
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [2,1]
<strong>Output:</strong> false
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [3,5,5]
<strong>Output:</strong> false
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [0,3,2,1]
<strong>Output:</strong> true
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>


---

## Solutions

- [cpp](0941-valid-mountain-array.cpp)

---

[View raw solution](0941-valid-mountain-array.cpp)

```cpp
class Solution {
public:
    bool validMountainArray(vector<int>& A) {
        int n = A.size(), i = 0, j = n - 1;
        while (i + 1 < n && A[i] < A[i + 1]) i++;
        while (j > 0 && A[j - 1] > A[j]) j--;
        return i > 0 && i == j && j < n - 1;
    }
};
```

