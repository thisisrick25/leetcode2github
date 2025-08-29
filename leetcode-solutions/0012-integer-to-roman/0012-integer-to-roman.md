# 0012. integer-to-roman

## cpp

[View Solution](0012-integer-to-roman.cpp)


class Solution {
public:
    string intToRoman(int num) {
        unordered_map<int, string> roman_map = {
            {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
            {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
            {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}
        };

        vector<int> values;
        for (const auto& pair : roman_map) {
            values.push_back(pair.first);
        }

        // Sort values in descending order
        sort(values.rbegin(), values.rend());

        string result = "";

        for (int value : values) {
            while (num >= value) {
                num -= value;
                result += roman_map[value];
            }
        }
        return result;

    }
};

