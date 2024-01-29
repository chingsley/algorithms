package main

import (
	"unicode/utf8"
)

// O(n * m) time | O(n * m) space
// n = length of strings array, m = length of longest string in strings array
func ShortestUniquePrefixes(strings []string) []string {
	trie := NewTrie()
	trie.Populate(strings)

	result := []string{}
	for _, str := range strings {
		i := trie.getUniqueCharIndex(str)
		result = append(result, str[:i+1])
	}
	return result
}

type TrieNode struct {
	Children  map[rune]*TrieNode
	UsedCount int
}

func NewTrieNode() *TrieNode {
	return &TrieNode{Children: make(map[rune]*TrieNode), UsedCount: 1}
}

type Trie struct {
	Root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{Root: NewTrieNode()}
}

func (t *Trie) Insert(str string) {
	currNode := t.Root
	for _, ch := range str {
		if _, exists := currNode.Children[ch]; exists {
			currNode.Children[ch].UsedCount += 1
		} else {
			currNode.Children[ch] = NewTrieNode()
		}
		currNode = currNode.Children[ch]
	}
}

func (t *Trie) Populate(strArr []string) {
	for _, str := range strArr {
		t.Insert(str)
	}
}

func (t *Trie) getUniqueCharIndex(str string) int {
	currNode := t.Root
	i := 0
	for i < len(str) {
		ch, _ := utf8.DecodeRune([]byte{str[i]})
		if currNode.Children[ch].UsedCount == 1 {
			return i
		}
		currNode = currNode.Children[ch]
		i += 1
	}

	return i - 1
}
