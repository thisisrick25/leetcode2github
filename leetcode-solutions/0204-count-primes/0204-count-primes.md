# 0204. count-primes

## cpp

[View Solution](0204-count-primes.cpp)


```cpp
// class Solution {
// public:
//     int countPrimes(int n) {
//         int c = 0;
//             while(n-- > 0) {
//                 if(isPrime(n))
//                     c++;
//             }
//         return c;
//     }
    
//     bool isPrime(int n)
//     {
//         if (n <= 1)
//             return false;
 
//         for (int i = 2; i < n; i++)
//             if (n % i == 0)
//                 return false;
  
//         return true;
//     }
    
// };

class Solution {
public:
    int countPrimes(int n) {
        if(n<2)
            return 0;
        vector<int> v(n,1);
        v[0]=0;
        v[1]=0;
        for(int i=0;i<sqrt(n);i++){
            if(v[i]==1){
                for(int j=2;j*i<n;j++){
                    v[i*j]=0;
                }
            }
        }
        return count(v.begin(),v.end(),1);
    }
};
```
