package main

func missingTwo(nums []int) []int {
	totalSum := sumRange(1, len(nums)+2)
	numsSum := 0
	for _, num := range nums {
		numsSum += num
	}
	missingSum := totalSum - numsSum
	mid := int(missingSum / 2) // equivalent to math.Floor(missingSum/2) if missingSum/2 is decimal, it'll drop the decimal part

	totalLeftSum := sumRange(1, mid+1)
	totalRightSum := sumRange(mid+1, len(nums)+2)

	numsLeftSum, numsRightSum := 0, 0
	for _, num := range nums {
		if num <= mid {
			numsLeftSum += num
		} else {
			numsRightSum += num
		}
	}

	return []int{totalLeftSum - numsLeftSum,
		totalRightSum - numsRightSum}
}

func sumRange(start, end int) int {
	sum := 0
	for num := start; num <= end; num++ {
		sum += num
	}

	return sum
}
