package practice

import (
	"math"
)

// O(n) time | O(n) space
func MinNumberOfJumps(array []int) int {
	memo := make(map[int]int)
	return minJumpFromIdx(0, array, memo)
}

func minJumpFromIdx(idx int, array []int, memo map[int]int) int {
	if idx == len(array)-1 {
		return 0
	}
	if _, exists := memo[idx]; exists == true {
		return memo[idx]
	}

	minJumps := math.MaxInt32
	for i := 1; i <= array[idx] && i+idx < len(array); i++ {
		currMinJumps := minJumpFromIdx(i+idx, array, memo)
		if currMinJumps < minJumps {
			minJumps = currMinJumps
		}
	}

	memo[idx] = minJumps + 1
	return memo[idx]
}
