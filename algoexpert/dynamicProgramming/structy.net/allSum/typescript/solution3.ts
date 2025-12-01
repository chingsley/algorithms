interface Memo { [key: number]: number[][]; };
{
  {
    function allSum(targetSum: number, numbers: number[], memo: Memo = {}): number[][] {
      if (targetSum === 0) return [[]];
      if (targetSum < 0) return [];

      if (targetSum in memo) return memo[targetSum];

      const result = [];
      for (let num of numbers) {
        const res = allSum(targetSum - num, numbers, memo);
        for (let arr of res) {
          // arr.push(num); // will not work with if we return memo[targetSum] in the check above, b/c the array is returned by referenc. (it will cause incorrect result, instead we use spread operator as in the next line)
          result.push([...arr, num]);
        }
      }

      memo[targetSum] = result;
      return memo[targetSum];
    }

  }
  { // O(t * n^2) time | O(n^3) space
    function allSum(targetSum: number, numbers: number[], memo: Memo = {}): number[][] {
      if (targetSum === 0) return [[]];
      if (targetSum < 0) return [];

      if (targetSum in memo) return memo[targetSum];

      const result = [];
      for (let num of numbers) {
        const res = allSum(targetSum - num, numbers, memo);
        for (let arr of res) result.push([num, ...arr]);
      }

      memo[targetSum] = result;
      return memo[targetSum];
    }
    console.log(allSum(7, [2, 3, 4, 1, 7]).length); // expect: 57 different combinations (use .length to check)
    console.log(allSum(7, [5, 3, 4, 7])); // expect: [ [ 3, 4 ], [ 4, 3 ], [ 7 ] ]
    console.log(allSum(7, [2, 4])); // expect: []
    console.log(allSum(8, [2, 3, 5])); // expect: [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 2, 3 ], [ 3, 3, 2 ], [ 3, 5 ], [ 5, 3 ] ]
    console.log(allSum(10000, [7, 14])); // expect []
  }
}

export const __ = '__';



