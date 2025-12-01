package main

import (
	"fmt"
)

func MinCoinsForChange(n int, denoms []int) []int {
	arr := make([]interface{}, n+1)
	arr[0] = []int{} // or use: make([]int, 0)
	for amt, _ := range arr {
		if amt == 0 {
			continue
		}
		for _, coin := range denoms {
			if coin > amt {
				continue
			}
			rem := amt - coin
			if arr[rem] == nil {
				continue
			}

			if arr[amt] == nil || len(arr[rem].([]int))+1 < len(arr[amt].([]int)) {
				arr[amt] = append(arr[rem].([]int), coin)
			}
		}

	}

	if arr[n] == nil {
		return []int{}
	}
	return arr[n].([]int)
}

func main() {
	fmt.Println(MinCoinsForChange(8, []int{2, 3, 5}))   // [5, 3]
	fmt.Println(MinCoinsForChange(7, []int{1, 5, 10}))  // [5, 1, 1]
	fmt.Println(MinCoinsForChange(7, []int{2, 4}))      // []
	fmt.Println(MinCoinsForChange(10000, []int{7, 14})) // []
}
