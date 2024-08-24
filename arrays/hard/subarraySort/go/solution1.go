package main

import (
    "math"
)

// O(n) time | O(1) space
func SubarraySort(array []int) []int {
	minUnsorted, maxUnsorted := math.MaxInt32, -math.MaxInt32
    for i, v := range array {
        prev := -math.MaxInt32
        if i > 0 {
            prev = array[i - 1]
        }
        next := math.MaxInt32
        if i < len(array) - 1 {
            next = array[i + 1]
        }

        if !(prev <= v && v <= next) {
            if v < minUnsorted {
                minUnsorted = v
            }
            if v > maxUnsorted {
                maxUnsorted = v
            }
        }
    }

    if minUnsorted == -math.MaxInt32 {
        return []int{-1, -1}
    }

    minIdx, maxIdx := -1, -1
    for i, v := range array {
        prev := -math.MaxInt32
        if i > 0 {
            prev = array[i - 1]
        }
        if minUnsorted >= prev && minUnsorted < v {
            minIdx = i
            break
        }
    }
    for i := len(array) - 1; i >= 0; i-- {
        v := array[i]
        next := math.MaxInt32
        if i < len(array) - 1 {
            next = array[i + 1]
        }
        if maxUnsorted <= next && maxUnsorted > v  {
            maxIdx = i
            break
        }
    }
    
	return []int{minIdx, maxIdx}
}
