---
number: 0219
slug: contains-duplicate-ii
difficulty: Easy
languages: cpp
latest_solved_at: 2022-12-15T18:06:37.000Z
generated_at: 2025-11-20T18:54:23.907Z
---

# 0219. Contains Duplicate II

**URL:** [https://leetcode.com/problems/contains-duplicate-ii/](https://leetcode.com/problems/contains-duplicate-ii/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-12-15T18:06:37.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1], k = 3
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,1], k = 1
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1,2,3], k = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>


---

## Solutions

- [cpp](0219-contains-duplicate-ii.cpp)

---

[View raw solution](0219-contains-duplicate-ii.cpp)

```cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int, int> map;
        
//         int end = 0, begin = 0;
        
//         while(end < nums.size()) {
            
//             if(end>k){
//                 map[nums[begin++]]--;
//             }
            
//             if(map[nums[end]]>0){
//                 return true;
//             }
            
//             map[nums[end]]++;
//             end++;
//         }
//         return false;
        
        int i = 0;
        while (i < nums.size()) {
            if (map.find(nums[i]) != map.end() && i - map[nums[i]] <= k) {
                return true;
            }
            map[nums[i]] = i;
            i++;
        }
        return false;

    }
};
```

