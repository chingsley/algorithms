// O(m * n) time | O(m * n) space
// m = length of the string array
// n = length of the longest string in the string array
export function longestMostFrequentPrefix(strings: string[]) {
  const trie = new Trie();
  trie.populate(strings);

  let longestPrefix = "";
  let longestStr = "";
  let currMax = -Infinity;
  for (let str of strings) {
    if (str.length > longestStr.length) longestStr = str;
    const [i, f] = trie.getFirstUniqueCharIndex(str);
    if (i === 0) continue;
    if (f < currMax) continue;

    const prefx = str.slice(0, i);
    if (f === currMax && prefx.length <= longestPrefix.length) continue;

    currMax = f;
    longestPrefix = prefx;
  }

  return longestPrefix.length > 0 ? longestPrefix : longestStr;
}


interface TrieNode {
  children: { [key: string]: TrieNode; };
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
      if (ch in currNode.children) {
        currNode.children[ch].usedCount += 1;
      } else {
        currNode.children[ch] = { children: {}, usedCount: 1 };
      }

      currNode = currNode.children[ch];
    }
  }

  populate(strArr: string[]) {
    for (let str of strArr) this.insert(str);
  }

  getFirstUniqueCharIndex(str: string): [number, number] {
    let currNode = this.root;
    let max = currNode.children[str[0]].usedCount;
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      if (currNode.children[ch].usedCount < max) return [i, max];
      currNode = currNode.children[ch];
      i += 1;
    }
    return [0, -Infinity];
  }
}

