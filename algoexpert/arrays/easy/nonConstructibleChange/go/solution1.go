package main

import "sort"

// O(n log n) time | O(1) space
func NonConstructibleChange(coins []int) int {
	sort.Ints(coins)
	makeableThrough := 0
	for _, coin := range coins {
		if coin > makeableThrough+1 {
			return makeableThrough + 1
		}
		makeableThrough += coin
	}
	return makeableThrough + 1
}
