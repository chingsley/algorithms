package main

import (
	"math"
)

type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(n) time | O(h) space (n = no. of nodes, h = height of tree)
func (tree *BST) ValidateBst() bool {
	isBst, _, _ := tree.IsBst()
	return isBst
}

func (tree *BST) IsBst() (bool, int, int) {
	isLeftBst, minLeft, maxLeft := true, math.MaxInt32, -math.MaxInt32
	isRightBst, minRight, maxRight := true, math.MaxInt32, -math.MaxInt32

	if tree.Left != nil {
		isLeftBst, minLeft, maxLeft = tree.Left.IsBst()
	}
	if tree.Right != nil {
		isRightBst, minRight, maxRight = tree.Right.IsBst()
	}

	isBst := isLeftBst && isRightBst && tree.Value > maxLeft && tree.Value <= minRight
	min := minInt(tree.Value, minLeft, minRight)
	max := maxInt(tree.Value, maxLeft, maxRight)
	return isBst, min, max
}

func minInt(ints ...int) int {
	min := ints[0]
	for _, v := range ints {
		if v < min {
			min = v
		}
	}
	return min
}

func maxInt(ints ...int) int {
	max := ints[0]
	for _, v := range ints {
		if v > max {
			max = v
		}
	}
	return max
}
