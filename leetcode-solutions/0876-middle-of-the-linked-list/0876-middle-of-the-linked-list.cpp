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
    ListNode* middleNode(ListNode* head) {
        
        // ListNode* p;
        // int count=0;
        // p=head;
        // while(p!=NULL){
        //     p=p->next;
        //     count++;
        // }
        // int mid=floor(count/2);
        // int tcount=0;
        // ListNode* q=head;
        // while(tcount<mid){
        //     q=q->next;
        //     tcount++;
        // }
        // return q;
        
        
        ListNode *slow = head, *fast = head;

        while(fast!=nullptr && fast->next!=nullptr)
        {
            fast = fast->next->next;
            slow = slow->next;
        }
        return slow;
    }
};