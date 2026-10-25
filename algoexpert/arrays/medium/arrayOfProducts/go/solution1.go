package main

// O(n) time | O(n) space
func arrayOfProducts(nums []int) []int {
	right := make([]int, len(nums))
	for i := range right {
		right[i] = 1
	}

	for j := len(nums) - 2; j >= 0; j-- {
		right[j] = right[j+1] * nums[j+1]
	}

	product := 1
	result := []int{right[0]}
	for i := 1; i < len(nums); i++ {
		product *= nums[i-1]
		result = append(result, product*right[i])
	}

	return result
}
