---
number: 0491
slug: non-decreasing-subsequences
difficulty: Medium
languages: cpp
latest_solved_at: 2023-01-20T20:46:31.000Z
generated_at: 2025-11-20T18:53:56.859Z
---

# 0491. Non-decreasing Subsequences

**URL:** [https://leetcode.com/problems/non-decreasing-subsequences/](https://leetcode.com/problems/non-decreasing-subsequences/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-01-20T20:46:31.000Z

---

## Problem Description

<p>Given an integer array <code>nums</code>, return <em>all the different possible non-decreasing subsequences of the given array with at least two elements</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,6,7,7]
<strong>Output:</strong> [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,4,3,2,1]
<strong>Output:</strong> [[4,4]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 15</code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>


---

## Solutions

- [cpp](0491-non-decreasing-subsequences.cpp)

---

[View raw solution](0491-non-decreasing-subsequences.cpp)

```cpp
class Solution {
public:
    void func(int idx,vector<int>&nums,vector<int>&a,set<vector<int>>&ans){
        int n=nums.size();
        //If we have our index greater than or equal to sizeof nums then we cant go further 
        //so we will check if there is a subarray with size greater than equal to 2
        if(idx>=n){
            if(a.size()>=2){
                //if we have such subarray we will insert it to the set
                ans.insert(a);
            }
            return ;
        }
        //now for [0,n-1] index we will check either condition for inserting into a vector
            //1. if a vector is empty so we can push the element easily
            //2. if a last element is less than equal to cur element
        if(!a.size()||nums[idx]>=a.back()){
            //we will push back into a vector and then call the func for idx+1;
            a.push_back(nums[idx]);
            func(idx+1,nums,a,ans);
            //we are removing element because a vector is being passed by reference
            a.pop_back();
        }
        //calling the function without that value
        func(idx+1,nums,a,ans); 
    }
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        //we have made a temp vector for storing the values till an index
        vector<int>temp;
        //we have made a set of vector because there can be repeated elements which cause 
        //repetion of subarray so set doesnt allow repetion of values
        set<vector<int>>ans;
        //we are calling our recursive function giving starting index to 0
        func(0,nums,temp,ans);
        //typecasting the set into vector and returning it we can do it manually also
        return vector(ans.begin(),ans.end());
        
    }
};
```

