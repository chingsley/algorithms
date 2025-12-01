// O(b^2 | ns) time | O(b^2 + n) space
export function multiStringSearch(bigString, smallStrings) {
    const suffixTrie = new SuffixTrie(bigString);
    const result = [];
    for (let word of smallStrings) { // O(n) time (n = length of smallStrings array)
        if (suffixTrie.contains(word)) { // O(s) time (s = length of the longest small string)
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
}
class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateTrie(string);
    }
    populateTrie(string) {
        for (let i = 0; i < string.length; i++) {
            let currRoot = this.root;
            for (let j = i; j < string.length; j++) {
                if (!(string[j] in currRoot))
                    currRoot[string[j]] = {};
                currRoot = currRoot[string[j]];
            }
            currRoot[this.endSymbol] = true;
        }
        return this;
    }
    contains(string) {
        let currRoot = this.root;
        for (let ch of string) {
            if (!(ch in currRoot))
                return false;
            currRoot = currRoot[ch];
        }
        return true;
        // note how we returned 'true' as opposed to returning this.endSymbol in currRoot
        // the reason is that we're not searching for suffix, instead we're checking if the
        // word exists in the bigString. It doesn't have to be a suffix.
    }
}
