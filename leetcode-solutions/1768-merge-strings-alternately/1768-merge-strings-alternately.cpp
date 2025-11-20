class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int x = word1.size(), y = word2.size();
        int i = 0;
        string merged;

        while(i < x || i < y) {
            if(i < x)
                merged += word1[i];
            if(i < y)
                merged += word2[i];
            i++;
        }
        return merged;
    }
};