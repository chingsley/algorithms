package main

import (
    "math"
)

type BinaryTree struct {
	Value       int
	Left, Right *BinaryTree
}

// O(n) time | O(d) space (n = no. of nodes, d = depth of tree)
func MaxPathSum(tree *BinaryTree) int {
	maxSum, _ := getMaxPathSum(tree)
	return maxSum
}

func getMaxPathSum(node *BinaryTree) (int, int) {
    if node == nil {
        return -math.MaxInt32, -math.MaxInt32
    }
    if node.Left == nil && node.Right == nil {
        return node.Value, node.Value
    }

    maxInLeft, leftMaxPath := getMaxPathSum(node.Left)
    maxInRight, rightMaxPath := getMaxPathSum(node.Right)

    currMax := max(
        node.Value + leftMaxPath,
        node.Value + rightMaxPath,
        node.Value + leftMaxPath + rightMaxPath,
        maxInLeft,
        maxInRight)

    maxPath := max(
        node.Value + leftMaxPath,
        node.Value + rightMaxPath)

    return currMax, maxPath
}

func max(numbers ...int) int {
    maxNum := -math.MaxInt32
    for _, num := range numbers {
        if num > maxNum {
            maxNum = num
        }
    }

    return maxNum
}
