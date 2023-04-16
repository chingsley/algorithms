package main

import (
	"math"
)

type Res struct {
	set []int
	sum int
}

type Memo map[int]Res

/*
	work in progress:
	[10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]
	it fails this test case but passes other ones. May have something to do with memory referencs
*/
func MaxSumIncreasingSubsequence(array []int) (int, []int) {
	memo := make(Memo)
	maxSum := math.MaxInt32 * -1
	maxSet := []int{}
	for i := 0; i < len(array); i++ {
		res := getMaxSumSeqAtIdx(i, array, memo)
		if res.sum > maxSum {
			maxSum, maxSet = res.sum, res.set
		}
	}
	return maxSum, reverseArr(append([]int{}, maxSet...))
}

func getMaxSumSeqAtIdx(i int, array []int, memo Memo) Res {
	if val, exists := memo[i]; exists {
		return Res{sum: val.sum, set: val.set}
	}
	leastIntVal := math.MaxInt32 * -1
	maxSum := leastIntVal
	maxSet := []int{}
	for j := i + 1; j < len(array); j++ {
		if array[j] > array[i] {
			res := getMaxSumSeqAtIdx(j, array, memo)
			if res.sum > maxSum {
				maxSum, maxSet = res.sum, res.set
			}
		}
	}

	if maxSum == leastIntVal {
		maxSum = 0
	}
	set := append(maxSet, array[i])
	sum := maxSum + array[i]
	memo[i] = Res{set: set, sum: sum}
	return memo[i]
}

func reverseArr(arr []int) []int {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}

	return arr
}
