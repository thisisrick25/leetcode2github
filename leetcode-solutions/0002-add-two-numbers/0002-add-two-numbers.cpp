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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
// 		if (l1 == NULL)
//             return l2;
// 		else if (l2 == NULL)
//             return l1;
        
//         int sum = l1->val + l2->val;
// 		ListNode *p = new ListNode(sum % 10);
// 		p -> next = addTwoNumbers(l1 -> next, l2 -> next);
// 		if (sum >= 10)
//             p -> next = addTwoNumbers(p -> next, new ListNode(1));
// 		return p;
        
        ListNode* head= new ListNode();
    ListNode* temp=head;
    int carry=0;
    while(l1!=NULL || l2!=NULL || carry){
        int sum=0;
        if(l1!=NULL){
            sum+= l1->val;
            l1=l1->next;
        }
        if(l2!=NULL){
            sum+= l2->val;
            l2=l2->next;
        }
        sum+=carry;
        carry=sum/10;
        ListNode* node=new ListNode(sum%10);
        temp->next=node;
        temp=temp->next;
    }
    return head->next;
    }
};