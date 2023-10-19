package main

// This is an input class. Do not edit.
type BST struct {
	Value int

	Left  *BST
	Right *BST
}

// O(d) time | O(1) space
func ValidateThreeNodes(nodeOne *BST, nodeTwo *BST, nodeThree *BST) bool {
	if foundIn(nodeOne, nodeTwo, nodeThree) {
		return true
	} else {
		return foundIn(nodeThree, nodeTwo, nodeOne)
	}
}

func foundIn(n1, n2, n3 *BST) bool {
	found := false
	currNode := n1
	n := n2
	for currNode != nil {
		if currNode.Value == n.Value {
			if found == true {
				return true
			} else {
				found = true
				n = n3
			}
		}

		if n.Value < currNode.Value {
			currNode = currNode.Left
		} else {
			currNode = currNode.Right
		}
	}

	return false
}
