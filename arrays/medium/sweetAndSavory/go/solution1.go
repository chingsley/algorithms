package main

import "sort"

// O(nlog(n)) time | O(n) space
func SweetAndSavory(dishes []int, target int) []int {
	sweet, savory := make([]int, 0), make([]int, 0)
	for _, dish := range dishes {
		if dish < 0 {
			sweet = append(sweet, dish)
		} else {
			savory = append(savory, dish)
		}
	}

	sort.Slice(sweet, func(i, j int) bool {
		return sweet[i] > sweet[j]
	})
	sort.Slice(savory, func(i, j int) bool {
		return savory[i] < savory[j]
	})

	bestDiff := int(^uint(0) >> 1) // Initialize with maximum integer value
	bestPair := []int{0, 0}
	swIdx, svIdx := 0, 0
	for swIdx < len(sweet) && svIdx < len(savory) {
		sw, sv := sweet[swIdx], savory[svIdx]
		currSum := sw + sv
		if currSum <= target {
			currDiff := target - currSum
			if currDiff < bestDiff {
				bestDiff = currDiff
				bestPair = []int{sw, sv}
			}
			svIdx += 1
		} else {
			swIdx += 1
		}
	}

	return bestPair
}
