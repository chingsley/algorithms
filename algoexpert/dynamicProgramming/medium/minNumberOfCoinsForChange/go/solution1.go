package main

import (
	"fmt"
	"math"
)

// O(nm) time| O(n) space (n = input int, m = length of denoms)
func MinNumberOfCoinsForChange(n int, denoms []int) int {
	arr := make([]int, n+1)
	for i, _ := range arr {
		arr[i] = math.MaxInt32
		fmt.Println(arr[i])
	}

	arr[0] = 0
	for i, _ := range arr {
		for _, coin := range denoms {
			if coin > i {
				continue
			}
			arr[i] = Min(arr[i], 1+arr[i-coin])
		}
	}
	if arr[len(arr)-1] < math.MaxInt32 {
		return arr[len(arr)-1]
	} else {
		return -1
	}
}

func Min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}
