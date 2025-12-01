// O(n) time | O(n) space
export function nextGreaterElement(array: number[]) {
  const result: number[] = new Array(array.length).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < 2 * array.length; i++) {
    const circularIdx = i % array.length;

    while (
      stack.length > 0 &&
      array[circularIdx] > array[stack[stack.length - 1]]
    ) {
      const top: number = stack.pop()!;
      result[top] = array[circularIdx];
    }
    stack.push(circularIdx);
  }
  return result;
}

console.log(nextGreaterElement([2, 5, -3, -4, 6, 7, 2]));
