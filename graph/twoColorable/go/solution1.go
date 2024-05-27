package main

// O(v + e) time | O(v) spave
// v = no. of vertices (no. of nodes), e = no. of edges
func TwoColorable(edges [][]int) bool {
	colors := map[int]bool{0: true}
	stack := []int{0}

	var vi int
	for len(stack) > 0 {
		vi, stack = stack[len(stack)-1], stack[:len(stack)-1]
		for _, v := range edges[vi] {
			if _, exists := colors[v]; exists {
				if colors[v] == colors[vi] {
					return false
				}
			} else {
				colors[v] = !colors[vi]
				stack = append(stack, v)
			}
		}
	}

	return true
}
