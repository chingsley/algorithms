package main

import "strconv"

// O(n x m) time | O(n x m) space
// n = horizontal distance between the two knights
// m = vertical distance between the two knights
func KnightConnection(knightA []int, knightB []int) int {
	queue := [][]int{{knightA[0], knightA[1], 0}}
    visited := make(map[string]bool, 0)
    var currMove []int
    for len(queue) > 0 {
        currMove, queue = queue[0], queue[1:]
        x, y, dist := currMove[0], currMove[1], currMove[2]
        key := strconv.Itoa(x) + "," + strconv.Itoa(y)
        if _, exists := visited[key]; exists {
            continue
        }
        visited[key] = true

        if x == knightB[0] && y == knightB[1] {
            return (dist + 1) / 2 // return Ceil(dist / 2)
        }

        queue = append(queue, []int{x + 2, y + 1, dist + 1})
        queue = append(queue, []int{x + 2, y - 1, dist + 1})
        queue = append(queue, []int{x - 2, y + 1, dist + 1})
        queue = append(queue, []int{x - 2, y - 1, dist + 1})
        queue = append(queue, []int{x + 1, y + 2, dist + 1})
        queue = append(queue, []int{x - 1, y + 2, dist + 1})
        queue = append(queue, []int{x + 1, y - 2, dist + 1})
        queue = append(queue, []int{x - 1, y - 2, dist + 1})
    }
    
	return -1
}
