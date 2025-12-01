
// O(nm) time | O(nm) space (n = width, m = height)
func NumberOfWaysToTraverseGraph(width int, height int) int {
	matrix := make([][]int, height)
	for rowIdx := range matrix {
		matrix[rowIdx] = make([]int, width)
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if i == 0 || j == 0 {
				matrix[i][j] = 1
			} else {
				matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
			}
		}
	}

	return matrix[height-1][width-1]
}