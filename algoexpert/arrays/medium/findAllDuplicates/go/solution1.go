package main

import "math"

func findDuplicates(nums []int) []int {
	dups := []int{}
	for i := 0; i < len(nums); i++ {
		absNum := int(math.Abs(float64(nums[i])))
		idx := absNum - 1
		if nums[idx] < 0 {
			dups = append(dups, absNum)
		}
		nums[idx] *= -1
	}

	return dups
}