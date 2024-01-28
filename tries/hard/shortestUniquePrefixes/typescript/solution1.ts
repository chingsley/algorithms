// O(n * m) time | O(n * m) space
// n = length of strings array, m = length of longest string in strings array
export function shortestUniquePrefixes(strings: string[]) {
  const trie = new Trie();
  trie.populate(strings);


  const result: string[] = [];
  for (let str of strings) {
    const i = trie.getFirstUniqueCharIndex(str);
    result.push(str.slice(0, i + 1));
  }
  return result;
}


interface TrieNode {
  children: { [key: string]: TrieNode; }; // Or Record<string, TrieNode>
  usedCount: number;
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = { children: {}, usedCount: 0 };
  }

  insert(str: string) {
    let currNode = this.root;
    for (let ch of str) {
      if (!(ch in currNode.children)) {
        currNode.children[ch] = { children: {}, usedCount: 1 };
      } else {
        currNode.children[ch].usedCount += 1;
      }
      currNode = currNode.children[ch];
    }
  }

  populate(strings: string[]) {
    for (let str of strings) {
      this.insert(str);
    }
  }

  getFirstUniqueCharIndex(str: string): number {
    let currNode = this.root;
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      if (currNode.children[ch].usedCount === 1) return i;
      currNode = currNode.children[ch];
      i += 1;
    }
    return i - 1;
  }
}