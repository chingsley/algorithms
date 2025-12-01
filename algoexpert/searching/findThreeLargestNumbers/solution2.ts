// O(n^2) time
// O(n) space
export function findThreeLargestNumbers(array: number[]) {
  const stack: number[] = [];
  for (const num of array) {
    addToOrderedStack(num, stack);
  }
  // console.log(stack);
  return stack.slice(-3);
}

function addToOrderedStack(num: number, stack: number[]) {
  const temp: number[] = [];
  while (stack[stack.length - 1] > num) {
    temp.push(stack.pop() as number);
  }
  stack.push(num);
  while (temp.length > 0) {
    stack.push(temp.pop() as number);
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
