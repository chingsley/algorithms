package main

// O(n) time
// O(n) space (due to the size of the array created)
// O((1/2)n) space = O(n) space (due to recursive calls)
// n = no. elements in the array = no. of nodes in the created BST
func MinHeightBST(array []int) *BST {
	return bstInRange(0, len(array)-1, &array)
}

func bstInRange(i, j int, arr *[]int) *BST {
	if i > j {
		return nil
	}

	midIdx := (i + j) / 2
	left := bstInRange(i, midIdx-1, arr)
	right := bstInRange(midIdx+1, j, arr)
	return &BST{
		Value: (*arr)[midIdx],
		Right: right,
		Left:  left}
}

type BST struct {
	Value int

	Left  *BST
	Right *BST
}

func (tree *BST) Insert(value int) *BST {
	if value < tree.Value {
		if tree.Left == nil {
			tree.Left = &BST{Value: value}
		} else {
			tree.Left.Insert(value)
		}
	} else {
		if tree.Right == nil {
			tree.Right = &BST{Value: value}
		} else {
			tree.Right.Insert(value)
		}
	}
	return tree
}
