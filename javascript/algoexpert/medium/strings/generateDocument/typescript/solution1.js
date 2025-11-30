// O(n) time | O(n) space
// where n = length of characters. NOTE characters.length is expected to be >= document.length
export function generateDocument(characters, document) {
    const charsDict = {};
    for (const ch of characters) {
        charsDict[ch] ? charsDict[ch]++ : charsDict[ch] = 1;
    }
    for (const ch of document) {
        if (charsDict[ch] && charsDict[ch] > 0) {
            charsDict[ch]--;
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(generateDocument("ste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"));
export function generateDocument2(characters, document) {
    const charsDict = {};
    for (const ch of characters) {
        charsDict[ch] ? charsDict[ch]++ : charsDict[ch] = 1;
    }
    for (const ch of document) {
        if (!charsDict[ch] || charsDict[ch] < 1)
            return false;
        charsDict[ch] -= 1;
    }
    return true;
}
