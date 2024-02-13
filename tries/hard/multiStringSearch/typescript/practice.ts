{
  {
    function multiStringSearch(bigString: string, smallStrings: string[]) {
      const trie = new Trie();
      trie.insert(bigString);

      const result: boolean[] = [];
      for (let str of smallStrings) {
        result.push(trie.contains(str));
      }

      return result;
    }


    type TrieNode = { [key: string]: TrieNode; };

    class Trie {
      root: TrieNode;
      constructor() {
        this.root = {};
      }

      insert(str: string) {
        for (let i = 0; i < str.length; i++) {
          let currNode = this.root;
          for (let j = i; j < str.length; j++) {
            const ch = str[j];
            if (!(ch in currNode)) {
              currNode[ch] = {};
            }
            currNode = currNode[ch];
          }
        }
      }

      contains(str: string) {
        let currNode = this.root;
        for (let ch of str) {
          if (!(ch in currNode)) return false;
          currNode = currNode[ch];
        }

        return true;
      }
    }

    /*
     for every ch in the bigString, is there are a word in the list, contained
     in the trie that starts at this ch of the bigString?
    */
  }
}