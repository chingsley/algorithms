package main

// O(m x n) time | O(m x n) space
func transpose(matrix [][]int) [][]int {
	tranxp := [][]int{}
	for colIdx := range matrix[0] {
		newRow := []int{}
		for rowIdx := range matrix {
			newRow = append(newRow, matrix[rowIdx][colIdx])
		}
		tranxp = append(tranxp, newRow)
	}

	return tranxp
}
