---
number: 0093
slug: restore-ip-addresses
difficulty: Medium
languages: cpp
latest_solved_at: 2023-01-21T21:39:40.000Z
generated_at: 2025-11-20T19:22:23.076Z
---

# 0093. Restore IP Addresses

**URL:** [https://leetcode.com/problems/restore-ip-addresses/](https://leetcode.com/problems/restore-ip-addresses/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-01-21T21:39:40.000Z

---

## Problem Description

<p>A <strong>valid IP address</strong> consists of exactly four integers separated by single dots. Each integer is between <code>0</code> and <code>255</code> (<strong>inclusive</strong>) and cannot have leading zeros.</p>

<ul>
	<li>For example, <code>&quot;0.1.2.201&quot;</code> and <code>&quot;192.168.1.1&quot;</code> are <strong>valid</strong> IP addresses, but <code>&quot;0.011.255.245&quot;</code>, <code>&quot;192.168.1.312&quot;</code> and <code>&quot;192.168@1.1&quot;</code> are <strong>invalid</strong> IP addresses.</li>
</ul>

<p>Given a string <code>s</code> containing only digits, return <em>all possible valid IP addresses that can be formed by inserting dots into </em><code>s</code>. You are <strong>not</strong> allowed to reorder or remove any digits in <code>s</code>. You may return the valid IP addresses in <strong>any</strong> order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;25525511135&quot;
<strong>Output:</strong> [&quot;255.255.11.135&quot;,&quot;255.255.111.35&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;0000&quot;
<strong>Output:</strong> [&quot;0.0.0.0&quot;]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;101023&quot;
<strong>Output:</strong> [&quot;1.0.10.23&quot;,&quot;1.0.102.3&quot;,&quot;10.1.0.23&quot;,&quot;10.10.2.3&quot;,&quot;101.0.2.3&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 20</code></li>
	<li><code>s</code> consists of digits only.</li>
</ul>


---

## Solutions

[View raw cpp solution](0093-restore-ip-addresses.cpp)

```cpp
class Solution {
public:
    vector<string> ans;
    void solve(string s,vector<string> &v,int index){
        int m=v.size(),n=s.size();
        //if number of ip addresses in the vector is 4 and whole string is traversed
        if(index==n and m==4){
            ans.push_back(v[0]+'.'+v[1]+'.'+v[2]+'.'+v[3]);
            return;
        }
        
        // if either out of index or number of ip addresses is greater than 4 just return
        if(index>n or m>4){
            return;
        }
        
        // looping for different length of ip address from the current index
        for(int i=0;i<3;i++){
            // if it is possible to have ip address of i+1 length
            if(index+i<=n-1){
                string str=s.substr(index,i+1);
                // if current ip a valid one 
                if((i==0 and str>="0" and str<="9") or (i==1 and str>="10" and str<="99") or (i==2 and str>="100" and str<="255")){
                    v.push_back(str);
                    solve(s,v,index+i+1);
                    v.pop_back();   // backtracking
                }
            }
        }
        return;
    }
    vector<string> restoreIpAddresses(string s) {
        vector<string> v;
        solve(s,v,0);
        return ans;
    }
};

```

