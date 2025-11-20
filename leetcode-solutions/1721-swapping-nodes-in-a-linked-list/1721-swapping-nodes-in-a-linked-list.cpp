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
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *dummy = new ListNode(0);
        dummy->next = head;
        ListNode *pre_left =dummy ,*pre_right = dummy,*left = head ,*right =head;
        for(int i=1;i<k;i++){
            pre_left = left;
            left = left->next;
        }
        
        ListNode *null_checker = left;
        while(null_checker->next){
            pre_right = right;
            right = right->next;
            null_checker = null_checker->next;
        }
        
        if(left == right) return dummy->next;
        
        pre_left->next = right;
        pre_right->next = left;
        
        ListNode *remb = left->next;
        left->next = right->next;
        right->next = remb;
        
        return dummy->next;
    }
};