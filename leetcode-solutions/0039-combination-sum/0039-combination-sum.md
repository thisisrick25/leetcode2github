---
number: 39
slug: combination-sum
title: Combination Sum
difficulty: Medium
languages: cpp
generated_at: 2025-11-20T18:17:15.640Z
---

# 0039. Combination Sum

**URL:** [https://leetcode.com/problems/combination-sum/](https://leetcode.com/problems/combination-sum/)  
**Difficulty:** Medium  
**Languages:** cpp

---

## Problem Description

<p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.</p>

<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the <span data-keyword="frequency-array">frequency</span> of at least one of the chosen numbers is different.</p>

<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,6,7], target = 7
<strong>Output:</strong> [[2,2,3],[7]]
<strong>Explanation:</strong>
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,5], target = 8
<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2], target = 1
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= candidates.length &lt;= 30</code></li>
	<li><code>2 &lt;= candidates[i] &lt;= 40</code></li>
	<li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li>
	<li><code>1 &lt;= target &lt;= 40</code></li>
</ul>


---

## Solutions

- [cpp](0039-combination-sum.cpp) — 2022-02-17T20:10:11.000Z

---

### cpp — 2022-02-17T20:10:11.000Z

- Runtime: 58 ms  
- Memory: 18.8 MB  

[View raw solution](0039-combination-sum.cpp)


```cpp
class Solution {
    void combination(vector<int>& candidates, int target, vector<int> currComb, int currSum, int currIndex, vector<vector<int>>& ans){
        if(currSum>target) return; //backtrack
        if(currSum==target){
            ans.push_back(currComb); //store the solution and backtrack
            return;
        }
        
        for(int i=currIndex; i<candidates.size(); i++){ //try all possible options for the next level
            currComb.push_back(candidates[i]); //put 1 option into the combination
            currSum+=candidates[i];
            combination(candidates, target, currComb, currSum, i, ans); //try with this combination, whether it gives a solution or not.
            currComb.pop_back(); //when this option backtrack to here, remove this and go on to the next option.
            currSum-=candidates[i];
        }
        
    }
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> ans;
        vector<int> currComb;
        combination(candidates, target, currComb, 0, 0, ans);
        return ans;
    }
};
```

