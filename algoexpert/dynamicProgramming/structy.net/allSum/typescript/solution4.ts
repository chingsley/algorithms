// Anaylyse time and space complexity
function allSum(targetSum: number, numbers: number[]) {
  // const array: number[][][] = new Array(targetSum + 1).fill([]); // this will fail. You must use a map to create nested arrays
  const array: number[][][] = new Array(targetSum + 1).fill(0).map(() => []);
  array[0] = [[]];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 0) continue;

    for (let num of numbers) {
      if (i + num < array.length) {
        for (let arr of array[i]) {
          array[i + num].push([...arr, num]);
        }
      }
    }
  }

  return array[targetSum];
}
console.log(allSum(7, [5, 3, 4]));
console.log(allSum(7, [2, 3, 4, 1, 7]).length); // expect: 57 different combinations (use .length to check)
console.log(allSum(7, [5, 3, 4, 7])); // expect: [ [ 3, 4 ], [ 4, 3 ], [ 7 ] ]
console.log(allSum(7, [2, 4])); // expect: []
console.log(allSum(8, [2, 3, 5])); // expect: [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 2, 3 ], [ 3, 3, 2 ], [ 3, 5 ], [ 5, 3 ] ]
// console.log(allSum(10000, [7, 14])); // exceeds usable memory and throws an error. But is solvable with memoized recursion (see solution 3)