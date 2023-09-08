package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
func HeightBalancedBinaryTree(tree *BinaryTree) bool {
	isLeftBalanced, leftHeight := checkBalance(tree.Left)
	isRightBalanced, rightHeight := checkBalance(tree.Right)
	if !isLeftBalanced || !isRightBalanced {
		return false
	}
	if abs(leftHeight-rightHeight) > 1 {
		return false
	}

	return true
}

func checkBalance(node *BinaryTree) (bool, int) {
	if node == nil {
		return true, 0
	}

	isLeftBalanced, leftHeight := checkBalance(node.Left)
	isRightBalanced, rightHeight := checkBalance(node.Right)
	if !isLeftBalanced || !isRightBalanced {
		return false, -1
	}
	if abs(leftHeight-rightHeight) > 1 {
		return false, -1
	}

	return true, max(leftHeight, rightHeight) + 1
}

func max(num1, num2 int) int {
	if num1 > num2 {
		return num1
	} else {
		return num2
	}
}

func abs(num int) int {
	if num >= 0 {
		return num
	} else {
		return num * -1
	}
}
