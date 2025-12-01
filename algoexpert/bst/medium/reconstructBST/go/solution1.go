package main

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(n^2) time
// O(d) space due to recursive calls
// O(n) time due to the contructed tree
func ReconstructBst(preOrderTraversalValues []int) *BST {
	return reconstructInRange(0, len(preOrderTraversalValues)-1, preOrderTraversalValues)
}

func reconstructInRange(startIdx, endIdx int, arr []int) *BST {
	if startIdx > endIdx {
		return nil
	}

	brk := endIdx + 1
	for i := startIdx + 1; i <= endIdx; i++ {
		if arr[i] >= arr[startIdx] {
			brk = i
			break
		}
	}

	left := reconstructInRange(startIdx+1, brk-1, arr)
	right := reconstructInRange(brk, endIdx, arr)
	return &BST{
		Value: arr[startIdx],
		Left:  left,
		Right: right}
}
