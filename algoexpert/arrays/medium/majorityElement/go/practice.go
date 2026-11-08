package main

// O(n) time | O(1) space
func majorityElement(nums []int) int {
	majNum, count := nums[0], 0
	for _, num := range nums {
		// If vote count is 0, then there is no current king
		if count == 0 { // If there is no current king
			majNum = num // beome the king
		}

		if majNum == num { // then increment your vote by 1
			count++
		} else { // if someone else is king, decrement their vote by 1
			count--
		}
	}

	return majNum
}
