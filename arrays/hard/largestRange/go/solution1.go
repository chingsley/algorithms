package main

// O(n) time | O(n) space
func LargestRange(array []int) []int {
	dict := make(map[int]bool, 0)
    maxRange, maxLen := []int{}, 0
    for _, num := range array {
        dict[num] = false
    }
    for _, num := range array {
        if dict[num] == true {
            continue
        }
        currRange, currLen := getRange(num, dict)
        if currLen > maxLen {
            maxRange, maxLen = currRange, currLen
        }
    }
    
	return maxRange
}

func getRange(num int, dict map[int]bool) ([]int, int) {
    i, j := num, num
    done := false
    for !done {
        if _, exists := dict[i]; exists {
            dict[i] = true
            i--
        } else {
            done = true
        }
    }

    done = false
    for !done {
        if _, exists := dict[j]; exists {
            dict[j] = true
            j++
        } else {
            done = true
        }
    }

    return []int{i + 1, j - 1}, j - i - 1
}
