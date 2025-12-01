package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

func CompareLeafTraversal(tree1 *BinaryTree, tree2 *BinaryTree) bool {
	arr1 := traverse(tree1)
	arr2 := traverse(tree2)

	if len(arr1) != len(arr2) {
		return false
	}

	for i, _ := range arr1 {
		if arr1[i] != arr2[i] {
			return false
		}
	}

	return true
}

func traverse(tree *BinaryTree) []int {
	stack := []*BinaryTree{tree}
	arr := []int{}
	for len(stack) > 0 {
		var node *BinaryTree
		node, stack = stack[len(stack)-1], stack[:len(stack)-1]
		if node.Left == nil && node.Right == nil {
			arr = append(arr, node.Value)
		}
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
	}

	return arr
}
