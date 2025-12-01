/**
 * O(n) time
 * O(n) space; b/c of the revArr
 * where n = length of the strToReverse
 *
 * @param strToReverse
 * @returns
 */
export function reverseWordsInString(string) {
    let i = string.length - 1;
    let endOfWord = string.length;
    let revArr = [];
    const SPACE_CHAR = ' ';
    while (i >= 0) {
        if (string[i] === SPACE_CHAR) {
            revArr.push(string.slice(i + 1, endOfWord));
            while (string[i] === SPACE_CHAR && i >= 0) {
                revArr.push(SPACE_CHAR);
                i -= 1;
            }
            endOfWord = i + 1;
        }
        else {
            i -= 1;
        }
    }
    if (endOfWord > 0)
        revArr.push(string.slice(0, endOfWord));
    return revArr.join('');
}
console.log(reverseWordsInString('*HE**REVERSE**STRING**FUNCTION'));
