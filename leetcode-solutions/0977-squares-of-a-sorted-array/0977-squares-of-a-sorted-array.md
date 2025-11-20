---
number: 0977
slug: squares-of-a-sorted-array
difficulty: Easy
languages: cpp
latest_solved_at: 2021-09-19T18:28:15.000Z
generated_at: 2025-11-20T18:58:23.427Z
---

# 0977. Squares of a Sorted Array

**URL:** [https://leetcode.com/problems/squares-of-a-sorted-array/](https://leetcode.com/problems/squares-of-a-sorted-array/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2021-09-19T18:28:15.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>an array of <strong>the squares of each number</strong> sorted in non-decreasing order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-4,-1,0,3,10]
<strong>Output:</strong> [0,1,9,16,100]
<strong>Explanation:</strong> After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-7,-3,2,3,11]
<strong>Output:</strong> [4,9,9,49,121]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><span>1 &lt;= nums.length &lt;= </span>10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Squaring each element and sorting the new array is very trivial, could you find an <code>O(n)</code> solution using a different approach?

---

## Solutions

- [cpp](0977-squares-of-a-sorted-array.cpp)

---

[View raw solution](0977-squares-of-a-sorted-array.cpp)

```cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        vector<int> arr;
        
        for(int i = 0; i < nums.size(); i++)
        {
            nums[i] = nums[i] * nums[i];
            arr.push_back(nums[i]);
        }
        
        sort(arr.begin(), arr.end());
        
        return arr;
        
//         int start=0;
//         int end=nums.size()-1;
        
//         vector <int> res(nums.size());
//         int pos = nums.size()-1;
        
//         while(start <= end)
//         {
//             if(abs(nums[start]) < abs(nums[end])) {
//                 res[pos--] = nums[end] * nums[end];
//                 end--;
//             } else{
//                 res[pos--] = nums[start] * nums[start];
//                 start++;
//             }
//         }
        
//         return res;
    }
};
```

