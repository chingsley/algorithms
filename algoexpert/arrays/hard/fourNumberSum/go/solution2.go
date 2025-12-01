package main

// Averag;: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
func FourNumberSum2(array []int, target int) [][]int {
	dict := make(map[int][][]int)
	quad := make([][]int, 0)
	for i := 0; i < len(array)-1; i++ {
		num1 := array[i]
		for j := i + 1; j < len(array); j++ {
			num2 := array[j]
			diff := target - (num1 + num2)
			if pairs, exists := dict[diff]; exists {
				for _, pair := range pairs {
					newQuad := append(pair, num1, num2) // also works
					quad = append(quad, newQuad)
				}
			}
		}

		for k := 0; k < i; k++ {
			num0 := array[k]
			sum := num0 + num1
			if _, exists := dict[sum]; !exists {
				dict[sum] = [][]int{}
			}
			dict[sum] = append(dict[sum], []int{num0, num1})
		}

	}

	return quad
}
