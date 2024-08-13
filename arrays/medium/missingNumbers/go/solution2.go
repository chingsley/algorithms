package main

// O(n) time | O(1) space
func MissingNumbers(nums []int) []int {
	sumToN, sumNums := 0, 0
	for i := 1; i <= len(nums)+2; i++ {
		sumToN += i
	}
	for _, num := range nums {
		sumNums += num
	}

	diff := sumToN - sumNums
	avg := int(diff / 2)

	sumLeftHalf, sumRightHalf := 0, 0
	for _, num := range nums {
		if num <= avg {
			sumLeftHalf += num
		} else {
			sumRightHalf += num
		}
	}
	actualSumLeftHalf, actualSumRightHalf := 0, 0
	for i := 1; i <= len(nums)+2; i++ {
		if i <= avg {
			actualSumLeftHalf += i
		} else {
			actualSumRightHalf += i
		}
	}

	return []int{actualSumLeftHalf - sumLeftHalf, actualSumRightHalf - sumRightHalf}
}
