/**
 * Time: O(n)
 * Space: O(1)
 * 
 * @param array n
 * @returns number
 */
 export function maxSubsetSumNoAdjacent(array: number[]) {
	if(array.length === 0) return 0;
	if(array.length === 1) return array[0];
	
  let [first, second] = [array[0], Math.max(array[0], array[1])];
  for(let i = 2; i < array.length; i++) {
    const current = Math.max(second, first + array[i]);
    first = second;
    second = current;
  }
  return second;
}

console.log(
  maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
);