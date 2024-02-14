package main

import (
	"unicode/utf8"
)

func MultiStringSearch(bigString string, smallStrings []string) []bool {
	trie := NewTrie()
	trie.Populate(bigString)

	result := make([]bool, len(smallStrings))
	for i, str := range smallStrings {
		result[i] = trie.Contains(str)
	}
	return result
}

type TrieNode map[rune]TrieNode

type Trie struct {
	Root TrieNode
}

func NewTrie() *Trie {
	return &Trie{Root: TrieNode{}}
}

func (t *Trie) Add(currIdx int, str string) {
	currNode := t.Root
	for i := currIdx; i < len(str); i++ {
		ch, _ := utf8.DecodeRune([]byte{str[i]})
		if _, exists := currNode[ch]; !exists {
			currNode[ch] = TrieNode{}
		}
		currNode = currNode[ch]
	}
}

func (t *Trie) Populate(str string) {
	for i, _ := range str {
		t.Add(i, str)
	}
}

func (t *Trie) Contains(str string) bool {
	currNode := t.Root
	for _, ch := range str {
		if _, exists := currNode[ch]; !exists {
			return false
		}
		currNode = currNode[ch]
	}

	return true
}
