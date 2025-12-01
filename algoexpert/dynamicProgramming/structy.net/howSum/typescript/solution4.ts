export const howSum = (target: number, numbers: number[]): number[] | null => {
  const arr: number[][] | null[] = new Array(target + 1).fill(null);
  arr[0] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) continue;

    for (let num of numbers) {
      if (i + num > arr.length - 1) continue;
      arr[i + num] = [...arr[i], num];
    }

    if (arr[target] !== null) return arr[target];
  }

  return arr[target];
};

console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 3, 4 ] or [7]
console.log(howSum(7, [2, 4])); // expect: null
console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
console.log(howSum(10000, [7, 14])); // null
console.log(howSum(1000, [2, 5, 10, 25]));