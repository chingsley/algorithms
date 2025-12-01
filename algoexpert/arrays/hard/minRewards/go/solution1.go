package main
import (
    "math"
)

// O(n) time | O(n) space
func MinRewards(scores []int) int {
	minRewards := make([]int, len(scores))
    var localMinIdxs []int
    for i, _ := range scores {
        curr, left, right := scores[i], math.MaxInt32, math.MaxInt32
        if i > 0 {
            left = scores[i - 1]
        }
        if i < len(scores) - 1 {
            right = scores[i + 1]
        }
        if curr < left && curr < right {
            localMinIdxs = append(localMinIdxs, i)
        }
    }

    for _, idx := range localMinIdxs {
        minRewards[idx] = 1
        for i := idx - 1; i >= 0; i-- {
            if scores[i] < scores[i + 1] {
                break
            }
            minRewards[i] = max(minRewards[i], minRewards[i + 1] + 1)
        }
        for i := idx + 1; i < len(scores); i++ {
            if scores[i] < scores[i - 1] {
                break
            }
            minRewards[i] = max(minRewards[i], minRewards[i - 1] + 1);
        }
    }
    
    var sum int
    for _, v := range minRewards {
        sum += v
    }
    
	return sum
}

func max(num1, num2 int) int {
    if num1 > num2 {
        return num1
    }
    return num2
}
