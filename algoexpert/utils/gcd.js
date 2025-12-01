"use strict";
exports.__esModule = true;
function getGCD(m, n) {
    if (n === 0)
        return m;
    while ((m % n) !== 0) {
        console.log({ m: m, n: n }, m % n);
        var prevM = m;
        var prevN = n;
        m = prevN;
        n = prevM % prevN;
    }
    return n;
}
exports["default"] = getGCD;
console.log(
// getGCD(-5, -10),
// getGCD(5, 10),
// getGCD(6, 8),
// getGCD(12, 68)
);
