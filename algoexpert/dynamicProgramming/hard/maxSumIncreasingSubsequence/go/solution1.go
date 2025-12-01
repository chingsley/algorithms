package main

// O(n^2) time | O(n) space (n = length of the input array)
func MaxSumIncreasingSubsequence(array []int) (int, []int) {
	sums := make([][]int, len(array))
	maxSumIdx := 0
	for i, _ := range sums {
		sums[i] = append(sums[i], array[i])
		sums[i] = append(sums[i], -1)

		for j := i - 1; j >= 0; j-- {
			if array[j] < array[i] && array[i]+sums[j][0] > sums[i][0] {
				sums[i][0] = array[i] + sums[j][0]
				sums[i][1] = j
			}
		}

		if sums[i][0] > sums[maxSumIdx][0] {
			maxSumIdx = i
		}
	}

	// build sequence from selected indices
	seq := []int{}
	i := maxSumIdx
	for i >= 0 {
		seq = append(seq, array[i])
		i = sums[i][1]
	}

	// note append([]int{}, seq...) makes a deep copy of seq, so that the orignal sequence of values in seq is not changed
	// not necessary for this challenge, but good to learn
	return sums[maxSumIdx][0], reverse(append([]int{}, seq...))
}

func reverse(arr []int) []int {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}

	return arr
}
