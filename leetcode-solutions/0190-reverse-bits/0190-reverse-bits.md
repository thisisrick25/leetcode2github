---
number: 0190
slug: reverse-bits
difficulty: Easy
languages: cpp
latest_solved_at: 2021-10-01T18:32:26.000Z
generated_at: 2025-11-20T18:57:39.817Z
---

# 0190. Reverse Bits

**URL:** [https://leetcode.com/problems/reverse-bits/](https://leetcode.com/problems/reverse-bits/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-10-01T18:32:26.000Z

---

## Problem Description

<p>Reverse bits of a given 32 bits signed integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 43261596</span></p>

<p><strong>Output:</strong> <span class="example-io">964176192</span></p>

<p><strong>Explanation:</strong></p>

<table>
	<tbody>
		<tr>
			<th>Integer</th>
			<th>Binary</th>
		</tr>
		<tr>
			<td>43261596</td>
			<td>00000010100101000001111010011100</td>
		</tr>
		<tr>
			<td>964176192</td>
			<td>00111001011110000010100101000000</td>
		</tr>
	</tbody>
</table>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2147483644</span></p>

<p><strong>Output:</strong> <span class="example-io">1073741822</span></p>

<p><strong>Explanation:</strong></p>

<table>
	<tbody>
		<tr>
			<th>Integer</th>
			<th>Binary</th>
		</tr>
		<tr>
			<td>2147483644</td>
			<td>01111111111111111111111111111100</td>
		</tr>
		<tr>
			<td>1073741822</td>
			<td>00111111111111111111111111111110</td>
		</tr>
	</tbody>
</table>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 2<sup>31</sup> - 2</code></li>
	<li><code>n</code> is even.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p>


---

## Solutions

- [cpp](0190-reverse-bits.cpp)

---

[View raw solution](0190-reverse-bits.cpp)

```cpp
class Solution {
public:
    uint32_t  reverseBits(uint32_t n) {
        uint32_t result= 0;
        for(int i=0; i<32; i++)
            result = (result<<1) + (n>>i &1);
        
        return result;
    }
};

// class Solution {
// public:
//     uint32_t reverseBits(uint32_t n) {
//         n = (n >> 16) | (n << 16);
//         n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8);
//         n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4);
//         n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2);
//         n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
//         return n;
//     }
// };
```

