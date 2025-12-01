package main

import (
	"math"
)

// O(n) time | O(n) space (n = length of array)
func MinNumberOfJumps(array []int) int {
	memo := make(map[int]int)
	return minJumpsFrom(0, array, memo)
}

func minJumpsFrom(i int, array []int, memo map[int]int) int {
	if i == len(array)-1 {
		return 0
	}
	if _, exists := memo[i]; exists {
		return memo[i]
	}

	minJumps := math.MaxInt32
	for j := 1; j <= array[i]; j++ {
		if i+j >= len(array) {
			continue
		}
		minJumpsFromJ := minJumpsFrom(i+j, array, memo)
		if minJumpsFromJ < minJumps {
			minJumps = minJumpsFromJ
		}
	}

	memo[i] = minJumps + 1
	return memo[i]

}
