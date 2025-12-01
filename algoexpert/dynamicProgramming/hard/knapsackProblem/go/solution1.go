package main

import (
	"fmt"
	"math"
)

// O(mn) time | O(mn) space (m = len(items), n = capacity)
func KnapsackProblem(items [][]int, capacity int) []interface{} {
	matrix := make([][]int, len(items)+1)
	for i, _ := range matrix {
		matrix[i] = make([]int, capacity+1)
	}

	for irow := 1; irow < len(matrix); irow++ {
		val, weight := items[irow-1][0], items[irow-1][1]
		for icol := 0; icol < len(matrix[irow]); icol++ {
			if icol < weight {
				matrix[irow][icol] = matrix[irow-1][icol]
			} else {
				currVal := float64(matrix[irow-1][icol])
				newVal := float64(val + matrix[irow-1][icol-weight])
				matrix[irow][icol] = int(math.Max(currVal, newVal))
			}
		}
	}
	fmt.Println(matrix)

	indices := []int{}
	row, col := len(items), capacity
	for row > 0 && matrix[row][col] > 0 {
		if matrix[row][col] > matrix[row-1][col] {
			itemIdx := row - 1
			indices = append(indices, itemIdx)

			col = col - items[itemIdx][1]
			row = row - 1
		} else {
			row = row - 1
		}
	}

	fmt.Println(reverse(indices))

	// returning array of interface
	return []interface{}{
		matrix[len(items)][capacity], // total value
		indices,                      // item indices
	}
}

func reverse(arr []int) []int {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
	return arr
}
