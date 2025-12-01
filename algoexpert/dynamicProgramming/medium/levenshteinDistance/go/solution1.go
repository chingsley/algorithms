package main
import (
    // "fmt"
)

// O(n * m) time | O(n * m) space (n = length of a, m = length of b)
func LevenshteinDistance(a, b string) int {
	matrix := make([][]int, len(b) + 1)
    
    for rowIdx := range matrix {
        matrix[rowIdx] = make([]int, len(a) + 1)
    }

    for i := 0; i < len(matrix); i++ {
        for j := 0; j < len(matrix[i]); j++ {
            if i == 0 {
                matrix[i][j] = j
            } else if j == 0 {
                matrix[i][j] = i
            } else if b[i - 1] == a[j - 1] {
                matrix[i][j] = matrix[i - 1][j - 1]
            } else {
                matrix[i][j] = 1 + Min(
                    matrix[i - 1][j],
                    matrix[i][j - 1],
                    matrix[i - 1][j - 1])
            }
        }
    }

    // fmt.Println(matrix)
	return matrix[len(b)][len(a)]
}

func Min(a int, b int, c int) int {
    min := a
    if b < min {
        min = b
    }
    if c < min {
        min = c
    }

    return min
}
