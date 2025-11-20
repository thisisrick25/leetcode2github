---
number: 0904
slug: fruit-into-baskets
difficulty: Medium
languages: cpp
latest_solved_at: 2022-06-08T12:50:07.000Z
generated_at: 2025-11-20T19:23:06.718Z
---

# 0904. Fruit Into Baskets

**URL:** [https://leetcode.com/problems/fruit-into-baskets/](https://leetcode.com/problems/fruit-into-baskets/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2022-06-08T12:50:07.000Z

---

## Problem Description

<p>You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array <code>fruits</code> where <code>fruits[i]</code> is the <strong>type</strong> of fruit the <code>i<sup>th</sup></code> tree produces.</p>

<p>You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:</p>

<ul>
	<li>You only have <strong>two</strong> baskets, and each basket can only hold a <strong>single type</strong> of fruit. There is no limit on the amount of fruit each basket can hold.</li>
	<li>Starting from any tree of your choice, you must pick <strong>exactly one fruit</strong> from <strong>every</strong> tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.</li>
	<li>Once you reach a tree with fruit that cannot fit in your baskets, you must stop.</li>
</ul>

<p>Given the integer array <code>fruits</code>, return <em>the <strong>maximum</strong> number of fruits you can pick</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> fruits = [<u>1,2,1</u>]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can pick from all 3 trees.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> fruits = [0,<u>1,2,2</u>]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> fruits = [1,<u>2,3,2,2</u>]
<strong>Output:</strong> 4
<strong>Explanation:</strong> We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= fruits.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= fruits[i] &lt; fruits.length</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0904-fruit-into-baskets.cpp)

```cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int begin = 0, end = 0,  ans = INT_MIN;
        unordered_map<int, int> map;
        int counter = 0;
        
        while(end < fruits.size()){
            if(map[fruits[end]] == 0)
                counter++;
            map[fruits[end]]++;
            end++;
            
            while (counter > 2){
                map[fruits[begin]]--;
                if (map[fruits[begin]] == 0)
                    counter--;
                begin++;
            }
            ans = max(ans, end - begin);
        }
        return ans;
    }
};
```

