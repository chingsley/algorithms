{
    {
        // Do not edit the class below except for the
        // populateSuffixTrieFrom and contains methods.
        // Feel free to add new properties and methods
        // to the class.
        class SuffixTrie {
            constructor(string) {
                this.root = {};
                this.endSymbol = '*';
                this.populateSuffixTrieFrom(string);
            }
            // O(n^2) time | o(n^2) space
            populateSuffixTrieFrom(string) {
                for (let i = 0; i < string.length; i++) {
                    let root = this.root;
                    for (let j = i; j < string.length; j++) {
                        const ch = string[j];
                        if (!(ch in root))
                            root[ch] = {};
                        root = root[ch];
                    }
                    root[this.endSymbol] = true;
                }
            }
            // O(n) time | O(1) space
            contains(string) {
                let root = this.root;
                for (let ch of string) {
                    if (!(ch in root))
                        return false;
                    root = root[ch];
                }
                return this.endSymbol in root;
            }
        }
    }
    {
        class SuffixTrie {
            constructor(string) {
                this.root = {};
                this.endSymbol = '*';
                this.populateSuffixTrieFrom(string);
            }
            // O(n^2) time | O(n^2) space
            // n = length of input string
            populateSuffixTrieFrom(string) {
                for (let i = 0; i < string.length; i++) {
                    let currentNode = this.root;
                    for (let j = i; j < string.length; j++) {
                        const ch = string[j];
                        if (!(ch in currentNode))
                            currentNode[ch] = {};
                        currentNode = currentNode[ch];
                    }
                    currentNode[this.endSymbol] = true;
                }
                // console.log(JSON.stringify(this.root))
            }
            // O(m) time | O(1) space
            // m = length of input search string
            contains(string) {
                let currentNode = this.root;
                for (let i = 0; i < string.length; i++) {
                    const ch = string[i];
                    if (!(ch in currentNode))
                        return false;
                    currentNode = currentNode[ch];
                }
                return this.endSymbol in currentNode;
            }
        }
    }
    {
        // Do not edit the class below except for the
        // populateSuffixTrieFrom and contains methods.
        // Feel free to add new properties and methods
        // to the class.
        class SuffixTrie {
            constructor(string) {
                this.root = {};
                this.endSymbol = '*';
                this.populateSuffixTrieFrom(string);
            }
            // O(n^2) time | O(n^2) space
            populateSuffixTrieFrom(string) {
                for (let i = 0; i < string.length; i++) {
                    let currRoot = this.root;
                    for (let j = i; j < string.length; j++) {
                        if (!(string[j] in currRoot))
                            currRoot[string[j]] = {};
                        currRoot = currRoot[string[j]];
                    }
                    currRoot[this.endSymbol] = true;
                }
            }
            // O(n) time | O(1) space
            contains(string) {
                let currRoot = this.root;
                for (let ch of string) {
                    if (!(ch in currRoot))
                        return false;
                    currRoot = currRoot[ch];
                }
                return this.endSymbol in currRoot;
            }
        }
    }
    {
        // Do not edit the class below except for the
        // populateSuffixTrieFrom and contains methods.
        // Feel free to add new properties and methods
        // to the class.
        class SuffixTrie {
            constructor(string) {
                this.root = {};
                this.endSymbol = '*';
                this.populateSuffixTrieFrom(string);
            }
            populateSuffixTrieFrom(string) {
                for (let i = 0; i < string.length; i++) {
                    let currNode = this.root;
                    for (let j = i; j < string.length; j++) {
                        const ch = string[j];
                        if (!(ch in currNode))
                            currNode[ch] = {};
                        currNode = currNode[ch];
                    }
                    currNode[this.endSymbol] = true;
                }
            }
            contains(string) {
                let currNode = this.root;
                for (let ch of string) {
                    if (!(ch in currNode))
                        return false;
                    currNode = currNode[ch];
                }
                return this.endSymbol in currNode;
            }
        }
    }
}
