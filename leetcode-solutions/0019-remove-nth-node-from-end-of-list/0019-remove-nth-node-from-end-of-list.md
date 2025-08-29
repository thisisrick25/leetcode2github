# 0019. remove-nth-node-from-end-of-list

## cpp

[View Solution](0019-remove-nth-node-from-end-of-list.cpp)


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
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *first = head, *second = head;

	    // move fast pointer to the n + 1 element
        for(int i = 0; i < n; i++)
            first = first -> next;
        
        // handle edge case: given n is always valid, 
        // if fast reached the end, we need to remove the first element
	    if(!first) // first == nullptr // if fast is already null, it means we have to delete head itself. So, just return next of head
            return head -> next;
        
        // move both pointers at the same time maintaing the difference
        while(first -> next) {
            first = first -> next;
            second = second -> next;
        }
        
        // slow will be pointing to the element before the one we want to remove
        second -> next = second -> next -> next;
        
        return head;
	    
    }
        
};

// class Solution {
// public:

// ListNode *removeNthFromEnd(ListNode *head, int &n)
// {
// 	if(head == NULL) // if end
// 		return NULL;

// 	head->next = removeNthFromEnd(head->next,n);// set to the next node
//     n--;
    
// 	if(n == 0) // do I need to remove this node
// 		return head->next;
// 	return head;
// }
// };
```
