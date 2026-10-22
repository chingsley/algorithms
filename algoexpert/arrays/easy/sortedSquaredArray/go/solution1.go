package main

import "math"

func sortedSquares(nums []int) []int {
	result := make([]int, len(nums))
	i, j := 0, len(nums)-1
	for k := len(nums) - 1; k >= 0; k-- {
		if math.Abs(float64(nums[i])) > math.Abs(float64(nums[j])) {
			result[k] = nums[i] * nums[i]
			i++
		} else {
			result[k] = nums[j] * nums[j]
			j--
		}
	}

	return result
}
