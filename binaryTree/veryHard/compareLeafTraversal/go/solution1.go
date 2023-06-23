package main

/** WORK IN PROGRESS **/

import (
	"fmt"
)

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

func CompareLeafTraversal(tree1 *BinaryTree, tree2 *BinaryTree) bool {
	arr1 := traverse(tree1)
	// arr2 := traverse(tree2)
	arr2 := []int{}

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
	view := []int{tree.Value}
	for len(stack) > 0 {
		fmt.Println("view: ", view, len(view))
		node, stack := stack[len(stack)-1], stack[:len(stack)-1]
		_, view := view[len(view)-1], view[:len(view)-1]
		// fmt.Println("view: ", view, len(view))
		if node.Left == nil && node.Right == nil {
			arr = append(arr, node.Value)
			fmt.Println(arr)
		}
		if node.Left != nil {
			stack = append(stack, node.Left)
			view = append(view, node.Left.Value)
		}
		if node.Right != nil {
			stack = append(stack, node.Right)
			view = append(view, node.Right.Value)
		}
		fmt.Println("view: ", view, len(view))
	}

	return arr
}
