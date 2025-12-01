package main

import (
	"math"
)

// O(n) time | O(n) space (n = length of array)
func MaximizeExpression(array []int) int {
	if len(array) < 4 {
		return 0
	}
	// fmt.Println(int(math.Inf(-1)))
	first := make([]int, len(array))
	second := make([]int, len(array))
	third := make([]int, len(array))
	fourth := make([]int, len(array))

	for i, _ := range array {
		first[i] = int(math.Inf(-1))
		second[i] = int(math.Inf(-1))
		third[i] = int(math.Inf(-1))
		fourth[i] = int(math.Inf(-1))
	}

	first[0] = array[0]
	for i := 1; i < len(first); i++ {
		first[i] = Max(first[i-1], array[i])
	}
	for i := 1; i < len(second); i++ {
		second[i] = Max(second[i-1], first[i-1]-array[i])
	}
	for i := 2; i < len(third); i++ {
		third[i] = Max(third[i-1], second[i-1]+array[i])
	}
	for i := 3; i < len(fourth); i++ {
		fourth[i] = Max(fourth[i-1], third[i-1]-array[i])
	}

	// fmt.Println(first, second, third, fourth)
	return fourth[len(fourth)-1]
}

func Max(i, j int) int {
	if i > j {
		return i
	}

	return j
}
