package main

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(h + k) time | O(h + k) space
func FindKthLargestValueInBst(tree *BST, k int) int {
	arr := []int{}
	visit(tree, k, &arr)
	return arr[k-1]
}

func visit(node *BST, k int, arrPointer *[]int) {
	if node == nil {
		return
	}
	if len(*arrPointer) >= k {
		return
	}

	visit(node.Right, k, arrPointer)
	*arrPointer = append(*arrPointer, node.Value)
	visit(node.Left, k, arrPointer)
}
