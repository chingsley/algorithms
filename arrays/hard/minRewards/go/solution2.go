package main

// O(n) time | O(n) space
func MinRewards(scores []int) int {
	minRewards := make([]int, len(scores))
    minRewards[0] = 1
    for i := 1; i < len(scores); i++ {
        minRewards[i] = 1
        if scores[i] < scores[i - 1] {
            continue
        }
        minRewards[i] = max(minRewards[i], minRewards[i - 1] + 1)
    }
    for i := len(scores) - 2; i >= 0; i-- {
        if scores[i] < scores[i + 1] {
            continue
        }
        minRewards[i] = max(minRewards[i], minRewards[i + 1] + 1)
    }
    
    sum := 0
    for _, num := range minRewards {
        sum += num
    }
	return sum
}

func max(num1, num2 int) int {
    if num1 > num2 {
        return num1
    }
    return num2
}
