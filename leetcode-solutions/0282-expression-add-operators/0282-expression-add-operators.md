---
number: 0282
slug: expression-add-operators
difficulty: Hard
languages: cpp
latest_solved_at: 2021-09-18T17:29:04.000Z
generated_at: 2025-11-20T19:26:24.467Z
---

# 0282. Expression Add Operators

**URL:** [https://leetcode.com/problems/expression-add-operators/](https://leetcode.com/problems/expression-add-operators/)  
**Difficulty:** Hard  
**Languages:** cpp

**Latest Solved At:** 2021-09-18T17:29:04.000Z

---

## Problem Description

<p>Given a string <code>num</code> that contains only digits and an integer <code>target</code>, return <em><strong>all possibilities</strong> to insert the binary operators </em><code>&#39;+&#39;</code><em>, </em><code>&#39;-&#39;</code><em>, and/or </em><code>&#39;*&#39;</code><em> between the digits of </em><code>num</code><em> so that the resultant expression evaluates to the </em><code>target</code><em> value</em>.</p>

<p>Note that operands in the returned expressions <strong>should not</strong> contain leading zeros.</p>

<p><strong>Note</strong> that a number can contain multiple digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;123&quot;, target = 6
<strong>Output:</strong> [&quot;1*2*3&quot;,&quot;1+2+3&quot;]
<strong>Explanation:</strong> Both &quot;1*2*3&quot; and &quot;1+2+3&quot; evaluate to 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;232&quot;, target = 8
<strong>Output:</strong> [&quot;2*3+2&quot;,&quot;2+3*2&quot;]
<strong>Explanation:</strong> Both &quot;2*3+2&quot; and &quot;2+3*2&quot; evaluate to 8.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;3456237490&quot;, target = 9191
<strong>Output:</strong> []
<strong>Explanation:</strong> There are no expressions that can be created from &quot;3456237490&quot; to evaluate to 9191.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num.length &lt;= 10</code></li>
	<li><code>num</code> consists of only digits.</li>
	<li><code>-2<sup>31</sup> &lt;= target &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


---

## Solutions

[View raw cpp solution](0282-expression-add-operators.cpp)

```cpp
class Solution {
public:
    vector<string> expressions;
    vector<string> addOperators(string num, int target) {
        dfs(num , target , 0 , "" , 0 , 0);
        return expressions;
    }
    void dfs(string &num , int target , int index , string path , long int res , long int prev)
    {
        if(index == num.size() and res == target)
        {
            expressions.push_back(path);
            return;
        }
        
        long int number = 0;
        string sub_string = "";
        
        for(int i = index ; i < num.size() ; ++i)
        {
            sub_string += num[i];
            number = (number * 10) + num[i] - '0';
            
            if(sub_string.size() > 1 and sub_string[0] == '0') // skipping numbers with leading 0's
                break;
            
            if(index == 0) // first number of expression is picked without operator
            {
                dfs(num , target , i + 1 , sub_string , number, number);
            }
            else
            {
                // (1) + operation inserted
                dfs(num , target , i + 1 , path  + "+" + sub_string , res  + number , number);
                    
                // (2) - operation inserted
                dfs(num , target , i + 1 , path + "-" + sub_string , res  - number , -number);
                
                // (3) * operation inserted
                dfs(num , target , i + 1 , path + "*" + sub_string , (res - prev)  + (prev * number) , prev * number);
            }
        }
            
    }
    
};
```

