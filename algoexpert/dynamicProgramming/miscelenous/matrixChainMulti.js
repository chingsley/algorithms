function matrixChainOrder(p, n, m, s) {
    for (var i = 1; i <= n; i++) {
        m[i][i] = 0;
    }
    for (var l = 2; l <= n; l++) {
        for (var i = 1; i <= n - l + 1; i++) {
            var j = i + l - 1;
            m[i][j] = Infinity;
            for (var k = i; k <= j - 1; k++) {
                var cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (cost < m[i][j]) {
                    m[i][j] = cost;
                    s[i][j] = k;
                }
            }
        }
    }
}
// function printOptimalParents(s: number[][], i: number, j: number): void {
//   if (i === j) {
//     console.log(`A${i}`);
//   } else {
//     console.log('(');
//     printOptimalParents(s, i, s[i][j]);
//     printOptimalParents(s, s[i][j] + 1, j);
//     console.log(')');
//   }
// }
function printOptimalParents(s, i, j) {
    if (i === j) {
        return "A" + i;
    }
    else {
        return "(" + printOptimalParents(s, i, s[i][j]) + printOptimalParents(s, s[i][j] + 1, j) + ")";
    }
}
// Main execution
// const p: number[] = [30, 35, 15, 5, 10, 20, 25];
var p = [5, 20, 4, 3, 10, 5, 8];
var n = 6;
// Initialize m and s matrices (n+1)x(n+1)
var m = Array.from({ length: n + 1 }, function () { return new Array(n + 1).fill(0); });
var s = Array.from({ length: n + 1 }, function () { return new Array(n + 1).fill(0); });
matrixChainOrder(p, n, m, s);
// Print the m matrix
// for (let i = 1; i <= n; i++) {
//   const row: number[] = [];
//   for (let j = i; j <= n; j++) {
//     row.push(m[i][j]);
//   }
//   console.log(row.join('  '));
// }
// Print optimal parenthesization
console.log('\n', printOptimalParents(s, 1, n));
