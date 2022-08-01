{
  {

    // O(n^2) time | O(n) space
    function sortStack(stack: number[]): number[] {
      if (stack.length < 1) return stack;

      const top = stack.pop()!;
      sortStack(stack);
      insertInSortedStack(stack, top);
      return stack;
    }

    function insertInSortedStack(stack: number[], value: number): void {
      if (stack.length < 1 || value >= stack[stack.length - 1]) {
        stack.push(value);
        return;
      }

      const top = stack.pop()!;
      insertInSortedStack(stack, value);
      stack.push(top);
    }

  }
}