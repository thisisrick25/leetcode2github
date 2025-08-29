# 0567. permutation-in-string

## cpp

[View Solution](0567-permutation-in-string.cpp)


```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
        
        vector<int> s1hash(26,0);
        vector<int> s2hash(26,0);
        int s1len = s1.size();
        int s2len = s2.size();
        
        if(s1len>s2len)
            return false;
        
        int left=0,right=0;
        while(right<s1len)
        {
            s1hash[s1[right]-'a']++; //returns (ASCII value of s1.charAt(i) - ASCII value of 'a')
            s2hash[s2[right]-'a']++;
            right +=1;
        }
        right -=1;  // to point right to the end of the window
        while(right<s2len)
        {
            if(s1hash==s2hash)
                return true;
            right+=1;
            if(right!=s2len)
                s2hash[s2[right]-'a']++;
            s2hash[s2[left]-'a']--;
            left++;
        }
        return false;
        
    }
};





// class Solution {
// public:
//     bool checkInclusion(string s1, string s2) {
//         int map[26] = {0};
//         for(char c : s1) map[c - 'a']++;
//         int j = 0, i = 0, count_chars = s1.size();
//         while(j < s2.size()){
//             if(map[s2.at(j++) - 'a']-- > 0)
//                 count_chars--;
//             if(count_chars == 0) return true;
//             if(j - i == s1.size() && map[s2.at(i++) - 'a']++ >= 0)
//                 count_chars++;
//         }
//         return false;
//     }
// };






// class Solution {
// public:
//     bool check(vector<int>& A,vector<int>& B){
        
//         for(int i = 0;i<A.size();i++){
//             if(A[i] != B[i])
//                 return false;
//         }
//         return true;
//     }
//     bool checkInclusion(string B, string A) {
//         if(B.size()>A.size())
//             return false;
        
//         vector<int> countB(26,0);
//         vector<int> countA(26,0);
        
//         for(int i=0;i<B.size();i++){
//             countB[B[i]-'a']++;
//             countA[A[i]-'a']++;
//         }
        
//         if(check(countA,countB))
//             return true;
        
//         for(int i = B.size();i<A.size();i++){
            
//             countA[A[i-B.size()]-'a']--;
//             countA[A[i] - 'a']++;
            
//             if(check(countA,countB))
//                 return true;
//         }
        
//         return false;
//     }
// };
```
