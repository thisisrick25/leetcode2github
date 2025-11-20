---
number: 2619
slug: array-prototype-last
difficulty: Easy
languages: javascript
latest_solved_at: 2023-04-16T14:48:18.000Z
generated_at: 2025-11-20T19:22:11.728Z
---

# 2619. Array Prototype Last

**URL:** [https://leetcode.com/problems/array-prototype-last/](https://leetcode.com/problems/array-prototype-last/)  
**Difficulty:** Easy  
**Languages:** javascript

**Latest Solved At:** 2023-04-16T14:48:18.000Z

---

## Problem Description

<p>Write code that enhances all arrays such that you can call the&nbsp;<code>array.last()</code>&nbsp;method on any array and it will return the last element. If there are no elements in the array, it should return&nbsp;<code>-1</code>.</p>

<p>You may assume the array is the output of&nbsp;<code>JSON.parse</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [null, {}, 3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Calling nums.last() should return the last element: 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = []
<strong>Output:</strong> -1
<strong>Explanation:</strong> Because there are no elements, return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>arr</code> is a valid JSON array</li>
	<li><code>0 &lt;= arr.length &lt;= 1000</code></li>
</ul>


---

## Solutions

[View raw javascript solution](2619-array-prototype-last.js)

```javascript
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```

