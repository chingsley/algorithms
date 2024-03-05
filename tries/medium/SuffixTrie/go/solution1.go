package main

// Do not edit the class below except for the
// PopulateSuffixTrieFrom and Contains methods.
// Feel free to add new properties and methods
// to the class.
type SuffixTrie map[byte]SuffixTrie

const END byte = '*'

// Feel free to add to this function.
func NewSuffixTrie() SuffixTrie {
	trie := SuffixTrie{}
	return trie
}

func (trie SuffixTrie) PopulateSuffixTrieFrom(str string) {
	for i, _ := range str {
		trie.InsertFromIdx(i, str)
	}
}

func (trie SuffixTrie) Contains(str string) bool {
	currNode := trie
	for i, _ := range str {
		ch := str[i]
		if _, exists := currNode[ch]; !exists {
			return false
		}
		currNode = currNode[ch]
	}

	_, hasEndOfStr := currNode[END]
	return hasEndOfStr
}

func (trie SuffixTrie) InsertFromIdx(i int, str string) {
	currNode := trie
	for j := i; j < len(str); j++ {
		ch := str[j]
		if _, exists := currNode[ch]; !exists {
			currNode[ch] = SuffixTrie{}
		}
		currNode = currNode[ch]
	}
	currNode[END] = nil
}
