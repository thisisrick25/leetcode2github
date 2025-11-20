---
number: 0486
slug: predict-the-winner
difficulty: Medium
languages: cpp
latest_solved_at: 2023-07-28T16:48:45.000Z
generated_at: 2025-11-20T18:53:37.135Z
---

# 0486. Predict the Winner

**URL:** [https://leetcode.com/problems/predict-the-winner/](https://leetcode.com/problems/predict-the-winner/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-07-28T16:48:45.000Z

---

## Problem Description

<p>You are given an integer array <code>nums</code>. Two players are playing a game with this array: player 1 and player 2.</p>

<p>Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of <code>0</code>. At each turn, the player takes one of the numbers from either end of the array (i.e., <code>nums[0]</code> or <code>nums[nums.length - 1]</code>) which reduces the size of the array by <code>1</code>. The player adds the chosen number to their score. The game ends when there are no more elements in the array.</p>

<p>Return <code>true</code> if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return <code>true</code>. You may assume that both players are playing optimally.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,2]
<strong>Output:</strong> false
<strong>Explanation:</strong> Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return false.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,233,7]
<strong>Output:</strong> true
<strong>Explanation:</strong> Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 20</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>
</ul>


---

## Solutions

- [cpp](0486-predict-the-winner.cpp)

---

[View raw solution](0486-predict-the-winner.cpp)

```cpp
class Solution {
    int dp[21][21]; //dp array
	//dp[i][j]= maxm a player can score if they have access to elements form index i to index j only
    bool checkWin(int ans,int total){
        return ans>=total-ans;
    }
    int maxScore(vector<int>&A,int total,int i,int j){
        if(i>j)
            return 0;
        if(dp[i][j]!=-1)
            return dp[i][j];
        dp[i][j]=total-min(maxScore(A,total-A[i],i+1,j),maxScore(A,total-A[j],i,j-1));
        return dp[i][j];
    }
public:
    bool PredictTheWinner(vector<int>& nums) {
        int total=0;
        for(int i=0;i<21;i++)
            for(int j=0;j<21;j++)
                dp[i][j]=-1;  //initialising to -1
        for(auto x:nums)
            total+=x;
        return checkWin(maxScore(nums,total,0,nums.size()-1),total);
    }
};
```

