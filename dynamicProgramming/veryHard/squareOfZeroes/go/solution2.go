package main

// import "fmt"

// O(n^3) time | O(n^2) space (n = length of the n x n matrix)
func SquareOfZeroes(matrix [][]int) bool {
	counts := buildCountsMatrix(matrix)
	// fmt.Println(counts)
	for i, _ := range matrix {
		for j, _ := range matrix[i] {
			if matrix[i][j] == 0 {
				r2 := i + 1
				c2 := j + 1
				for r2 < len(matrix) && c2 < len(matrix[0]) {
					if isZeroSquare(i, j, r2, c2, counts) {
						return true
					}
					r2 = r2 + 1
					c2 = c2 + 1
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
	// fmt.Println(zeroCounts)
	for row, rowArr := range matrix {
		zeroCounts[row] = make([][]int, len(rowArr))
	}
	// fmt.Println(zeroCounts)
	for row, rowArr := range zeroCounts {
		for col, _ := range rowArr {
			zeroCounts[row][col] = make([]int, 2)
		}
	}

	for row := len(zeroCounts) - 1; row >= 0; row-- {
		for col := len(zeroCounts[row]) - 1; col >= 0; col-- {
			if matrix[row][col] == 0 {
				prevHeight := 0
				prevWidth := 0
				if row+1 < len(zeroCounts) {
					prevHeight = zeroCounts[row+1][col][0]
				}
				if col+1 < len(zeroCounts[row]) {
					prevWidth = zeroCounts[row][col+1][1]
				}

				zeroCounts[row][col] = []int{prevHeight + 1, prevWidth + 1}
			}
		}
	}

	return zeroCounts
}

// [
//   [[0 0] [0 0] [0 0] [0 0]],
//   [[0 0] [0 0] [0 0] [0 0]],
//   [[0 0] [0 0] [0 0] [0 0]],
//   [[0 0] [0 0] [0 0] [0 0]]
// ]

// [
//     [[] [] [] []],
//     [[] [] [] []],
//     [[] [] [] []],
//     [[] [] [] []]
// ]

// return leftBorder >= squareSize &&
//         rightBorder >= squareSize &&
//         baseBorder >= squareSize &&
//         topBorder >= squareSize &&
