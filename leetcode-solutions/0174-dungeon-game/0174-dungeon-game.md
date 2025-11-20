---
number: 0174
slug: dungeon-game
difficulty: Hard
languages: cpp
latest_solved_at: 2021-10-02T13:28:36.000Z
generated_at: 2025-11-20T19:25:39.347Z
---

# 0174. Dungeon Game

**URL:** [https://leetcode.com/problems/dungeon-game/](https://leetcode.com/problems/dungeon-game/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2021-10-02T13:28:36.000Z

---

## Problem Description

<p>The demons had captured the princess and imprisoned her in <strong>the bottom-right corner</strong> of a <code>dungeon</code>. The <code>dungeon</code> consists of <code>m x n</code> rooms laid out in a 2D grid. Our valiant knight was initially positioned in <strong>the top-left room</strong> and must fight his way through <code>dungeon</code> to rescue the princess.</p>

<p>The knight has an initial health point represented by a positive integer. If at any point his health point drops to <code>0</code> or below, he dies immediately.</p>

<p>Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight&#39;s health (represented by positive integers).</p>

<p>To reach the princess as quickly as possible, the knight decides to move only <strong>rightward</strong> or <strong>downward</strong> in each step.</p>

<p>Return <em>the knight&#39;s minimum initial health so that he can rescue the princess</em>.</p>

<p><strong>Note</strong> that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-&gt; RIGHT -&gt; DOWN -&gt; DOWN.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> dungeon = [[0]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == dungeon.length</code></li>
	<li><code>n == dungeon[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>-1000 &lt;= dungeon[i][j] &lt;= 1000</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0174-dungeon-game.cpp)

```cpp
class Solution {
public:
    int calculateMinimumHP(vector<vector<int> > &dungeon) {
        int M = dungeon.size();
        int N = dungeon[0].size();
        // hp[i][j] represents the min hp needed at position (i, j)
        // Add dummy row and column at bottom and right side
        vector<vector<int> > hp(M + 1, vector<int>(N + 1, INT_MAX));
        hp[M][N - 1] = 1;
        hp[M - 1][N] = 1;
        for (int i = M - 1; i >= 0; i--) {
            for (int j = N - 1; j >= 0; j--) {
                int need = min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j];
                hp[i][j] = need <= 0 ? 1 : need;
            }
        }
        return hp[0][0];
    }
};
```

