export const countSum = (targetSum: number, numbers: number[]): number => {
  const array = new Array(targetSum + 1).fill(0);
  array[0] = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) continue;

    for (let num of numbers) {
      if (i + num < array.length) {
        array[i + num] += array[i];
      }
    }
  }

  return array[targetSum];
};

console.log(countSum(7, [2, 3, 4, 1, 7])); // expect: 57
console.log(countSum(7, [5, 3, 4, 7])); // expect: 3: [ 3, 4 ], [4, 3], [7]
console.log(countSum(7, [2, 4])); // expect: 0
console.log(countSum(8, [2, 3, 5])); // expect: 6
console.log(countSum(10000, [7, 14]));// expect 0