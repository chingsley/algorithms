//go:build practice

package practice

import "sort"

func getMaximumConsecutive(coins []int) int {
	sort.Ints(coins)
	currMaxChange := 0
	for _, coin := range coins {
		if coin > currMaxChange+1 {
			return currMaxChange + 1
		}
		currMaxChange += coin
	}

	return currMaxChange + 1
}
