// Applying memoization
// O(n) time | O(n) space
export function getNthFib(n: number, memo: {[key: number]: number} = {}): number {
	if(n === 1) return 0;
	if(n === 2) return 1
  if(memo[n]) return memo[n];
	
  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}


// ----- OR --- 

// Applying memoization
// O(n) time | O(n) space
export function getNthFib2(n: number, memo: Cache = {1: 0, 2: 1}): number {
  if(memo[n] !== undefined) return memo[n];
	
  memo[n] = getNthFib2(n - 1, memo) + getNthFib2(n - 2, memo);
  return memo[n];
}

interface Cache {
  [key: number]: number
}