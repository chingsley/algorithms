package main

func isMonotonic(nums []int) bool {
	decreasing, increasing := false, false
	for i := 0; i < len(nums)-1; i++ {
		if nums[i+1] > nums[i] {
			increasing = true
		} else if nums[i+1] < nums[i] {
			decreasing = true
		}
		if increasing && decreasing {
			return false // return early once failure detected
		}
	}

	return true // no failure detected
}
