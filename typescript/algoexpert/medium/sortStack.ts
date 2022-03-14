// O(n^2) time | O(n) space
export function sortStack(stack: number[]): number[] {
  if (stack.length === 0) {
    return stack;
  }
  const top = stack.pop()!;
  sortStack(stack);
  insertInSortedOrder(stack, top);

  return stack;
}

function insertInSortedOrder(stack: number[], value: number): void {
  if (stack.length === 0 || stack[stack.length -1] <= value) {
    stack.push(value);
    return;
  }
  const top = stack.pop()!;
  insertInSortedOrder(stack, value);
  stack.push(top);
}