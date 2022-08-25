/**
 * Time: O(n)
 * Space: O(n)
 * 
 * @param array n
 * @returns number
 */
 export function maxSubsetSumNoAdjacent(array: number[]) {
	if(array.length === 0) return 0;
	if(array.length === 1) return array[0];
	
  const maxSums: number[] = [array[0], Math.max(array[0], array[1])];
  for(let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max((maxSums[i - 1]), (array[i] + maxSums[i - 2]))
  }
  return maxSums[maxSums.length - 1];
}


console.log(
  maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
);