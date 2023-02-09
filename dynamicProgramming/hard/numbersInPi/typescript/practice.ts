{
  {
    // O(n * m) time | O(n * m) space
    function numbersInPi(pi: string, numbers: string[]) {
      const memo: Memo = {};
      const shortestBreaks = getShortestBreaks(pi, numbers, memo);
      // console.log(shortestBreaks)
      return shortestBreaks ? shortestBreaks.length - 1 : -1;
    }

    function getShortestBreaks(pi: string, numbers: string[], memo: Memo): string[] | null {
      if (pi === "") return [];
      console.log(memo);
      if (pi in memo) return JSON.parse(memo[pi]);



      let shortestBreaks: string[] | null = null;
      for (let val of numbers) {
        if (pi.indexOf(val) === 0) {
          const breaksWithoutVal = getShortestBreaks(pi.slice(val.length), numbers, memo);
          if (breaksWithoutVal === null) continue;

          const breaksWithVal = [val, ...breaksWithoutVal]; // makes the time complexity slightly worse than n * m
          if (shortestBreaks === null || breaksWithVal.length < shortestBreaks.length) {
            shortestBreaks = breaksWithVal;
          }
        }
      }

      memo[pi] = JSON.stringify(shortestBreaks);
      return shortestBreaks;
    }

    interface Memo {
      [key: string]: string;
    }
  }
}

export const __ = '__';