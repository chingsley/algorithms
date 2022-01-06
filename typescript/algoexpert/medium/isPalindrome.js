"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
function isPalindrome(string) {
    var i = 0;
    var j = string.length;
    while (i <= j) {
        if (string[i] !== string[j]) {
            return false;
            i += 1;
            j -= 1;
        }
    }
    return true;
}
exports.isPalindrome = isPalindrome;
console.log(isPalindrome('madam'));
// Do not edit the line below.
// exports.isPalindrome = isPalindrome;
