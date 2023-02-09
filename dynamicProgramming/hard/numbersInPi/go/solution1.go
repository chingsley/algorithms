package main


/** (with memoization:
/* O(n^2 * p) time | O(p * n) space 
/*
/* Without memoization:
/* O(n^p) time | O(p) space (space cost is due to recursion only)
/*
/* where p = length of the pi string, n = lenght of numbers array
*/
func NumbersInPi(pi string, numbers []string) int {
    memo := make(map[string][]string)
    if shortestBreaks := getShortestBreaks(pi, numbers, memo); shortestBreaks != nil {
        return len(shortestBreaks) - 1;
    }

	return -1
}

func getShortestBreaks(pi string, numbers []string, memo map[string][]string) []string {
    if len(pi) == 0 {
        return []string{}
    }
    if _, exists := memo[pi]; exists {
        return memo[pi]
    }
    
    shortestBreaks := []string{}
    for _, val := range numbers {
        if len(val) > len(pi) { continue }
        if pi[0:len(val)] == val {
            shortestWithoutVal := getShortestBreaks(pi[len(val):], numbers, memo)
            if shortestWithoutVal == nil {
                continue
            }
            shortestWithVal := append(shortestWithoutVal, val)
            if len(shortestBreaks) == 0 || len(shortestWithVal) < len(shortestBreaks) {
                shortestBreaks = shortestWithVal
            }
        }
    }

    if len(shortestBreaks) > 0 {
        memo[pi] = shortestBreaks
    } else {
        
        memo[pi] = nil
    }
    
    return memo[pi]
}
