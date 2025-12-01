{
    {
        function multiStringSearch(bigString, smallStrings) {
            const trie = new Trie();
            trie.insert(bigString);
            const result = [];
            for (let str of smallStrings) {
                result.push(trie.contains(str));
            }
            return result;
        }
        class Trie {
            constructor() {
                this.root = {};
            }
            insert(str) {
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
            contains(str) {
                let currNode = this.root;
                for (let ch of str) {
                    if (!(ch in currNode))
                        return false;
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
