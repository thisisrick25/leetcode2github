# 0263. ugly-number

## cpp

[View Solution](0263-ugly-number.cpp)


```cpp
class Solution {
public:
//     vector<int> primes = {2, 3, 5};
//     bool isUgly(int n) {
//         if (n < 1) 
//             return false;
//         for (int p: primes) {
            
//             while (n % p == 0) 
//                 n /= p;
//         }
        
//         if(n==1)
//             return true;
        
//         return false;
//     }
    
    
    bool isUgly(int n) {
        if(n==0)
            return false;
        while(n%2==0)
            n/=2;
        while(n%3==0)
            n/=3;
        while(n%5==0)
            n/=5;
        if(n==1)
            return true;
        return false;
    }
    
    
    
//     bool isUgly(int num) {
        
//         if(num<1)
//             return false;
//         else if(num==1)
//             return true;
//         else if(num%2==0)
//             return isUgly(num/2);
//         else if(num%3==0)
//             return isUgly(num/3);
//         else if(num%5==0)
//             return isUgly(num/5);
//         else
//             return false;
        
//     }
};
```
