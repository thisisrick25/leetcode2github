# 0069. sqrtx

## cpp

[View Solution](0069-sqrtx.cpp)


```cpp
class Solution {
public:
    int mySqrt(int x) {
        if(x == 0)
            return 0;

  int left = 0, right = x, ans = 1;
  while(left <= right){
    // Prevent (left + right) overflow
    long long mid = left + (right - left) / 2;
      
    if(mid * mid == x){ return mid; }
      
    else if(mid * mid < x) { 
        ans = mid;
        left = mid + 1;
    }
      
    else { right = mid - 1; }
  }
        return ans;
    }
    
    // // ----newton
    // long r = x;
    // while (r*r > x)
    //     r = (r + x/r) / 2;
    // return r;
};
```
