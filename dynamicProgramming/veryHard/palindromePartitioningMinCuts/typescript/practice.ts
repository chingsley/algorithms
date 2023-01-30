{
  {
    // O(n^3) time | O(n^2) space (n = length of the string)
    function palindromePartitioningMinCuts(string: string) {
      const matrix = new Array(string.length).fill(0).map(
        () => new Array(string.length).fill(false)
      );

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (isPalindrome([row, col], string)) {
            matrix[row][col] = true;
          }
        }
      }

      const cuts = new Array(string.length).fill(0);
      for (let i = 1; i < cuts.length; i++) {
        if (matrix[0][i] === true) continue;

        cuts[i] = cuts[i - 1] + 1;
        let col = i;
        for (let row = 1; row < matrix.length; row++) {
          if (matrix[row][col] === true) {
            cuts[i] = cuts[row - 1] + 1;
            break;
          }
        }
      }

      return cuts[string.length - 1];
    }

    function isPalindrome([startIdx, endIdx]: number[], string: string) {
      if (startIdx > endIdx) return false;
      for (let [i, j] = [startIdx, endIdx]; i <= j; [i, j] = [i + 1, j - 1]) {
        if (string[i] !== string[j]) return false;
      }

      return true;
    }

    function isPalindromeV2([startIdx, endIdx]: number[], string: string) {
      for (let [i, j] = [startIdx, endIdx]; i <= j; [i, j] = [i + 1, j - 1]) {
        if (string[i] !== string[j]) return false;
      }

      return startIdx <= endIdx;
    }
  }
}

export const __ = '__';