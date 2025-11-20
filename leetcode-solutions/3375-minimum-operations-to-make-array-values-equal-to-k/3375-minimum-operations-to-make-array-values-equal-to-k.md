---
number: 3375
slug: minimum-operations-to-make-array-values-equal-to-k
difficulty: Easy
languages: cpp
latest_solved_at: 2024-12-07T15:20:52.000Z
generated_at: 2025-11-20T19:20:56.303Z
---

# 3375. Minimum Operations to Make Array Values Equal to K

**URL:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2024-12-07T15:20:52.000Z

---

## Problem Description

<p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p>

<p>An integer <code>h</code> is called <strong>valid</strong> if all values in the array that are <strong>strictly greater</strong> than <code>h</code> are <em>identical</em>.</p>

<p>For example, if <code>nums = [10, 8, 10, 8]</code>, a <strong>valid</strong> integer is <code>h = 9</code> because all <code>nums[i] &gt; 9</code>&nbsp;are equal to 10, but 5 is not a <strong>valid</strong> integer.</p>

<p>You are allowed to perform the following operation on <code>nums</code>:</p>

<ul>
	<li>Select an integer <code>h</code> that is <em>valid</em> for the <strong>current</strong> values in <code>nums</code>.</li>
	<li>For each index <code>i</code> where <code>nums[i] &gt; h</code>, set <code>nums[i]</code> to <code>h</code>.</li>
</ul>

<p>Return the <strong>minimum</strong> number of operations required to make every element in <code>nums</code> <strong>equal</strong> to <code>k</code>. If it is impossible to make all elements equal to <code>k</code>, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [5,2,5,4,5], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The operations can be performed in order using valid integers 4 and then 2.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,1,2], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>It is impossible to make all the values equal to 2.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [9,7,5,3], k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>The operations can be performed using valid integers in the order 7, 5, 3, and 1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100 </code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= 100</code></li>
</ul>


---

## Solutions

[View raw cpp solution](3375-minimum-operations-to-make-array-values-equal-to-k.cpp)

```cpp
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {

        int minValue = *min_element(nums.begin(), nums.end());
        
        if (minValue < k) {
            return -1;
        }

        int opCount = 0;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > k) {
                ++opCount;

                while (i + 1 < nums.size() && nums[i] == nums[i + 1]) {
                    i++;
                }
            }
        }

        return opCount;
    }
};
```

