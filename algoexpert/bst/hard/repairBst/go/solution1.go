package main

import "fmt"

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

func RepairBst(tree *BST) *BST {
	sortedNodes := &[]*BST{}
	traverseNode(tree, sortedNodes)
	return tree
}

// O(n^2) time | O(h) space
func traverseNode(node *BST, sortedNodes *[]*BST) {
	if node == nil {
		return
	}

	traverseNode(node.Left, sortedNodes)
	*sortedNodes = append(*sortedNodes, node)

	i, j := len(*sortedNodes)-2, len(*sortedNodes)-1
	for i >= 0 && (*sortedNodes)[j].Value < (*sortedNodes)[i].Value {
		(*sortedNodes)[i].Value, (*sortedNodes)[j].Value = (*sortedNodes)[j].Value, (*sortedNodes)[i].Value
		i, j = i-1, j-1
	}

	traverseNode(node.Right, sortedNodes)
}

func printArr(m interface{}, arr []*BST) {
	var vals []int
	for _, node := range arr {
		vals = append(vals, node.Value)
	}

	fmt.Println(m, vals)
}
