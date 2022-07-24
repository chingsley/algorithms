{
  {
    /**
 * Time: O(n^2)
 * space: O(n) // due to the sliced return
 * @param string n
 * @returns string
 */
    function longestPalindromicSubstring(string: string): string {
      let [start, end] = [0, 0];
      for (let i = 0; i < string.length - 1; i++) {
        const odd = getPalindromeRange(i, i - 1, i + 1, string);
        const even = getPalindromeRange(i, i, i + 1, string);
        const longer = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        [start, end] = longer[1] - longer[0] > end - start ? longer : [start, end];
      }

      return string.slice(start, end + 1);
    }

    function getPalindromeRange(current: number, prev: number, next: number, string: string): number[] {
      let [start, end] = [current, current];

      while (prev >= 0 && next < string.length && string[prev] === string[next]) {
        start = prev;
        end = next;
        prev -= 1;
        next += 1;
      }

      return [start, end];
    }

    // // m a t a m
    // // 0 1 2 3 4
    // //     i
  }

  {
    function longestPalindromicSubstring(string: string): string {
      let [start, end] = [0, 0];

      for (let i = 0; i < string.length; i++) {
        const odd: { [key: string]: number; } = countOddPalindromeAt(i, string);
        const even: { [key: string]: number; } = countEvenPalindromeAt(i, string);
        const longer = odd.end - odd.start > even.end - even.start ? odd : even;
        if (longer.end - longer.start > end - start) {
          [start, end] = [longer.start, longer.end];
        }
      }

      return string.slice(start, end + 1);
    }

    function countOddPalindromeAt(i: number, string: string): { [key: string]: number; } {
      let result = { start: i, end: i };
      let leftIdx = i - 1;
      let rightIdx = i + 1;
      while (leftIdx >= 0 && rightIdx < string.length && string[leftIdx] === string[rightIdx]) {
        result.start = leftIdx;
        result.end = rightIdx;
        leftIdx -= 1;
        rightIdx += 1;
      }

      return result;
    }

    function countEvenPalindromeAt(i: number, string: string): { [key: string]: number; } {
      let result = { start: i, end: i };
      let leftIdx = i;
      let rightIdx = i + 1;
      while (leftIdx >= 0 && rightIdx < string.length && string[leftIdx] === string[rightIdx]) {
        result.start = leftIdx;
        result.end = rightIdx;
        leftIdx -= 1;
        rightIdx += 1;
      }

      return result;
    }

  }

  {
    function longestPalindromicSubstring(string: string): string {
      let longest = '';
      for (let i = 0; i < string.length; i++) {
        const odd = getSize(i, i - 1, i + 1, string);
        const even = getSize(i, i, i + 1, string);
        const longer = odd.length > even.length ? odd : even;
        longest = longer.length > longest.length ? longer : longest;
      }

      return longest;
    }


    function getSize(idx: number, nextLeft: number, nextRight: number, string: string) {
      let [start, end] = [idx, idx];
      while (nextLeft >= 0 && nextRight < string.length && string[nextLeft] === string[nextRight]) {
        start = nextLeft;
        end = nextRight;
        nextLeft -= 1;
        nextRight += 1;
      }
      return string.slice(start, end + 1);
    }
  }
}

console.log(
  longestPalindromicSubstring("abcdefgfedcba")
);

export const ___ = '___';