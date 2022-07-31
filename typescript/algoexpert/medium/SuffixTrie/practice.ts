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

      populateSuffixTrieFrom(string: string) {
        for (let i = 0; i < string.length; i++) {
          let currentNode: TrieNode = this.root;
          for (let j = i; j < string.length; j++) {
            if (string[j] in currentNode) {
              currentNode = currentNode[string[j]] as TrieNode;
            } else {
              currentNode[string[j]] = {};
              currentNode = currentNode[string[j]] as TrieNode;
            }
          }
          currentNode[this.endSymbol] = true;
        }
      }

      contains(string: string) {
        let currentNode: TrieNode = this.root;
        for (let i = 0; i < string.length; i++) {
          if (!(string[i] in currentNode)) return false;
          currentNode = currentNode[string[i]] as TrieNode;
        }

        return this.endSymbol in currentNode;
      }
    }


    // const sTree = new SuffixTrie('babc');
    // console.log(
    //   JSON.stringify(sTree.root)
    // );
  }
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

      populateSuffixTrieFrom(string: string) {
        for (let i = 0; i < string.length; i++) {
          let currentNode = this.root;
          for (let j = i; j < string.length; j++) {
            if (!(string[j] in currentNode)) {
              currentNode[string[j]] = {};
            }
            currentNode = currentNode[string[j]] as TrieNode;
          }
          currentNode[this.endSymbol] = true;
        }
      }

      contains(string: string) {
        let currentNode = this.root;
        for (let char of string) {
          if (!(char in currentNode)) return false;
          currentNode = currentNode[char] as TrieNode;
        }
        return this.endSymbol in currentNode;
      }
    }
  }
}

export const __ = '__';