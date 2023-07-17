package main

// This is the class of the input root. Do not edit it.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes, h = height of tree)
func RightSiblingTree(root *BinaryTree) *BinaryTree {
	traverse(root, nil, false)
	return root
}

func traverse(node *BinaryTree, parent *BinaryTree, isLeftNode bool) {
	if node == nil {
		return
	}

	traverse(node.Left, node, true)

	prevRightChild := node.Right
	if isLeftNode {
		node.Right = parent.Right
	} else {
		if parent == nil || parent.Right == nil {
			node.Right = nil
		} else {
			node.Right = parent.Right.Left
		}
	}

	traverse(prevRightChild, node, false)
}
