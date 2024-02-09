package main

import (
	"encoding/json"
	"fmt"
	"math"

	// "unicode/utf8"
	"log"
)

// O(m * n) time | O(m * n) space
// m = length of the string array
// n = length of the longest string in the string array
func LongestMostFrequentPrefix(strings []string) string {
	trie := NewTrie()
	trie.Populate(strings)
	// trie.Print()

	longestStr := ""
	longestPrfx := ""
	currMax := -math.MaxInt32
	for _, str := range strings {
		if len(str) > len(longestStr) {
			longestStr = str
		}

		idx, maxFreq := trie.getMaxFrequencyIndex(str)
		if idx == 0 || maxFreq < currMax {
			continue
		}

		prefx := str[0:idx]
		if maxFreq == currMax && len(prefx) <= len(longestPrfx) {
			continue
		}

		longestPrfx = prefx
		currMax = maxFreq
	}

	if len(longestPrfx) == 0 {
		longestPrfx = longestStr
	}

	return longestPrfx
}

type TrieNode struct {
	Children  map[rune]*TrieNode
	UsedCount int
}

type Trie struct {
	Root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{Root: &TrieNode{Children: make(map[rune]*TrieNode), UsedCount: 0}}
}

func (t *Trie) Insert(str string) {
	currNode := t.Root
	for _, ch := range str {
		if _, exists := currNode.Children[ch]; exists {
			currNode.Children[ch].UsedCount += 1
		} else {
			currNode.Children[ch] = &TrieNode{Children: make(map[rune]*TrieNode), UsedCount: 1}
		}
		currNode = currNode.Children[ch]
	}
}

func (t *Trie) Populate(strings []string) {
	for _, str := range strings {
		t.Insert(str)
	}
}

func (t *Trie) getMaxFrequencyIndex(str string) (int, int) {
	currNode := t.Root
	for i, ch := range str {
		// ch, _ := utf8.DecodeRune([]byte{str[i]})
		// fmt.Println(ch, currNode.Children[ch])
		if currNode.Children[ch].UsedCount < currNode.UsedCount {
			return i, currNode.UsedCount
		}
		currNode = currNode.Children[ch]
	}

	return 0, 0
}

func (t *Trie) Print() {
	data, err := json.Marshal(t.Root)
	if err != nil {
		log.Fatal(err)
	}

	jsonString := string(data)
	fmt.Println(jsonString)
}
