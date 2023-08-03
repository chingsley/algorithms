package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
func SymmetricalTree(tree *BinaryTree) bool {
	leftStack := []*BinaryTree{}
    rightStack := []*BinaryTree{}

    if tree.Left != nil {
        leftStack = append(leftStack, tree.Left)
    }
    if tree.Right != nil {
        rightStack = append(rightStack, tree.Right)
    }

    var leftNode *BinaryTree
    var rightNode *BinaryTree
    for len(leftStack) > 0 && len(rightStack) > 0 {
        leftNode, leftStack = leftStack[len(leftStack) - 1], leftStack[:len(leftStack) - 1]
        rightNode, rightStack = rightStack[len(rightStack) - 1], rightStack[:len(rightStack) - 1]

        if leftNode.Value != rightNode.Value {
            return false
        }

        if leftNode.Left != nil {
            leftStack = append(leftStack, leftNode.Left)
        }
        if leftNode.Right != nil {
            leftStack = append(leftStack, leftNode.Right)
        }
        if rightNode.Right != nil {
            rightStack = append(rightStack, rightNode.Right)
        }
        if rightNode.Left != nil {
            rightStack = append(rightStack, rightNode.Left)
        }
    }
    
	return len(leftStack) == len(rightStack)
}
