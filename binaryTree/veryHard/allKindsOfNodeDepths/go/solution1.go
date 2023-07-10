package main

type BinaryTree struct {
	Value       int
	Left, Right *BinaryTree
}

type Res struct {
	Value int
}

// O(n) time | O(h) space (n = no. of nodes in tree, h = height of tree)
func AllKindsOfNodeDepths(root *BinaryTree) int {
	res := &Res{Value: 0}
	traverse(root, res)
	return res.Value
}

func traverse(node *BinaryTree, res *Res) (int, int) {
	if node == nil {
		return 0, 0
	}
	if node.Left == nil && node.Right == nil {
		return 1, 1
	}

	dl, cl := traverse(node.Left, res)
	dr, cr := traverse(node.Right, res)

	currNodeDepth := dl + dr
	res.Value = res.Value + currNodeDepth
	childCountPlusCurrNode := cl + cr + 1
	return currNodeDepth + childCountPlusCurrNode, childCountPlusCurrNode
}
