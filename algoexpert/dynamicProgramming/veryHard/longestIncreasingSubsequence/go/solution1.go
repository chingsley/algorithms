package main

// import "fmt"

// O(n^2) time | O(n^2) space
func LongestIncreasingSubsequence(input []int) []int {
	memo := make(map[int][]int)
	longest := []int{}
	for i := 0; i < len(input); i++ {
		iLongest := getLongestFromIdx(i, input, memo)
		if len(iLongest) > len(longest) {
			longest = iLongest
		}
	}

	return reverse(longest)
}

func getLongestFromIdx(i int, input []int, memo map[int][]int) []int {
	// _, exists := memo[i]
	// if exists {
	// 	return memo[i]
	// }
	if _, exists := memo[i]; exists {
		return memo[i]
	}
	// fmt.Println(memo)
	longest := []int{}

	for j := i + 1; j < len(input); j++ {
		if input[j] <= input[i] {
			continue
		}
		jLongest := getLongestFromIdx(j, input, memo)
		if len(jLongest) > len(longest) {
			longest = jLongest
		}
	}

	longest = append(longest, input[i])
	memo[i] = longest
	return longest
}

func reverse(s []int) []int {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}

	return s
}
