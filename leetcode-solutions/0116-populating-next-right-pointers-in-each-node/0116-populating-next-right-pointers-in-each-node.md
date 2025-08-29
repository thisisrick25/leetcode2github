# 0116. populating-next-right-pointers-in-each-node

## cpp

[View Solution](0116-populating-next-right-pointers-in-each-node.cpp)


```cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {
        if (!root) {
            return NULL;
        }
        if (root -> left) {
            root -> left -> next = root -> right;
            if (root -> next) {
                root -> right -> next = root -> next -> left;
            }
            connect(root -> left);
            connect(root -> right);
        }
        return root;
    }
};




// Node* connect(Node* root) {
//         if (!root || !root->left || !root->right) {return root;}
//         root->left->next = root->right;
//         root->right->next = root->next ? root->next->left : nullptr;
//         connect(root->left);
//         connect(root->right);
//         return root;
//     }






// class Solution {
// public:
//     Node* connect(Node* root) {
//         if(root == nullptr || root->left == nullptr) {
//             return root;
//         }
//         connectTwoTree(root->left, root->right);
//         return root;
//     }

//     void connectTwoTree(Node* left, Node* right) {
//         if(left == nullptr || right == nullptr) {
//             return;
//         }
//         left->next = right;
//         connectTwoTree(left->left, left->right);
//         connectTwoTree(right->left, right->right);
//         connectTwoTree(left->right, right->left);
//     }
// };
```
