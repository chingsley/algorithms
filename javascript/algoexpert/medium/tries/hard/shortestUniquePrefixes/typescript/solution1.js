// O(n * m) time | O(n * m) space
// n = length of strings array, m = length of longest string in strings array
export function shortestUniquePrefixes(strings) {
    const trie = new Trie();
    trie.populate(strings);
    const result = [];
    for (let str of strings) {
        const i = trie.getFirstUniqueCharIndex(str);
        result.push(str.slice(0, i + 1));
    }
    return result;
}
class Trie {
    constructor() {
        this.root = { children: {}, usedCount: 0 };
    }
    insert(str) {
        let currNode = this.root;
        for (let ch of str) {
            if (!(ch in currNode.children)) {
                currNode.children[ch] = { children: {}, usedCount: 1 };
            }
            else {
                currNode.children[ch].usedCount += 1;
            }
            currNode = currNode.children[ch];
        }
    }
    populate(strings) {
        for (let str of strings) {
            this.insert(str);
        }
    }
    getFirstUniqueCharIndex(str) {
        let currNode = this.root;
        let i = 0;
        while (i < str.length) {
            const ch = str[i];
            if (currNode.children[ch].usedCount === 1)
                return i;
            currNode = currNode.children[ch];
            i += 1;
        }
        return i - 1;
    }
}
