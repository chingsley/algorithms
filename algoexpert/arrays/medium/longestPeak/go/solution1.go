package main

func longestPeak(arr []int) int {
	max, peakIdx := 0, 1
	for peakIdx < len(arr)-1 {
		if arr[peakIdx-1] >= arr[peakIdx] || arr[peakIdx+1] >= arr[peakIdx] { // Check whether the current element is a peak before searching left and right
			peakIdx += 1
			continue
		}
		i, j := peakIdx, peakIdx
		for i-1 >= 0 && arr[i-1] < arr[i] {
			i--
		}
		for j+1 < len(arr) && arr[j+1] < arr[j] {
			j++
		}
		if i != peakIdx && j != peakIdx {
			if j-i+1 > max {
				max = j - i + 1
			}
		}

		peakIdx = j + 1
	}

	return max
}
