#include <iostream>
using namespace std;

struct Node{
  int val;
  struct Node* left;
  struct Node* right;
};

void traverse(struct Node* root){
  if(root==NULL) return;
  cout<<root->val<<endl;
  traverse(root->left);
  traverse(root->right);
}

struct Node* NewNode(int value){
  struct Node* node=new struct Node;
  node->val=value;
  node->left=node->right=NULL;
  return node;
}

void Insert(struct Node* root, int value){
  if(value==root->val){
    cout<<"\nduplicate values are not allowed";
  }
  else if(root==NULL){
    root->val=value;
  }
  else if(value>root->val){
    if(root->right==NULL) root->right=NewNode(value); 
    else Insert(root->right, value);
  }else if(value<root->val){
    if(root->left==NULL)  root->left=NewNode(value);
    else Insert(root->left, value);
  }
}
int main() {
  int arr[]={15,12,36,45,96,23,56,89,75};
  struct Node* root=NewNode(arr[0]);
  for(int i=1;i<sizeof(arr)/sizeof(arr[0]);i++){
    Insert(root, arr[i]);
  }
  traverse(root);
}