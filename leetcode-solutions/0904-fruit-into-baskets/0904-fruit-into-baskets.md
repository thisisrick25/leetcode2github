# 0904. fruit-into-baskets

## cpp

[View Solution](0904-fruit-into-baskets.cpp)


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
