// Solution 2: Work in progress
export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const suffixTrie = new CustomSuffixTrie(smallStrings);
  const result = [];
  for (let word of smallStrings) { // O(n) time (n = length of smallStrings array)
    if (suffixTrie.contains(word, bigString)) { // O(s) time (s = length of the longest small string)
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

class CustomSuffixTrie {
  root: TrieNode;
  endSymbol: string;
  constructor(strings: string[]) {
    this.root = {};
    this.endSymbol = '*';
    this.populateTrie(strings);
  }

  populateTrie(strings: string[]) {
    for (let string of strings) this.addToTrie(string);
  }

  addToTrie(string: string) {
    let currRoot = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in currRoot)) currRoot[string[i]] = {};
      currRoot = currRoot[string[i]] as TrieNode;
    }
    currRoot[this.endSymbol] = true;
    return this;
  }

  contains(word: string, bigString: string) {
    let j = 0;
    let currRoot = this.root;
    for (let i = 0; i < bigString.length; i++) {
      const ch = bigString[i];
      if ((ch in currRoot)) {
        currRoot = currRoot[ch] as TrieNode;
        j += 1;
        if (j === word.length) break;
      }
    }
    return this.endSymbol in currRoot;
  }
}
