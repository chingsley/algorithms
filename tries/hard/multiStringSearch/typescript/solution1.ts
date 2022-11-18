// O(b^2 | ns) time | O(b^2 + n) space
export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const suffixTrie = new SuffixTrie(bigString);
  const result = [];
  for (let word of smallStrings) { // O(n) time (n = length of smallStrings array)
    if (suffixTrie.contains(word)) { // O(s) time (s = length of the longest small string)
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

interface TrieNode {
  [key: string]: TrieNode | boolean;
}

class SuffixTrie {
  root: TrieNode;
  endSymbol: string;
  constructor(string: string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateTrie(string);
  }

  populateTrie(string: string) {
    for (let i = 0; i < string.length; i++) {
      let currRoot = this.root;
      for (let j = i; j < string.length; j++) {
        if (!(string[j] in currRoot)) currRoot[string[j]] = {};
        currRoot = currRoot[string[j]] as TrieNode;
      }
      currRoot[this.endSymbol] = true;
    }
    return this;
  }

  contains(string: string) {
    let currRoot = this.root;
    for (let ch of string) {
      if (!(ch in currRoot)) return false;
      currRoot = currRoot[ch] as TrieNode;
    }
    return true;
    // note how we returned 'true' as opposed to returning this.endSymbol in currRoot
    // the reason is that we're not searching for suffix, instead we're checking if the
    // word exists in the bigString. It doesn't have to be a suffix.
  }
}
