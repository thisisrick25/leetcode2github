---
number: 0767
slug: reorganize-string
difficulty: Medium
languages: cpp
latest_solved_at: 2023-08-23T21:22:09.000Z
generated_at: 2025-11-20T19:21:44.905Z
---

# 0767. Reorganize String

**URL:** [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/)  
**Difficulty:** Medium  
**Languages:** cpp

**Latest Solved At:** 2023-08-23T21:22:09.000Z

---

## Problem Description

<p>Given a string <code>s</code>, rearrange the characters of <code>s</code> so that any two adjacent characters are not the same.</p>

<p>Return <em>any possible rearrangement of</em> <code>s</code> <em>or return</em> <code>&quot;&quot;</code> <em>if not possible</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aab"
<strong>Output:</strong> "aba"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aaab"
<strong>Output:</strong> ""
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


---

## Solutions

[View raw cpp solution](0767-reorganize-string.cpp)

```cpp
class Solution {
public:
    string reorganizeString(string S) {
	vector<int> cnt(26);
	int mostFreq = 0, i = 0;

	for(char c : S)
		if(++cnt[c - 'a'] > cnt[mostFreq])
			mostFreq = (c - 'a');

	if(2 * cnt[mostFreq] - 1 > S.size()) return "";

	while(cnt[mostFreq]) {
		S[i] = ('a' + mostFreq);
		i += 2;
		cnt[mostFreq]--;
	}

	for(int j = 0; j < 26; j++) {
		while(cnt[j]) {
			if(i >= S.size()) i = 1;
			S[i] = ('a' + j);
			cnt[j]--;
			i += 2;
		}
	}

	return S;
}

};
```

