{
  {
    /**
     * Time:  (hw) with memo | O(2^(h + w)) without memo
     * Space: O(hw) with memoization; O(h + w) without memo
     *        the O(hw) space is due to the size of the memo
     *        the O(h + w) space is due to recursive calls
     *        With memo, space is actually O(h + w) from recursion + O(hw) from memoization
     *        b/c hw > h + 2, the space is rounded to O(hw);
     * @param width w
     * @param height h
     * @returns number
     */
    function numberOfWaysToTraverseGraph(width: number, height: number): number {
      const memo: Memo = {};
      return waysOf(width, height, memo);
    }

    function waysOf(width: number, height: number, memo: Memo): number {
      const key = [height, width].join(',');
      if (key in memo) return memo[key];

      if (width === 1 || height === 1) {
        memo[key] = 1;
        return memo[key];
      }

      memo[key] = waysOf(width - 1, height, memo) + waysOf(width, height - 1, memo);
      return memo[key];
    }

    interface Memo { [key: string]: number; };
  }

  {
    // O(hw) time | O(hw) space
    // h = height, w = width
    function numberOfWaysToTraverseGraph(width: number, height: number): number {
      const array = new Array(height).fill(new Array(width).fill(1));
      for (let i = 1; i < array.length; i++) {
        for (let j = 1; j < array[i].length; j++) {
          array[i][j] = array[i - 1][j] + array[i][j - 1];
        }
      }
      return array[height - 1][width - 1]; // b/c 0-based indexing
    }
  }
  {
    /*
 * Time; O(w + h)
 * Space: O(1);
 * @param width w
 * @param height h
 * @returns number
 */
    function numberOfWaysToTraverseGraph(width: number, height: number): number {
      const r = width - 1;
      const d = height - 1;
      return factorial(r + d) / (factorial(r) * factorial(d));
    }

    function factorial(num: number) {
      let result = 1;
      while (num > 0) {
        result *= num;
        num -= 1;
      }

      return result;
    }

    function rFactorial(num: number): number { // recursive implementation of factorial
      console.log(num);
      if (num < -10) return 2;
      if (num <= 1) return 1;
      return num * rFactorial(num - 1);
    }

    console.log(
      // numberOfWaysToTraverseGraph(4, 3),
      numberOfWaysToTraverseGraph(2, 1)
    );
  }
}


export const __ = '__';