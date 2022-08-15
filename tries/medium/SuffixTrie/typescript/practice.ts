{
  {
    interface TrieNode {
      [key: string]: TrieNode | boolean;
    }

    // Do not edit the class below except for the
    // populateSuffixTrieFrom and contains methods.
    // Feel free to add new properties and methods
    // to the class.
    class SuffixTrie {
      root: TrieNode;
      endSymbol: string;

      constructor(string: string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
      }

      // O(n^2) time | o(n^2) space
      populateSuffixTrieFrom(string: string) {
        let root = this.root;
        for (let i = 0; i < string.length; i++) {
          let root = this.root;
          for (let j = i; j < string.length; j++) {
            const ch = string[j];
            if (!(ch in root)) root[ch] = {};
            root = root[ch] as TrieNode;
          }
          root[this.endSymbol] = true;
        }
      }

      // O(n) time | O(1) space
      contains(string: string) {
        let root = this.root;
        for (let ch of string) {
          if (!(ch in root)) return false;
          root = root[ch] as TrieNode;
        }

        return this.endSymbol in root;
      }

    }
  }
}