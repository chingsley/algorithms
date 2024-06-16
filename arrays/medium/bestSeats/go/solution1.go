package main

// O(n) time | O(1) space
func BestSeat(seats []int) int {
	start, end := 0, -1
	i := 0
	for i < len(seats) {
		if seats[i] != 0 {
			i += 1
		} else {
			j := i
			for j < len(seats) && seats[j] == 0 {
				if (j - i) > (end - start) {
					start, end = i, j
				}
				j += 1
			}
			i = j + 1
		}
	}

	if end == -1 {
		return -1
	}
	return (start + end) / 2
}
