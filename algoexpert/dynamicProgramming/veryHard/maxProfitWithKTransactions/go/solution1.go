package main
import (
    "math"
)

// O(nk) time | O(k) space
func MaxProfitWithKTransactions(prices []int, k int) int {
	profits := make([]float64, 2 * k)

    for i, _ := range profits {
        if i % 2 == 0 {
            profits[i] = math.Inf(-1)
        }
    }

    for _, price := range prices {
        for j, _ := range profits {
            if j == 0 {
                profits[j] = math.Max(profits[j], float64(-price))
            } else if j % 2 == 0 {
                profits[j] = math.Max(profits[j], profits[j - 1] - float64(price))
            } else {
                profits[j] = math.Max(profits[j], profits[j - 1] + float64(price))
            }
        }
    }
	return int(profits[len(profits) - 1])
}
