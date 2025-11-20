---
number: 0421
slug: maximum-xor-of-two-numbers-in-an-array
difficulty: Medium
languages: cpp
latest_solved_at: 2022-01-27T15:40:25.000Z
generated_at: 2025-11-20T19:24:31.221Z
---

# 0421. Maximum XOR of Two Numbers in an Array

**URL:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-01-27T15:40:25.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code>, return <em>the maximum result of </em><code>nums[i] XOR nums[j]</code>, where <code>0 &lt;= i &lt;= j &lt; n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,10,5,25,2,8]
<strong>Output:</strong> 28
<strong>Explanation:</strong> The maximum result is 5 XOR 25 = 28.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [14,70,53,83,49,91,36,80,92,51,66,70]
<strong>Output:</strong> 127
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0421-maximum-xor-of-two-numbers-in-an-array.cpp)

```cpp
struct TrieNode {
    TrieNode *child[2] = {};
    void increase(int number) {
        TrieNode *cur = this;
        for (int i = 31; i >= 0; --i) {
            int bit = (number >> i) & 1;
            if (cur->child[bit] == nullptr) cur->child[bit] = new TrieNode();
            cur = cur->child[bit];
        }
    }
    int findMax(int number) {
        TrieNode *cur = this;
        int ans = 0;
        for (int i = 31; i >= 0; --i) {
            int bit = (number >> i) & 1;
            if (cur->child[1 - bit] != nullptr) {
                cur = cur->child[1 - bit];
                ans |= (1 << i);
            } else cur = cur->child[bit];
        }
        return ans;
    }
};

class Solution {
public:
    int findMaximumXOR(vector<int> &nums) {
        TrieNode *trieNode = new TrieNode();
        for (int x : nums) trieNode->increase(x);
        
        int ans = 0;
        for (int x : nums) ans = max(ans, trieNode->findMax(x));
        return ans;
    }
};
```

