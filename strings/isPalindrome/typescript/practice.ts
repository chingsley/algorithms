{
  {
    // O(n) time | O(1) space
    function isPalindrome(string: string) {
      let i = 0;
      let j = string.length - 1;
      while (i <= j) {
        if (string[i] !== string[j]) return false;
        [i, j] = [i + 1, j - 1];
      }

      return true;
    }
  }
}