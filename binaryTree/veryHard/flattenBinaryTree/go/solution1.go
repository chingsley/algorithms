package main

// This is the class of the input root. Do not edit it.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(d) space (n = no. of nodes in tree, d = depth of tree)
func FlattenBinaryTree(root *BinaryTree) *BinaryTree {
	leftMost, _ := flattenNode(root)
	return leftMost
}

func flattenNode(node *BinaryTree) (*BinaryTree, *BinaryTree) {
	var leftMost *BinaryTree
	var rightMost *BinaryTree

	if node.Left == nil {
		leftMost = node
	} else {
		leftSubtreeLeftMost, leftSubtreeRightMost := flattenNode(node.Left)
		connect(leftSubtreeRightMost, node)
		leftMost = leftSubtreeLeftMost
	}

	if node.Right == nil {
		rightMost = node
	} else {
		rightSubtreeLeftMost, rightSubtreeRightMost := flattenNode(node.Right)
		connect(node, rightSubtreeLeftMost)
		rightMost = rightSubtreeRightMost
	}

	return leftMost, rightMost
}

func connect(leftNode, rightNode *BinaryTree) {
	leftNode.Right = rightNode
	rightNode.Left = leftNode
}
