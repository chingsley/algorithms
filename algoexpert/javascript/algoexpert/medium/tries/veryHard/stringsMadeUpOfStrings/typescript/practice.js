{
    {
        // m = no. of strings in substrings array,
        // n = no. of chars in the longest string of substrings array
        // s = no. of strings in strings array
        // p = no. of chars in the longest string of strings array
        // O((m * n) + (s * p)) time
        // O((m * n) + s) space
        function stringsMadeUpOfStrings(strings, substrings) {
            const trie = new Trie();
            trie.populate(substrings);
            const result = [];
            for (let str of strings)
                if (trie.contains(str))
                    result.push(str);
            return result;
        }
        const END_OF_STRING = '*';
        class Trie {
            constructor() {
                this.root = {};
            }
            insert(str) {
                let currNode = this.root;
                for (let ch of str) {
                    if (!(ch in currNode))
                        currNode[ch] = {};
                    currNode = currNode[ch];
                }
                currNode[END_OF_STRING] = true;
            }
            populate(strArr) {
                for (let str of strArr)
                    this.insert(str);
            }
            contains(str) {
                let currNode = this.root;
                let i = 0;
                while (i < str.length) {
                    const ch = str[i];
                    if (currNode[ch]) {
                        currNode = currNode[ch];
                        i += 1;
                    }
                    else {
                        if (END_OF_STRING in currNode) {
                            currNode = this.root;
                        }
                        else {
                            return false;
                        }
                    }
                }
                return END_OF_STRING in currNode;
            }
        }
    }
}
