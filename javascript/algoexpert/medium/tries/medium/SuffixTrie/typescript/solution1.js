// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }
    // O(n^2) time | O(n^2) space
    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }
    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            let letter = string[j];
            if (!node[letter]) {
                node[letter] = {};
            }
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }
    // O(n) time | O(1) space
    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!node[letter]) {
                return false;
            }
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}
