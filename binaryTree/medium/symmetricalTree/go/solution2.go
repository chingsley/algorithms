package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
func SymmetricalTree(tree *BinaryTree) bool {
	return isMirror(tree.Left, tree.Right)
}

func isMirror(left, right *BinaryTree) bool {
    if left == nil && right == nil {
        return true
    }
    if left == nil && right != nil {
        return false
    }
    if (left != nil && right == nil) {
        return false
    }
    
    if (left.Value != right.Value) {
        return false
    }

    return isMirror(left.Left, right.Right) && isMirror(left.Right, right.Left)
}
