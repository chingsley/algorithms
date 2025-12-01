package main

type BinaryTree struct {
	Value int

	Left   *BinaryTree
	Right  *BinaryTree
	Parent *BinaryTree
}

// O(n) time | O(1) space (n = no. of nodes in tree)
func (tree *BinaryTree) IterativeInOrderTraversal(callback func(int)) {
	current := tree
	var previous *BinaryTree

	for current != nil {
		if (current.Left == nil || current.Left == previous) &&
			(current.Right == nil || current.Right != previous) {
			callback(current.Value)
		}

		if current.Left != nil && previous == current.Parent {
			previous = current
			current = current.Left
		} else if current.Right != nil && previous != current.Right {
			previous = current
			current = current.Right
		} else {
			previous = current
			current = current.Parent
		}
	}
}
