package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes, h = height of tree)
func EvaluateExpressionTree(tree *BinaryTree) int {
	if tree.Left == nil && tree.Right == nil {
		return tree.Value
	}

	leftVal := EvaluateExpressionTree(tree.Left)
	rightVal := EvaluateExpressionTree(tree.Right)

	if tree.Value == -1 {
		return leftVal + rightVal
	}
	if tree.Value == -2 {
		return leftVal - rightVal
	}
	if tree.Value == -3 {
		return leftVal / rightVal // golang will round this towards zero by default
	}
	return leftVal * rightVal
}
