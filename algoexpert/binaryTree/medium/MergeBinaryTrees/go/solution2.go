package main

// This is an input class. Do not edit.
type BinaryTree struct {
	Value int

	Left  *BinaryTree
	Right *BinaryTree
}

// O(n) time
// O(n + d) space (converges to O(n) space where n is much larger than d)
// (N = min(n1, n2), d = min(d1, d2))
// where n1 = no. of nodes in tree1, n2 = no. of nodes in tree2
//       d1 = depth of tree1, d2 = depth of tree 2
func MergeBinaryTrees(tree1 *BinaryTree, tree2 *BinaryTree) *BinaryTree {
	mergedTree := &BinaryTree{
		Value: tree1.Value + tree2.Value,
		Left:  nil,
		Right: nil}

	merge(tree1.Left, tree2.Left, mergedTree, true)
	merge(tree1.Right, tree2.Right, mergedTree, false)
	return mergedTree
}

func merge(node1, node2, currNode *BinaryTree, isLeft bool) {
	if node1 == nil && node2 == nil {
		return
	}

	var val1, val2 int
	var node1Left, node1Right, node2Left, node2Right *BinaryTree
	if node1 != nil {
		val1 = node1.Value
		node1Left, node1Right = node1.Left, node1.Right
	}
	if node2 != nil {
		val2 = node2.Value
		node2Left, node2Right = node2.Left, node2.Right
	}

	if node1 == nil && node2 != nil {
		if isLeft {
			currNode.Left = node2
		} else {
			currNode.Right = node2
		}
		return
	} else if node1 != nil && node2 == nil {
		if isLeft {
			currNode.Left = node1
		} else {
			currNode.Right = node1
		}
		return
	}

	newNode := &BinaryTree{Value: val1 + val2}
	if isLeft {
		currNode.Left = newNode
		currNode = currNode.Left
	} else {
		currNode.Right = newNode
		currNode = currNode.Right
	}

	merge(node1Left, node2Left, currNode, true)
	merge(node1Right, node2Right, currNode, false)
}
