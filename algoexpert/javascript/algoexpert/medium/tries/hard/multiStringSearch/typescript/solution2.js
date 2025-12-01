// Solution 2: Work in progress
export function multiStringSearch(bigString, smallStrings) {
    const suffixTrie = new CustomSuffixTrie(smallStrings);
    const result = [];
    for (let word of smallStrings) { // O(n) time (n = length of smallStrings array)
        if (suffixTrie.contains(word, bigString)) { // O(s) time (s = length of the longest small string)
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
}
class CustomSuffixTrie {
    constructor(strings) {
        this.root = {};
        this.endSymbol = '*';
        this.populateTrie(strings);
    }
    populateTrie(strings) {
        for (let string of strings)
            this.addToTrie(string);
    }
    addToTrie(string) {
        let currRoot = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!(string[i] in currRoot))
                currRoot[string[i]] = {};
            currRoot = currRoot[string[i]];
        }
        currRoot[this.endSymbol] = true;
        return this;
    }
    contains(word, bigString) {
        let j = 0;
        let currRoot = this.root;
        for (let i = 0; i < bigString.length; i++) {
            const ch = bigString[i];
            if ((ch in currRoot)) {
                currRoot = currRoot[ch];
                j += 1;
                if (j === word.length)
                    break;
            }
        }
        return this.endSymbol in currRoot;
    }
}
