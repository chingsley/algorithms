/*
* Time: O(w * c)
* w = no. of words, c = no. of characters in the longest word
*
* Space: O(u * n)
* u = the no. of unique characters across all the words
* n = the frequency of occurrence of the most occurred character
*/
export function minimumCharactersForWords(words) {
    const charsBank = {};
    for (let word of words) {
        const wordCharFreq = getRequiredChars(word);
        updateCharsBank(wordCharFreq, charsBank);
    }
    const res = [];
    for (const ch in charsBank) {
        while (charsBank[ch]-- > 0)
            res.push(ch);
    }
    return res;
}
function getRequiredChars(word) {
    const chFreq = {};
    for (let ch of word) {
        ch in chFreq ? chFreq[ch] += 1 : chFreq[ch] = 1;
    }
    return chFreq;
}
function updateCharsBank(wordCharFreq, charsBank) {
    for (let ch in wordCharFreq) {
        if (ch in charsBank) {
            charsBank[ch] = Math.max(wordCharFreq[ch], charsBank[ch]);
        }
        else {
            charsBank[ch] = wordCharFreq[ch];
        }
    }
}
