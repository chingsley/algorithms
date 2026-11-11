package main

import (
	"sort"
)

func mergeOverlappingIntervals(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	merged := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		start1, end1 := merged[len(merged)-1][0], merged[len(merged)-1][1]
		start2, end2 := intervals[i][0], intervals[i][1]
		if end1 >= start2 {
			maxEnd := end1
			if end2 > end1 {
				maxEnd = end2
			}
			merged[len(merged)-1] = []int{start1, maxEnd}
		} else {
			merged = append(merged, intervals[i])
		}
	}

	return merged
}
