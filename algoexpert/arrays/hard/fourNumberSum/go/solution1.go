package main

// Averag;: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
func FourNumberSum(array []int, target int) [][]int {
	dict := make(map[int][][]int)
	quad := make([][]int, 0)
	for i, num1 := range array {
		for _, num2 := range array[i+1:] {
			diff := target - (num1 + num2)
			if pairs, exists := dict[diff]; exists {
				for _, pair := range pairs {
					// newQuad := append(pair, []int{num1, num2}...)
					newQuad := append(pair, num1, num2) // also works
					quad = append(quad, newQuad)
				}
			}
		}

		for _, num0 := range array[:i] {
			sum := num0 + num1
			if _, exists := dict[sum]; !exists {
				dict[sum] = [][]int{}
			}
			dict[sum] = append(dict[sum], []int{num0, num1})
		}

	}

	return quad
}
