/*
*** Work in progress. Fails some test cases
 */

package main

import "fmt"

// O(nm*min(n, m)) time | O(nm*min(n, m)) space
func LongestCommonSubsequence(s1 string, s2 string) []byte {
	matrix := make([][][]byte, len(s1)+1)
	for i, _ := range matrix {
		matrix[i] = make([][]byte, len(s2)+1)
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[i]); j++ {
			if s1[i-1] == s2[j-1] {
				matrix[i][j] = matrix[i-1][j-1]
				matrix[i][j] = append(matrix[i][j], s1[i-1])
			} else {
				top, left := matrix[i-1][j], matrix[i][j-1]
				if len(top) > len(left) {
					matrix[i][j] = top
				} else {
					matrix[i][j] = left
				}
			}
		}
		// fmt.Println(matrix)
	}
	fmt.Println(matrix)
	return matrix[len(s1)][len(s2)]
}
