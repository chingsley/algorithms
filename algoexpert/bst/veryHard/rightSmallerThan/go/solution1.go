package main

type CustomBST struct {
	Value             int
	Left              *CustomBST
	Right             *CustomBST
	NumOfLeftChildren int
}

// Avg. case: O(nlog(n)) time | O(n) space;
// worst case (a one branch tree): O(n^2) time | O(n) space
func RightSmallerThan(array []int) []int {
	if len(array) == 0 {
		return []int{}
	}

	result := make([]int, len(array))
	root := &CustomBST{Value: array[len(array)-1]}
	for i := len(array) - 2; i >= 0; i-- {
		currNode := root
		value := array[i]
		for {
			if value <= currNode.Value {
				currNode.NumOfLeftChildren += 1
				if currNode.Left == nil {
					currNode.Left = &CustomBST{Value: value}
					break
				} else {
					currNode = currNode.Left
				}
			} else {
				result[i] += currNode.NumOfLeftChildren + 1
				if currNode.Right == nil {
					currNode.Right = &CustomBST{Value: value}
					break
				} else {
					currNode = currNode.Right
				}
			}
		}
	}
	return result
}
