package main

// WITH MEMOIZATION
// O(m) * O(n^2 * m) time = O(m^2 * n^2) time
// O(m + n^2) space (n from recursion, m^2 from memo)
// m = length of the strings array
// n = length of the longest word in the strings array
func LongestStringChain(strings []string) []string {
	memo := make(map[string][]string)
	longestChain := []string{}
	for i := 0; i < len(strings); i++ {
		wordChain := getLongestChainStartingWithWord(strings[i], strings, memo)
		if len(wordChain) > len(longestChain) {
			longestChain = wordChain
		}
	}

	if len(longestChain) < 2 {
		return []string{}
	}

	return reverse(longestChain)
}

func getLongestChainStartingWithWord(word string, strings []string, memo map[string][]string) []string {
	if _, exists := memo[word]; exists {
		return memo[word]
	}

	longestChn := []string{}
	for i, _ := range word {
		newWord := sliceAt(i, word)
		// fmt.Println(i, newWord, word)
		if found := wordInList(newWord, strings); !found {
			continue
		}
		wordChn := getLongestChainStartingWithWord(newWord, strings, memo)
		if len(wordChn) > len(longestChn) {
			longestChn = wordChn
		}
	}

	longestChn = append(longestChn, word)
	memo[word] = longestChn
	return longestChn
}

func sliceAt(i int, str string) string {
	return str[:i] + str[i+1:]
}

func wordInList(word string, list []string) bool {
	for i := range list {
		if list[i] == word {
			return true
		}
	}

	return false
}

// mutates the original array, find out how to reverse without mutating original array
func reverse(s []string) []string {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}

	return s
}
