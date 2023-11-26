create a function that takes two arguments: a BST and a positive integer k.
The function should return the kth largest integer contained in the BST

Assumptions:

1. Assume that dupplicate integers are different. E.g the 3rd largest value
   in BST containing {1223} is 2, - not 1
2. Assume that the BST contains only integers (positive and negative)
3. Assume that k >= no. of nodes in the BST

Recall:
Each BST node has an integer value, a left child node, and a right child node.
A node is said to be valid BST only if satifies the BST property, ie.

- the node's value is strictly greater than the values of every node to its left;
- the node's value less than or equal to the values of every node to its right;
- the node's children nodes ae either valid BST nodes themselves or null/none
