"use strict";
exports.__esModule = true;
exports.levenshteinDistance = void 0;
var utils_1 = require("../../../../utils");
/**
 * Time: O(n * m)
 * Space: O(m * n)
 *
 * @param str1 n
 * @param str2 m
 * @returns number
 */
function levenshteinDistance(str1, str2) {
    var twoDArr = [];
    for (var i = 0; i < str2.length + 1; i++) {
        var row = [];
        for (var j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        twoDArr.push(row);
    }
    for (var row = 1; row < twoDArr.length; row++) {
        for (var col = 1; col < twoDArr[row].length; col++) {
            if (str2[row - 1] === str1[col - 1]) {
                twoDArr[row][col] = twoDArr[row - 1][col - 1];
            }
            else {
                twoDArr[row][col] = Math.min(twoDArr[row][col - 1], twoDArr[row - 1][col], twoDArr[row - 1][col - 1]) + 1;
            }
        }
    }
    (0, utils_1.print2DArr)(twoDArr);
    return twoDArr[str2.length][str1.length];
}
exports.levenshteinDistance = levenshteinDistance;
console.log(levenshteinDistance('replace', 'delete'));
