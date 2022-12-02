console.log('\n------- WITHOUT MEMO ------');
// O(n ^ t) time | O(t) space
// n = length of array, t = value of target
export function canSum(target: number, array: number[]) {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of array) {
    const rem = target - num;
    if (canSum(rem, array) === true) return true;
  }

  return false;
}


console.log(canSum(7, [2, 3, 4, 1, 7])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(10000, [7, 14])); // false - will take took long to run without memoization

console.log('\n------- WITH MEMO ------');
// O(n * t) time | O(t) space
export function canSumWithMemo(target: number, array: number[], memo: { [key: number]: boolean; } = {}) {
  if (target === 0) return true;
  if (target < 0) return false;

  if (target in memo) return memo[target];

  for (let num of array) {
    const rem = target - num;
    if (canSumWithMemo(rem, array, memo) === true) {
      memo[target] = true;
      return memo[target];
    };
  }

  memo[target] = false;
  return memo[target];
}


console.log(canSumWithMemo(7, [2, 3, 4, 1, 7])); // true
console.log(canSumWithMemo(7, [5, 3, 4, 7])); // true
console.log(canSumWithMemo(7, [2, 4])); // false
console.log(canSumWithMemo(8, [2, 3, 5])); // true
console.log(canSumWithMemo(10000, [7, 14])); // false