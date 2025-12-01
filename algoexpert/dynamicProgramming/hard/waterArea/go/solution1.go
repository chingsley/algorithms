package main

// import "fmt"

// O(n) time | O(n) space (n = size of heights array)
func WaterArea(heights []int) int {
	maxLefts := make([]int, len(heights))
	maxRights := make([]int, len(heights))
	surfaceAreas := make([]int, len(heights))

	currMaxLeft, currMaxRight := 0, 0
	for i, j := 0, len(heights)-1; i < len(heights); i, j = i+1, j-1 {
		maxLefts[i] = currMaxLeft
		maxRights[j] = currMaxRight

		currMaxLeft = Max(currMaxLeft, heights[i])
		currMaxRight = Max(currMaxRight, heights[j])
	}

	// fmt.Println(maxLefts, maxRights)

	for i := 0; i < len(surfaceAreas); i++ {
		surfaceAreas[i] = Min(maxLefts[i], maxRights[i]) - heights[i]
		surfaceAreas[i] = Max(surfaceAreas[i], 0)
	}

	return Sum(surfaceAreas)
}

func Max(a int, b int) int {
	if a > b {
		return a
	}

	return b
}

func Min(a int, b int) int {
	if a < b {
		return a
	}

	return b
}

func Sum(arr []int) int {
	res := 0
	for _, val := range arr {
		res += val
	}

	return res
}
