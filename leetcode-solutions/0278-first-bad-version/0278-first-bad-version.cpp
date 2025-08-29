// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        unsigned int low = 1, high = n;
        
        while(low <= high) {
            unsigned int mid = low + (high - low)/2;
            
            // according to question everything is true after the key element so (arr[mid] == key) == (arr[mid] > key)
            if(isBadVersion(mid)) // this condition includes both arr[mid] == key and arr[mid] > key
                high = mid - 1;
            else
                low = mid + 1;
            
        }
        return low;
        
    }
};