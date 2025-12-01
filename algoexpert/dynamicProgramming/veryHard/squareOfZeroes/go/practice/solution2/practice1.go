package main

// import "fmt"

// O(n^3) time | O(n^2) space (n = length of the n x n matrix)
func SquareOfZeroes(matrix [][]int) bool {
	counts := buildCountsMatrix(matrix)
	// fmt.Println(counts)
	for i, _ := range matrix {
		for j, _ := range matrix[i] {
			if matrix[i][j] == 0 {
				r2, c2 := i+1, j+1
				for r2 < len(matrix) && c2 < len(matrix[0]) {
					if isZeroSquare(i, j, r2, c2, counts) {
						return true
					}
					r2, c2 = r2+1, c2+1
				}

			}
		}
	}
	return false
}

func isZeroSquare(r1 int, c1 int, r2 int, c2 int, counts [][][]int) bool {
	squareSize := r2 - r1 + 1
	leftBorder := counts[r1][c1][0]
	topBorder := counts[r1][c1][1]
	rightBorder := counts[r1][c2][0]
	baseBorder := counts[r2][c1][1]

	if leftBorder < squareSize {
		return false
	}
	if rightBorder < squareSize {
		return false
	}
	if baseBorder < squareSize {
		return false
	}
	if topBorder < squareSize {
		return false
	}
	return true
}

func buildCountsMatrix(matrix [][]int) [][][]int {
	zeroCounts := make([][][]int, len(matrix))

	for i, row := range matrix {
		zeroCounts[i] = make([][]int, len(row))
	}

	for i, row := range zeroCounts {
		for j, _ := range row {
			zeroCounts[i][j] = make([]int, 2)
		}
	}

	for i := len(zeroCounts) - 1; i >= 0; i-- {
		for j := len(zeroCounts[i]) - 1; j >= 0; j-- {
			if matrix[i][j] == 1 {
				continue
			}
			prevHeight, prevWidth := 0, 0
			if i+1 < len(zeroCounts) {
				prevHeight = zeroCounts[i+1][j][0]
			}
			if j+1 < len(zeroCounts[i]) {
				prevWidth = zeroCounts[i][j+1][1]
			}

			zeroCounts[i][j] = []int{prevHeight + 1, prevWidth + 1}
		}
	}

	return zeroCounts
}
