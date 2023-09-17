package main

type BinaryTree struct {
	Value       int
	Left, Right *BinaryTree
}

func NodeDepths(root *BinaryTree) int {
	return sumDepths(root, 0)
}

func sumDepths(node *BinaryTree, currNodeDepth int) int {
	if node == nil {
		return 0
	}

	leftDepth := sumDepths(node.Left, currNodeDepth+1)
	rightDepth := sumDepths(node.Right, currNodeDepth+1)
	return leftDepth + rightDepth + currNodeDepth
}
