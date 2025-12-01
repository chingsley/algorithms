interface TrieNode {
  [key: string]: TrieNode | boolean;
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  /**
   * O(n^2) time | o(n^2) space
   * @param string n
   */
  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      let node: TrieNode = this.root;
      for (let j = i; j < string.length; j++) {
        if (string[j] in node) {
          node = node[string[j]] as TrieNode;
        } else {
          node[string[j]] = {};
          node = node[string[j]] as TrieNode;
        }
      }
      node['*'] = true;

    }
  }

  /**
   * O(n) time | O(1) space
   * @param string n
   * @returns boolean
   */
  contains(string: string) {
    let node: TrieNode = this.root;
    for (let char of string) {
      if (!(char in node)) return false;
      node = node[char] as TrieNode;
    }
    return '*' in node;
  }
}


const testStr = "babc";
const suffiexTrie = new SuffixTrie(testStr);
console.log(
  JSON.stringify(suffiexTrie.root)
);

for (let i = 0; i < testStr.length - 1; i++) {
  console.log(suffiexTrie.contains(testStr.slice(i)));
}

console.log(suffiexTrie.contains("babcd"));