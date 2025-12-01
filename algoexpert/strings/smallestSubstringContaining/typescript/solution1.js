"use strict";
exports.__esModule = true;
exports.smallestSubstringContaining = void 0;
function smallestSubstringContaining(bigString, smallString) {
    var targetCounts = stringToHash(smallString);
    var windowCounts = {};
    var uniqueCharsCountInSmallString = Object.keys(targetCounts).length;
    var k = 0;
    var smallest = [-Infinity, 0];
    var _a = [0, 0], leftIdx = _a[0], rightIdx = _a[1];
    while (rightIdx < bigString.length) {
        while (k < uniqueCharsCountInSmallString && rightIdx < bigString.length) {
            var ch = bigString[rightIdx];
            if (!(ch in targetCounts)) {
                rightIdx += 1;
                continue;
            }
            if (!(ch in windowCounts))
                windowCounts[ch] = 0;
            windowCounts[ch] += 1;
            if (windowCounts[ch] === targetCounts[ch])
                k += 1;
            if (k === uniqueCharsCountInSmallString) {
                updateSmallestRange(smallest, [leftIdx, rightIdx]);
                break;
            }
            rightIdx += 1; // *don't forget this line
        }
        while (k === uniqueCharsCountInSmallString && leftIdx <= rightIdx) {
            var ch = bigString[leftIdx];
            if (!(ch in windowCounts)) {
                leftIdx += 1;
                continue;
            }
            updateSmallestRange(smallest, [leftIdx, rightIdx]);
            windowCounts[ch] -= 1;
            if (windowCounts[ch] < targetCounts[ch])
                k -= 1;
            leftIdx += 1;
        }
        // console.log({ leftIdx, rightIdx });
        rightIdx += 1; // *don't forget this line
    }
    // console.log(smallest);
    if (smallest[0] < 0)
        return '';
    return bigString.slice(smallest[0], smallest[1] + 1);
}
exports.smallestSubstringContaining = smallestSubstringContaining;
function updateSmallestRange(smallest, _a) {
    var leftIdx = _a[0], rightIdx = _a[1];
    // console.log([leftIdx, rightIdx]);
    var currRange = smallest[1] - smallest[0];
    var newRange = rightIdx - leftIdx;
    if (newRange < currRange) {
        smallest[0] = leftIdx;
        smallest[1] = rightIdx;
    }
}
function stringToHash(str) {
    var hash = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var ch = str_1[_i];
        if (!(ch in hash))
            hash[ch] = 0;
        hash[ch] += 1;
    }
    return hash;
}
console.log(smallestSubstringContaining("abcd$ef$axb$c$", "$$abf"));
// "a b c d $ e f $ a x  b  $  c  $"
//  1 2 3 4 5 6 7 8 9 10 11 12 13 14
