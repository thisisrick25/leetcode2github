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
class Solution {
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
//         if(l1 == NULL) return l2;
//         if(l2 == NULL) return l1;
        
//         if(l1->val < l2->val) {
//             l1->next = mergeTwoLists(l1->next, l2);
//             return l1;
//         } else {
//             l2->next = mergeTwoLists(l2->next, l1);
//             return l2;
//         }
        ListNode *dummy, *temp;
        dummy = new ListNode();
        temp = dummy;
        
        //when both list1 and list2 isn't empty
        while(list1 != NULL && list2 != NULL){
            if(list1->val < list2->val){
                temp->next = list1;
                list1 = list1->next;
            }
            else{
                temp->next = list2;
                list2 = list2->next;   
            }
            temp = temp->next;
        }
        
        // we reached at the end of one of the list
        if(list1 == NULL)
            temp->next = list2;
        if(list2 == NULL)
            temp->next = list1;
        
        return dummy->next;
        
    }
};