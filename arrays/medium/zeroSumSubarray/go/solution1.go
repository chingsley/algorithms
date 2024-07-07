package main

// O(n) time | O(n) space
func ZeroSumSubarray(nums []int) bool {
	sums := map[int]bool{0: true}
	currSum := 0
	for _, num := range nums {
		currSum += num
		if _, exists := sums[currSum]; exists {
			return true
		}
		sums[currSum] = true
	}

	return false
}
