{
  {
    function isValidSubsequence(array: number[], sequence: number[]) {
      let i = 0;
      for (let num of sequence) {
        let found = false;
        while (i < array.length && !found) {
          if (array[i] === num) {
            found = true;
          }
          i += 1;
        }
        if (!found) return false;
      }
      return true;
    }
  }
}