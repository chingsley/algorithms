// O(n + 2) time = O(n) time
//  O(1) space
export function missingNumbers(nums: number[]) {
  let factorial = 1;
  for (let i = 1; i <= nums.length + 2; i++) factorial *= i;

  let numsProduct = 1;
  for (let num of nums) numsProduct *= num;

  const productOfMissingValues = factorial / numsProduct;

  let result: number[] = [];
  for (let num1 = 1; num1 <= nums.length + 1; num1++) {
    const num2 = productOfMissingValues / num1;
    if (num2 % 1 != 0) continue;
    if (num2 > nums.length + 2) continue;
    return [num1, num2];
  }

  return [];
}


/*
1.5 * 10

1 * 2 * 3 * 4 * 5 = 120
1 * 4 * 3         = 12   => 10 => (2, 5)
5 * 4 * 3         = 60   => 2  => (1, 2)
2 * 4 * 3         = 24   => 5  =>  (1, 5)
*/
