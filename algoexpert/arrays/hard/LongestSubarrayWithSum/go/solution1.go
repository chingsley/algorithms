package main

// O(n) time | O(1) space
func LongestSubarrayWithSum(array []int, targetSum int) []int {
	i, j := 0, 0
    result := make([]int, 0)
    currSum, change := array[0], 0
    for j < len(array) {
        currSum += change
        if currSum == targetSum {
            if len(result) == 0 || (j - i) > (result[1] - result[0]) {
                result = []int{i, j}
            }
        }

        if currSum <= targetSum {
            j += 1
            if j < len(array) {
                change = array[j]
            }
        } else {
            change = -array[i]
            i += 1
        }

        if (i > j) {
            j = i
            if i < len(array) {
                currSum = array[i]
            }
            change = 0
        }
    }
    
	return result
}
