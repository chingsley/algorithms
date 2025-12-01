package main

import (
	"math"
)

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(n) time
// O(d) space (due to recursive calls)
// O(n) space (due to the size of the reconstructed tree)
func ReconstructBst(preOrderTraversalValues []int) *BST {
	idx := 0
	return bstInRange(-math.MaxInt32, math.MaxInt32, preOrderTraversalValues, &idx)
}

func bstInRange(bb, tb int, arr []int, idxPointer *int) *BST {
	idx := *idxPointer
	if idx >= len(arr) {
		return nil
	}

	val := arr[idx]
	if val < bb || val >= tb {
		return nil
	}

	(*idxPointer)++
	left := bstInRange(bb, arr[idx], arr, idxPointer)
	right := bstInRange(arr[idx], tb, arr, idxPointer)
	return &BST{
		Value: val,
		Left:  left,
		Right: right}

}
