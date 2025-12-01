function matrixChainOrder(p: number[], n: number, m: number[][], s: number[][]): void {
  for (let i = 1; i <= n; i++) {
    m[i][i] = 0;
  }

  for (let l = 2; l <= n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Infinity;
      for (let k = i; k <= j - 1; k++) {
        const cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
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

function printOptimalParents(s: number[][], i: number, j: number): string {
  if (i === j) {
    return `A${i}`;
  } else {
    return `(${printOptimalParents(s, i, s[i][j])}${printOptimalParents(s, s[i][j] + 1, j)})`;
  }
}

// Main execution
// const p: number[] = [30, 35, 15, 5, 10, 20, 25];
const p: number[] = [5, 20, 4, 3, 10, 5, 8];
const n: number = 6;

// Initialize m and s matrices (n+1)x(n+1)
const m: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
const s: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

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