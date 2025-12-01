package main

import (
	"strconv"
)

// O(m+n) time | O(m + n)space
func NumberOfWaysToTraverseGraph(width int, height int) int {
	memo := make(map[string]int)
	return ways(width, height, memo)
}

func ways(w int, h int, memo map[string]int) int {
	if w == 1 || h == 1 {
		return 1
	}

	key := strconv.Itoa(w) + strconv.Itoa(h) // how to convert integer to string
	if val, exists := memo[key]; exists {
		return val
	}

	memo[key] = ways(w-1, h, memo) + ways(w, h-1, memo)
	return memo[key]
}
