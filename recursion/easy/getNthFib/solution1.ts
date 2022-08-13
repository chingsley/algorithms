// O(2^n) time | O(n) space
export function getNthFib(n: number): number {
	if(n === 1) return 0;
	if(n === 2) return 1
	
  return getNthFib(n - 1) + getNthFib(n - 2);
}