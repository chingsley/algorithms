// m = no. of strings in substrings array,
// n = no. of chars in the longest string of substrings array
// s = no. of strings in strings array
// p = no. of chars in the longest string of strings array
// O((m * n) + (s * p)) time
// O((m * n) + s) space
export function stringsMadeUpOfStrings(strings: string[], substrings: string[]) {
  const trie = new Trie();
  trie.populate(substrings); // O(m * n) time | O(m * n) space
  console.log(JSON.stringify(trie.root));
  const result: string[] = []; // O(s) space (worst case where every string of strings is in trie)

  // O(s * p) time
  for (let str of strings) { // O(s) time
    let i = 0;
    let currNode = trie.root;
    while (i < str.length) { // O(p) time
      let ch = str[i];
      if (ch in currNode) {
        currNode = currNode[ch] as TrieNode;
        i += 1;
      } else {
        if ("*" in currNode) {
          currNode = trie.root;
        } else {
          break;
        }
      }
    }
    if ("*" in currNode) {
      result.push(str);
    }
  }

  return result;
}

type TrieNode = { [key: string]: TrieNode | boolean; };

class Trie {
  root: TrieNode;

  constructor() {
    this.root = {};
  }

  // O(n) time (n = no. of chars in a string)
  insert(str: string) {
    let currNode = this.root;
    for (let ch of str) {
      if (!currNode[ch]) {
        currNode[ch] = {};
      }
      currNode = currNode[ch] as TrieNode;
    }
    currNode["*"] = true;
  }

  // O(m * n) time (m = no. of strings in strArr, n = no. of chars in each str)
  populate(strArr: string[]) {
    for (let str of strArr) {
      this.insert(str);
    }
  }
}
