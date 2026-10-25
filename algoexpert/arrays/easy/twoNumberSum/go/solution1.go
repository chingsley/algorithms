package main

import "strconv"

// returns the values of the two numbers that add up to the target
// O(n) time | O(n) space
func twoNumberSum(nums []int, target int) []int {
	cmplmnt := map[string]int{}
	for i := 0; i < len(nums); i++ {
		key := strconv.Itoa(nums[i])
		if _, ok := cmplmnt[key]; ok {
			return []int{cmplmnt[key], nums[i]}
		}
		cmplmnt[strconv.Itoa(target-nums[i])] = nums[i]
	}

	return []int{}
}

// returns the indices (not the values) of the two numbers that add up to the target
// O(n) time | O(n) space
func twoSum(nums []int, target int) []int {
	cmplmnt := map[string]int{}
	for i := 0; i < len(nums); i++ {
		key := strconv.Itoa(nums[i])
		if _, ok := cmplmnt[key]; ok {
			return []int{cmplmnt[key], i}
		}
		cmplmnt[strconv.Itoa(target-nums[i])] = i
	}

	return []int{}
}
