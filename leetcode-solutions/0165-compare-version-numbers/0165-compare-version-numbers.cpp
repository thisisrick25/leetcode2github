// class Solution {
// public:
//     int compareVersion(string s1, string s2) {
//         int n1 = s1.length(); // extracting length of string s1
//         int n2 = s2.length(); //extracting length of string s2
        
//         int i = 0, j = 0; // variables(pointers) used for moving
        
//         int number1 = 0, number2 = 0;  // numbers that generated between any two dots of the strings
        
//         // start traversing from string 1 and string 2
//         while(i < n1 || j < n2)
//         {
//             // generating number between dots for string s1
//             while(i < n1 && s1[i] != '.')
//             {
//                 number1 = number1 * 10 + (s1[i] - '0');
//                 i++;
//             }
            
//             // generating number between dots for string s2
//             while(j < n2 && s2[j] != '.')
//             {
//                 number2 = number2 * 10 + (s2[j] - '0');
//                 j++;
//             }
            
//             // if number1 is greater than number2, from here return 1
//             if(number1 > number2)
//             {
//                 return 1;
//             }
            
//              // if number1 is less than number2, from here return -1
//             if(number1 < number2)
//             {
//                 return -1;
//             }
            
//             // if equal then we have to proceed further
//             // again give numbers to zero, as we again generate numbers b/w dots 
//             number1 = 0, number2 = 0;
            
//             // move both pointers
//             i++;
//             j++;
//         }
        
//         // after traversing whole string, if all the versions are equal, that means
//         // strings are equal, so return 0
//         return 0;
//     }
// };

class Solution {
public:
    
    // Corner case 1: '01' vs '1'
    // Corner case 2: '1.0' vs '1'
    
    int compareVersion(string version1, string version2) {
        
        istringstream v1(version1);
        istringstream v2(version2);
        
        string num1, num2;
        // Consider corner case 2, we need continue the loop is either of them doesn't reach the end
        while( ! v1.eof() || ! v2.eof()) {
            if(! v1.eof()) {
                getline(v1, num1, '.');
            } else {
                num1 = "0";
            }
            
            if(! v2.eof()) {
                getline(v2, num2, '.');
            } else {
                num2 = "0";
            }
            
            // Cannot just use the string compare func since there could be leading '0's, e.g. '01' vs '1'  
            // TODO do we need consider overflow here ??!
            int n1 = stoi(num1), n2 = stoi(num2);
            
            if(n1 == n2)    continue;
            return (n1 > n2) ? 1 : - 1;
        }
        
        return 0;
    }
};