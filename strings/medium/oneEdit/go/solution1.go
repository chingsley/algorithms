package main

import (
	"math"
)

// O(n) time | O(1) space (n = length of shorter string)
func OneEdit(stringOne string, stringTwo string) bool {
	if math.Abs(float64(len(stringOne))-float64(len(stringTwo))) > 1 {
		return false
	}

	i, j := 0, 0
	editUsed := false
	for i < len(stringOne) && j < len(stringTwo) {
		if stringOne[i] == stringTwo[j] {
			i, j = i+1, j+1
		} else {
			if editUsed {
				return false
			}

			editUsed = true
			if len(stringOne) > len(stringTwo) {
				i += 1
			} else if len(stringTwo) > len(stringOne) {
				j += 1
			} else {
				i, j = i+1, j+1
			}
		}
	}

	return true
}
