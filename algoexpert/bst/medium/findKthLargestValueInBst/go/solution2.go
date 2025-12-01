package main

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

type Visited struct {
	Count int
	Value int
}

// O(h + k) time
// O(h) space (due to recursion)
func FindKthLargestValueInBst(tree *BST, k int) int {
	visited := &Visited{Count: 0, Value: 0}
	traverse(tree, k, visited)
	return visited.Value
}

func traverse(node *BST, k int, visited *Visited) {
	if node == nil {
		return
	}
	if visited.Count >= k {
		return
	}

	traverse(node.Right, k, visited)
	if visited.Count < k {
		visited.Count += 1
		visited.Value = node.Value
	}
	traverse(node.Left, k, visited)
}
