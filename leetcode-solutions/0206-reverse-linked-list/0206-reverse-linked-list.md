# 0206. reverse-linked-list

## cpp

[View Solution](0206-reverse-linked-list.cpp)


```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
// class Solution {
// public:
//     ListNode* reverseList(ListNode* head) {
        
//         // ListNode* prev=NULL;
//         // ListNode* cur=head;
//         // ListNode* n;
//         // while(cur!=NULL){
//         //     n=cur->next;
//         //     cur->next=prev;
//         //     prev=cur;
//         //     cur=n;
//         // }
//         // return prev;
        
//         ListNode* cur = NULL;
//         while (head) {
//             ListNode* next = head -> next;
//             head -> next = cur;
//             cur = head;
//             head = next;
//         }
//         return cur;
//     }
// };



class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        if (!head || !head->next)
            return head;
 
        ListNode* rest = reverseList(head->next);
        head->next->next = head;
 
        head->next = nullptr;
 
        return rest;
        
        
    }
};
```
