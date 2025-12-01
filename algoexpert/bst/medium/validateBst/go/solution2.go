package main

import (
	"fmt"
	"math"
)

type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(n) time | O(h) space (n = no. of nodes, h = height of tree)
func (tree *BST) ValidateBst() bool {
	return validate(tree, math.MinInt32, math.MaxInt32)
}

func validate(node *BST, min, max int) bool {
	if node == nil {
		return true
	}
	fmt.Println(node.Value, min, max)

	if !(node.Value >= min && node.Value < max) {
		return false
	}

	isLeftBst := validate(node.Left, min, node.Value)
	isRightBst := validate(node.Right, node.Value, max)
	return isLeftBst && isRightBst
}
