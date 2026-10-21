package main

// O(n) time | O(1) space — n = length of array
func IsValidSubsequence(array []int, sequence []int) bool {
	i := 0
	for _, num := range sequence {
		found := false
		for i < len(array) && !found {
			if array[i] == num {
				found = true
			}
			i++
		}
		if !found {
			return false
		}
	}
	return true
}
