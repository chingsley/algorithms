package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space (n = no. of nodes, h = tree height or depth)
func BinaryTreeDiameter(tree *BinaryTree) int {
	maxDiam, _ := parseTree(tree)
	return maxDiam
}

func parseTree(node *BinaryTree) (int, int) {
	if node == nil {
		return 0, 0
	}

	leftMaxDiam, leftMaxPath := parseTree(node.Left)
	rightMaxDiam, rightMaxPath := parseTree(node.Right)

	maxDiam := max(leftMaxDiam, rightMaxDiam, leftMaxPath+rightMaxPath)
	maxPath := 1 + max(leftMaxPath, rightMaxPath)
	return maxDiam, maxPath
}

func max(numbers ...int) int {
	maxNum := numbers[0]
	for _, num := range numbers {
		if num > maxNum {
			maxNum = num
		}
	}

	return maxNum
}
