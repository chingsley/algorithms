package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left   *BinaryTree
	Right  *BinaryTree
	Parent *BinaryTree
}

// O(h) time | O(1) spacce ( h = height of the tree)
func FindSuccessor(tree *BinaryTree, node *BinaryTree) *BinaryTree {
	if node.Right != nil {
		return getLeftMostChild(node.Right)
	}
	return getFirstLeftParent(node)
}

func getLeftMostChild(node *BinaryTree) *BinaryTree {
	leftMost := node
	for leftMost.Left != nil {
		leftMost = leftMost.Left
	}
	return leftMost
}

func getFirstLeftParent(node *BinaryTree) *BinaryTree {
	currNode := node
	for currNode.Parent != nil {
		if currNode.Parent.Left == currNode {
			return currNode.Parent
		} else {
			currNode = currNode.Parent
		}
	}

	return nil
}
