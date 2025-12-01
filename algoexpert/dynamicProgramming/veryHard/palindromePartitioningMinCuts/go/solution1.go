package main

// O(n^3) time | O(n^2) time
func PalindromePartitioningMinCuts(str string) int {
	matrix := make([][]bool, len(str))

    for i, _ := range matrix {
        matrix[i] = make([]bool, len(str)) // will set default values to false, b/c []bool
    }

    for i, row := range matrix {
        for j, _ := range row {
            if isPalindrome(i, j, str) {
                matrix[i][j] = true
            }
        }
    }

    cuts := make([]int, len(str)) // will set default values to 0, b/c []int
    for i := 1; i < len(cuts); i++ {
        if matrix[0][i] == true {
            continue
        }

        cuts[i] = cuts[i - 1] + 1;

        col := i
        for row := 1; row < len(matrix); row++ {
            if matrix[row][col] == true {
                cuts[i] = cuts[row - 1] + 1
                break
            }
        }
    }

	return cuts[len(str) - 1]
}


func isPalindrome(startIdx int, endIdx int, str string) bool {
    if startIdx > endIdx {
        return false
    }
    
    for i, j := startIdx, endIdx; i <= j; i, j = i + 1, j - 1 {
        if str[i] != str[j] {
            return false
        }
    }

    return true
}

/*
	E.g:

	str:
	"noonabbad"

	matrix
	[
		[true false false true false false false false false],
		[false true true false false false false false false],
		[false false true false false false false false false],
		[false false false true false false false false false],
		[false false false false true false false true false],
		[false false false false false true true false false],
		[false false false false false false true false false],
		[false false false false false false false true false],
		[false false false false false false false false true]
	]

	cuts:
	[0 1 1 0 1 2 2 1 2]
 */

