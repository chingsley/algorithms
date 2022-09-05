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
  {
    // O(n^2) time | O(n) space
    function sortStack(stack: number[]): number[] {
      if (stack.length === 0) return stack;

      const top = stack.pop()!;
      sortStack(stack);
      insertInSortedStack(top, stack);
      return stack;
    }

    function insertInSortedStack(value: number, stack: number[]): void {
      if (stack.length === 0 || value >= stack[stack.length - 1]) {
        stack.push(value);
        return;
      }

      const top = stack.pop()!;
      insertInSortedStack(value, stack);
      stack.push(top);
    }
  }
  {
    // O(n^2) time | O(n) space
    function sortStack(stack: number[]): number[] {
      if (stack.length === 0) return [];

      const top = stack.pop()!;
      sortStack(stack);
      insertInSortedStack(top, stack);
      return stack;
    }

    function insertInSortedStack(value: number, stack: number[]): void {
      if (stack.length === 0 || value > stack[stack.length - 1]) {
        stack.push(value);
        return;
      }

      const top = stack.pop()!;
      insertInSortedStack(value, stack);
      stack.push(top);
    }

  }
  {
    // O(n^2) time | O(n) space
    function sortStack(stack: number[]): number[] {
      if (stack.length === 0) return [];

      const top = stack.pop()!;
      sortStack(stack);
      insertInSortedStack(top, stack);
      return stack;
    }

    function insertInSortedStack(value: number, stack: number[]) {
      if (stack.length === 0 || value > stack[stack.length - 1]) {
        stack.push(value);
        return;
      }

      const top = stack.pop()!;
      insertInSortedStack(value, stack);
      stack.push(top);
    }
  }
  {
    // O(n^2) time | O(n) space
    function sortStack(stack: number[]): number[] {
      if (stack.length === 0) return [];
      const top = stack.pop()!;
      sortStack(stack);
      insertInSortedStack(top, stack);
      return stack;
    }

    function insertInSortedStack(value: number, stack: number[]) {
      if (stack.length === 0 || value >= stack[stack.length - 1]) {
        return stack.push(value);
      }

      const top = stack.pop()!;
      insertInSortedStack(value, stack);
      stack.push(top);
      return;
    }
  }
}

export const ___ = '___';