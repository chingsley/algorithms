package main

// O(m x n) time | O(m x n) space (for an m by n matrix)
func TransposeMatrix(matrix [][]int) [][]int {
	transposed := [][]int{}
	j := 0
	for j < len(matrix[0]) {
		newArr := []int{}
		for i := 0; i < len(matrix); i++ {
			newArr = append(newArr, matrix[i][j])
		}

		j += 1
		transposed = append(transposed, newArr)
	}
	return transposed
}
