---
number: 212
slug: word-search-ii
title: Word Search II
difficulty: Hard
languages: cpp
generated_at: 2025-11-20T18:18:36.755Z
---

# 0212. Word Search II

**URL:** [https://leetcode.com/problems/word-search-ii/](https://leetcode.com/problems/word-search-ii/)  
**Difficulty:** Hard  
**Languages:** cpp

---

## Problem Description

<p>Given an <code>m x n</code> <code>board</code>&nbsp;of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.</p>

<p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search1.jpg" style="width: 322px; height: 322px;" />
<pre>
<strong>Input:</strong> board = [[&quot;o&quot;,&quot;a&quot;,&quot;a&quot;,&quot;n&quot;],[&quot;e&quot;,&quot;t&quot;,&quot;a&quot;,&quot;e&quot;],[&quot;i&quot;,&quot;h&quot;,&quot;k&quot;,&quot;r&quot;],[&quot;i&quot;,&quot;f&quot;,&quot;l&quot;,&quot;v&quot;]], words = [&quot;oath&quot;,&quot;pea&quot;,&quot;eat&quot;,&quot;rain&quot;]
<strong>Output:</strong> [&quot;eat&quot;,&quot;oath&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search2.jpg" style="width: 162px; height: 162px;" />
<pre>
<strong>Input:</strong> board = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], words = [&quot;abcb&quot;]
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 12</code></li>
	<li><code>board[i][j]</code> is a lowercase English letter.</li>
	<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words[i].length &lt;= 10</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
	<li>All the strings of <code>words</code> are unique.</li>
</ul>


---

## Solutions

- [cpp](0212-word-search-ii.cpp) — 2021-10-09T17:13:57.000Z

---

### cpp — 2021-10-09T17:13:57.000Z

- Runtime: 256 ms  
- Memory: 9.8 MB  

[View raw solution](0212-word-search-ii.cpp)


```cpp
struct TrieNode {
    TrieNode* children[26] = {};
    string* word;
    void addWord(string& word) {
        TrieNode* cur = this;
        for (char c : word) {
            c -= 'a';
            if (cur->children[c] == nullptr) cur->children[c] = new TrieNode();
            cur = cur->children[c];
        }
        cur->word = &word;
    }
};

class Solution {
public:
    int m, n;
    int DIR[5] = {0, 1, 0, -1, 0};
    vector<string> ans;
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        m = board.size(); n = board[0].size();
        TrieNode trieNode;
        for (string& word : words) trieNode.addWord(word);
        
        for (int r = 0; r < m; ++r)
            for (int c = 0; c < n; ++c)
                dfs(board, r, c, &trieNode);
        return ans;
    }
    void dfs(vector<vector<char>>& board, int r, int c, TrieNode* cur) {
        if (r < 0 || r == m || c < 0 || c == n || board[r][c] == '#' || cur->children[board[r][c]-'a'] == nullptr) return;
        char orgChar = board[r][c];
        cur = cur->children[orgChar - 'a'];
        if (cur->word != nullptr) {
            ans.push_back(*cur->word);
            cur->word = nullptr; // Avoid duplication!
        }
        board[r][c] = '#'; // mark as visited!
        for (int i = 0; i < 4; ++i) dfs(board, r + DIR[i], c + DIR[i+1], cur);
        board[r][c] = orgChar; // restore org state
    }
};
```

