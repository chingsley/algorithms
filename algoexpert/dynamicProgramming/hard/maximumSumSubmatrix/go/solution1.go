package main

import (
    "math"
    "fmt"
)

func MaximumSumSubmatrix(matrix [][]int, size int) int {
	sums := buildSumsMatrix(matrix)

    maxSum := int(math.Inf(-1))
    fmt.Println(sums, maxSum)
    for i, row := range sums {
        for j, _ := range row {
            top, left, diag := 0, 0, 0
            if i - size >= 0 {
                top = sums[i - size][j]
            }
            if j - size >= 0 {
                left = sums[i][j - size]
            }
            if i - size >= 0 && j - size >= 0 {
                diag = sums[i - size][j - size]
            }
            currSum := sums[i][j] - top - left + diag
            if currSum > maxSum {
                maxSum = currSum
            }
        }
    }
	
    return maxSum
}


func buildSumsMatrix(matrix [][]int) [][]int {
    sums := make([][]int, len(matrix))

    for i, _ := range sums {
        sums[i] = make([]int, len(matrix[0]))
    }

    for i, row := range sums {
        for j, _ := range row {
            top, left, diag := 0, 0, 0
            if i - 1 >= 0 {
                top = sums[i - 1][j]
            }
            if j - 1 >= 0 {
                left = sums[i][j - 1]
            }
            if i - 1 >= 0 && j - 1 >= 0 {
                diag = sums[i - 1][j - 1]
            }

            sums[i][j] = matrix[i][j] + top + left - diag
        }
    }

    return sums
}