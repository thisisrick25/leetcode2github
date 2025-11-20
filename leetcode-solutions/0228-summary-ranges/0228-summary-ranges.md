---
number: 0228
slug: summary-ranges
difficulty: Easy
languages: cpp
latest_solved_at: 2022-02-28T21:15:12.000Z
generated_at: 2025-11-20T18:55:29.494Z
---

# 0228. Summary Ranges

**URL:** [https://leetcode.com/problems/summary-ranges/](https://leetcode.com/problems/summary-ranges/)  
**Difficulty:** Easy  
**Languages:** cpp

**Latest Solved At:** 2022-02-28T21:15:12.000Z

---

## Problem Description

<p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p>

<p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p>

<p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p>

<p>Each range <code>[a,b]</code> in the list should be output as:</p>

<ul>
	<li><code>&quot;a-&gt;b&quot;</code> if <code>a != b</code></li>
	<li><code>&quot;a&quot;</code> if <code>a == b</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,2,4,5,7]
<strong>Output:</strong> [&quot;0-&gt;2&quot;,&quot;4-&gt;5&quot;,&quot;7&quot;]
<strong>Explanation:</strong> The ranges are:
[0,2] --&gt; &quot;0-&gt;2&quot;
[4,5] --&gt; &quot;4-&gt;5&quot;
[7,7] --&gt; &quot;7&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,2,3,4,6,8,9]
<strong>Output:</strong> [&quot;0&quot;,&quot;2-&gt;4&quot;,&quot;6&quot;,&quot;8-&gt;9&quot;]
<strong>Explanation:</strong> The ranges are:
[0,0] --&gt; &quot;0&quot;
[2,4] --&gt; &quot;2-&gt;4&quot;
[6,6] --&gt; &quot;6&quot;
[8,9] --&gt; &quot;8-&gt;9&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 20</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>


---

## Solutions

- [cpp](0228-summary-ranges.cpp)

---

[View raw solution](0228-summary-ranges.cpp)

```cpp
class Solution {
    public:
        vector<string> summaryRanges(vector<int>& nums) 
        {
            int first=0,last=0,x=0, size=nums.size(); vector<string> ans;
            while(x<size)
            {   
                last=x;
                if(x==size-1 || nums[x]+1 != nums[x+1])     //range termination conditions
                {
                    string s="";
                    first==last? s=to_string(nums[x]): s=to_string(nums[first])+"->"+to_string(nums[last]);
                    ans.push_back(s);
                    first=x+1;  //start of a new range
                }
                x++;
            }
            return ans;
        }
};
```

