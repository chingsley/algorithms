package main

import (
	"unicode/utf8"
)

func StringsMadeUpOfStrings(strings []string, substrings []string) []string {
	trie := NewTrie()
	for _, str := range substrings {
		trie.Insert(str)
	}

	res := []string{}
	for _, str := range strings {
		if trie.Contains(str) {
			res = append(res, str)
		}
	}

	return res
}

type TrieNode struct {
	Children      map[rune]*TrieNode
	IsEndOfString bool
}

type Trie struct {
	Root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{
		Root: &TrieNode{Children: make(map[rune]*TrieNode), IsEndOfString: false},
	}
}

func (t *Trie) Insert(str string) {
	currNode := t.Root
	for _, ch := range str {
		if _, exists := currNode.Children[ch]; !exists {
			currNode.Children[ch] = &TrieNode{Children: make(map[rune]*TrieNode), IsEndOfString: false}
		}
		currNode = currNode.Children[ch]
	}
	currNode.IsEndOfString = true
}

func (t *Trie) Contains(str string) bool {
	currNode := t.Root
	i := 0
	for i < len(str) {
		ch, _ := utf8.DecodeRune([]byte{str[i]})
		if _, ok := currNode.Children[ch]; ok {
			currNode = currNode.Children[ch]
			i += 1
		} else {
			if currNode.IsEndOfString {
				currNode = t.Root
			} else {
				return false
			}
		}
	}
	return currNode.IsEndOfString
}
