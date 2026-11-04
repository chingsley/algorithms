package main

func maxDistToClosest(seats []int) int {
	maxDist := -1
	i := 0
	for i < len(seats) {
		if seats[i] == 1 {
			i++
			continue
		}

		j := i
		currZerosCount := 0
		for j < len(seats) && seats[j] == 0 {
			currZerosCount++
			j++
		}

		currMaxDist := (currZerosCount + 1) / 2 // performs math.ceil division
		if i == 0 || j == len(seats) {
			currMaxDist = currZerosCount
		}

		if currMaxDist > maxDist {
			maxDist = currMaxDist
		}

		i = j
	}

	return maxDist
}
