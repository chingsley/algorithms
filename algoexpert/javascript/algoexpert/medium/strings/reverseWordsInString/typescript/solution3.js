export function reverseWordsInString(string) {
    const reversedString = reverseString(string, string.length - 1, -1);
    return reverseString(reversedString, 0, 1);
}
function reverseString(str, startIdx, step) {
    const revStr = [];
    let i = startIdx;
    while (i >= 0 && i < str.length) {
        revStr.push(str[i]);
        i = i + step;
    }
    return revStr.join('');
}
var Step;
(function (Step) {
    Step[Step["PLUS_ONE"] = 1] = "PLUS_ONE";
    Step[Step["MINUS_ONE"] = -1] = "MINUS_ONE";
})(Step || (Step = {}));
;
