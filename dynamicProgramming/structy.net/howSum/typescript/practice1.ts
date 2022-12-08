{
  {
    //  O(n * (n^t)) | O(t) space (t = targetSum, n = numbers.length)
    const howSum = (targetSum: number, numbers: number[]): number[] | null => {
      if (targetSum === 0) return [];
      if (targetSum < 0) return null;

      for (let num of numbers) {
        const result = howSum(targetSum - num, numbers);
        if (result !== null) return [num, ...result];
      }

      return null;
    };

    // console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
    // console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 3, 4 ] or [7]
    // console.log(howSum(7, [2, 4])); // expect: null
    // console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
    // // console.log(howSum(10000, [7, 14])); // takes a long time without memoization
  }
  {
    {
      //  O(n^t) | O(t) space (t = targetSum, n = numbers.length)
      const howSum = (targetSum: number, numbers: number[]): number[] | null => {
        if (targetSum === 0) return [];
        if (targetSum < 0) return null;

        for (let num of numbers) {
          const result = howSum(targetSum - num, numbers);
          if (result !== null) {
            result.push(num);
            return result;
          }
        }

        return null;
      };

      // console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
      // console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 3, 4 ] or [7]
      // console.log(howSum(7, [2, 4])); // expect: null
      // console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
      // // console.log(howSum(10000, [7, 14])); // takes a long time without memoization
    }
  }
}