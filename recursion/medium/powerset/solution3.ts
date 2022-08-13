/*
* O(2^n) time
* O(n^2) space
*/
export function powerset(array: number[]): number[][] {
  if (array.length === 0) return [[]];

  const [first, ...rest] = array;
  const combsWithoutFirst = powerset(rest);
  const combsWithFirst = [];
  for (const comb of combsWithoutFirst) {
    combsWithFirst.push([...comb, first]);
  }

  return [...combsWithoutFirst, ...combsWithFirst];
}