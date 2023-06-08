package main

import (
	"fmt"
	"math"
)

// O(nm) time| O(n) space (n = input int, m = length of denoms)
func MinNumberOfCoinsForChange(n int, denoms []int) int {
	memo := map[int]int{}
	minCoinsCount := getNumOfminCoins(n, denoms, memo)

	if minCoinsCount < math.MaxInt32 {
		return minCoinsCount
	} else {
		return -1
	}
}

func getNumOfminCoins(n int, denoms []int, memo map[int]int) int {
	if n == 0 {
		return 0
	}
	if value, exists := memo[n]; exists {
		return value
	}

	minCoinsCount := math.MaxInt32
	for _, coin := range denoms {
		if coin > n {
			continue
		}
		minCoinsCountRem := getNumOfminCoins(n-coin, denoms, memo)
		if minCoinsCountRem == math.MaxInt32 {
			continue
		}
		if minCoinsCountRem+1 < minCoinsCount {
			minCoinsCount = minCoinsCountRem + 1
		}
	}

	memo[n] = minCoinsCount
	return memo[n]
}

func main() {
	fmt.Println(MinNumberOfCoinsForChange(8, []int{2, 3, 5}))   // 2, [5, 3]
	fmt.Println(MinNumberOfCoinsForChange(7, []int{1, 5, 10}))  // 3, [5, 1, 1]
	fmt.Println(MinNumberOfCoinsForChange(7, []int{2, 4}))      // -1, cannot make change
	fmt.Println(MinNumberOfCoinsForChange(10000, []int{7, 14})) // -1, cannot make change
}
