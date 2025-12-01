/** NOTE: this Question is same as best BEST CONSTRUCT problem of coderByte*/



/** (with memoization:
/* O(n^2 * p) time | O(p * n) space 
/*
/* Without memoization:
/* O(n^p) time | O(p) space (space cost is due to recursion only)
/*
/* where p = length of the pi string, n = lenght of numbers array
*/
export function numbersInPi(pi: string, numbers: string[]) {
  const memo: Memo = {};
  const comb = getCombs(pi, numbers, memo);
  return comb ? comb.length - 1 : -1;
}

function getCombs(pi: string, numbers: string[], memo: Memo): string[] | null {
  if (pi.length === 0) return [];
  if (pi in memo) return memo[pi];

  let comb: string[] = [];
  for (let num of numbers) {
    if (pi.indexOf(num) !== 0) continue;

    let res = getCombs(pi.slice(num.length), numbers, memo);
    if (res === null) continue;

    res = [num, ...res];
    if (comb.length === 0 || res.length < comb.length) comb = res;
  }

  memo[pi] = comb.length > 0 ? comb : null;
  return memo[pi];
}

interface Memo {
  [key: string]: string[] | null;
}