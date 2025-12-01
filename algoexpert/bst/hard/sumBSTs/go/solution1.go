package main

import "math"

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time | O(h) space
func SumBsts(tree *BinaryTree) int {
	_, _, _, _, _, bstSum := sumNodes(tree)
	return bstSum
}

func sumNodes(node *BinaryTree) (bool, int, int, int, int, int) {
	if node == nil {
		return true, math.MaxInt32, -math.MaxInt32, 0, 0, 0
	}

	isLeftBST, leftMinVal, leftMaxVal, leftNodesCount, leftSum, leftTotalSum := sumNodes(node.Left)
	isRightBST, rightMinVal, rightMaxVal, rightNodesCount, rightSum, rightTotalSum := sumNodes(node.Right)

	isBST := isLeftBST && isRightBST && node.Value > leftMaxVal && node.Value <= rightMinVal
	min := MinInt(node.Value, leftMinVal, rightMinVal)
	max := MaxInt(node.Value, leftMaxVal, rightMaxVal)
	nodeCount := 1 + leftNodesCount + rightNodesCount
	nodeSum := node.Value + leftSum + rightSum
	totalSum := leftTotalSum + rightTotalSum

	if isBST && nodeCount >= 3 {
		totalSum += nodeSum
		nodeSum = 0
	}

	return isBST, min, max, nodeCount, nodeSum, totalSum
}

func MinInt(ints ...int) int {
	min := ints[0]
	for _, val := range ints {
		if val < min {
			min = val
		}
	}

	return min
}

func MaxInt(ints ...int) int {
	max := ints[0]
	for _, val := range ints {
		if val > max {
			max = val
		}
	}

	return max
}
