/**
 * * NOTE: THIS ASSUMES 'string' IS ALL LOWERCASE (USE toLowerCase() IF THAT IS NOT THE CASE)
 * Time: O(n^2)
 * space: O(n)
 * @param string n
 * @returns string
 */
var LengthType;
(function (LengthType) {
    LengthType["ODD"] = "odd";
    LengthType["EVEN"] = "even";
})(LengthType || (LengthType = {}));
;
export function longestPalindromicSubstring(string) {
    let [start, end] = [0, 0];
    for (let i = 0; i < string.length; i++) {
        const odd = getPalindromeRange(i, string, LengthType.ODD);
        const even = getPalindromeRange(i, string, LengthType.EVEN);
        const longer = odd.end - odd.start > even.end - even.start ? odd : even;
        if (longer.end - longer.start > end - start) {
            [start, end] = [longer.start, longer.end];
        }
    }
    return string.slice(start, end + 1);
}
function getPalindromeRange(i, string, lenthType) {
    let result = { start: i, end: i };
    let leftIdx = lenthType === LengthType.ODD ? i - 1 : i;
    let rightIdx = i + 1;
    while (leftIdx >= 0 && rightIdx < string.length && string[leftIdx] === string[rightIdx]) {
        result.start = leftIdx;
        result.end = rightIdx;
        leftIdx -= 1;
        rightIdx += 1;
    }
    return result;
}
console.log(longestPalindromicSubstring('chetnhaah'));
