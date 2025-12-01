package main

import "fmt"

type Res = struct {
	minCoins  []int
	hasChange bool
}
type Memo map[int]Res

func MinCoinsForChange(n int, denoms []int) []int {
	memo := Memo{}
	minCoins, _ := getMinCoins(n, denoms, memo)
	return minCoins
}

func getMinCoins(n int, denoms []int, memo Memo) ([]int, bool) {
	if n == 0 {
		return make([]int, 0), true
	}

	if res, exists := memo[n]; exists {
		return res.minCoins, res.hasChange
	}

	minCoins := make([]int, 0)
	changeFound := false

	for _, coin := range denoms {
		if coin > n {
			continue
		}
		rem := n - coin
		minCoinsRem, remChangeFound := getMinCoins(rem, denoms, memo)
		if remChangeFound == false {
			continue
		}
		if changeFound == false || len(minCoinsRem)+1 < len(minCoins) {
			minCoins = append(minCoinsRem, coin)
			changeFound = true
		}
	}

	memo[n] = Res{
		minCoins:  minCoins,
		hasChange: changeFound,
	}
	return minCoins, changeFound
}

func main() {
	fmt.Println(MinCoinsForChange(8, []int{2, 3, 5}))   // [5, 3]
	fmt.Println(MinCoinsForChange(7, []int{1, 5, 10}))  // [5, 1, 1]
	fmt.Println(MinCoinsForChange(7, []int{2, 4}))      // []
	fmt.Println(MinCoinsForChange(10000, []int{7, 14})) // []
}
