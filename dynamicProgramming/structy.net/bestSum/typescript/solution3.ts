export function bestSum(target: number, numbers: number[]): number[] | null {
  const array: number[][] | null[] = new Array(target + 1).fill(null);
  array[0] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) continue;

    for (let num of numbers) {
      if (i + num >= array.length) continue;

      const oldComb = array[i + num];
      const newComb = [...array[i], num];
      // console.log({ i, oldComb, newComb });
      if (!oldComb || newComb.length < oldComb.length) array[i + num] = newComb;;
    }
  }

  return array[target];
}

console.log(bestSum(7, [2, 3, 4, 1])); // expect: [ 3, 4]
console.log(bestSum(7, [5, 3, 4, 7])); // expect: [7]
console.log(bestSum(7, [2, 4])); // expect: null
console.log(bestSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
console.log(bestSum(10000, [7, 14])); // null
console.log(bestSum(1000, [2, 5, 10, 25])); // expect array of length 40 all containging same number (25)
console.log(bestSum(1000, [2, 5, 10, 25]).reduce((acc, num) => acc + num, 0)); // expect 1000