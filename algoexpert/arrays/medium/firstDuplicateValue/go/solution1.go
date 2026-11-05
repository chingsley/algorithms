package main

import "math"

// O(n) time | O(1) space
func firstDuplicateValue(array []int) int {
	for i := 0; i < len(array); i++ {
		absNum := int(math.Abs(float64(array[i])))
		idx := absNum - 1
		if array[idx] < 0 {
			return absNum
		}
		array[idx] *= -1
	}

	return -1
}
