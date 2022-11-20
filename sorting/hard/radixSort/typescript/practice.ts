{
  {
    // O(p * (n + b));
    // p = total no. of passes
    // n = length of input array;
    // b = number base used (here we used decimal, so base = 10)
    function radixSort(array: number[]) {
      const maxNumber = Math.max(...array);
      const passes = maxNumber.toString().length;
      let sorted: number[] = [];
      let digitIdx = passes - 1;
      while (digitIdx >= 0) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let i = array.length - 1; i >= 0; i--) {
          const countIdx = pad(array[i], passes)[digitIdx];
          counts[Number(countIdx)].push(array[i]);
        }

        for (let arr of counts) {
          while (arr.length > 0) {
            sorted.push(arr.pop()!);
          }
        }

        array = sorted;
        sorted = [];
        digitIdx -= 1;
      }
      return array;
    }

    function pad(num: number, size: number) {
      let numString = num.toString();
      while (numString.length < size) numString = "0" + numString;
      return numString;
    }

  }
  {
    // O(p * (n + b));
    // p = total no. of passes
    // n = length of input array;
    // b = number base used (here we used decimal, so base = 10)
    function radixSort(array: number[]) {
      const maxNumber = Math.max(...array);
      const passes = maxNumber.toString().length;
      let digitIdx = passes - 1;
      let sorted: number[] = [];
      while (digitIdx >= 0) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let i = array.length - 1; i >= 0; i--) {
          const countIdx = pad(array[i], passes)[digitIdx];
          counts[Number(countIdx)].push(array[i]);
        }

        for (let arr of counts) {
          while (arr.length > 0) {
            sorted.push(arr.pop()!);
          }
        }

        digitIdx -= 1;
        array = sorted;
        sorted = [];
      }

      return array;
    }

    function pad(num: number, k: number): string {
      let numStr = num.toString();
      while (numStr.length < k) numStr = "0" + numStr;
      return numStr;
    }
  }
  {
    // O(p * (n + b)) time
    // O(n + b) space
    function radixSort(array: number[]) {
      const maxNumber = Math.max(...array);
      const passes = maxNumber.toString().length;
      let digitIdx = passes - 1;
      let sorted: number[] = [];
      while (digitIdx >= 0) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let num of array) {
          const countIdx = pad(num, passes)[digitIdx];
          counts[Number(countIdx)].push(num);
        }

        for (let arr of counts) sorted.push(...arr);

        digitIdx -= 1;
        array = sorted;
        sorted = [];
      }

      return array;
    }

    function pad(num: number, k: number): string {
      let numStr = num.toString();
      while (numStr.length < k) numStr = "0" + numStr;
      return numStr;
    }
  }
  {
    // O(p * (n + b)) time | O(n + b) space;
    // p = no. of passes
    // n = length of array
    // b = base of operation (decimal = 10)
    function radixSort(array: number[]) {
      const maxNumber = Math.max(...array);
      const numOfPasses = maxNumber.toString().length;
      let digitIdx = numOfPasses - 1;
      let sorted: number[] = [];
      while (digitIdx >= 0) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let num of array) {
          const countIdx = pad(num, numOfPasses)[digitIdx];
          counts[Number(countIdx)].push(num);
        }

        for (let arr of counts) {
          sorted.push(...arr);
        }

        array = sorted;
        sorted = [];
        digitIdx -= 1;
      }

      return array;
    }

    function pad(num: number, numOfPasses: number): string {
      let numStr = num.toString();
      while (numStr.length < numOfPasses) numStr = "0" + numStr;
      return numStr;
    }
  }
  {
    function radixSort(array: number[]) {
      const maxNumber = Math.max(...array);
      const numOfPasses = maxNumber.toString().length;
      let sorted: number[] = [];
      let digitIdx = numOfPasses - 1;
      while (digitIdx >= 0) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);

        for (let num of array) {
          counts[Number(pad(num, numOfPasses)[digitIdx])].push(num);
        }

        for (let arr of counts) sorted.push(...arr);

        digitIdx -= 1;
        array = sorted;
        sorted = [];
      }

      return array;
    }

    function pad(num: number, numOfPasses: number): string {
      let numStr = num.toString();
      while (numStr.length < numOfPasses) {
        numStr = "0" + numStr;
      }

      return numStr;
    }
  }
  {
    // O(p(n + b)) time | o(n + b) space
    function radixSort(array: number[]) {
      const passes = Math.max(...array).toString().length;
      for (let digitIdx = passes - 1; digitIdx >= 0; digitIdx--) {// p
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        let sorts: number[] = [];

        for (let num of array) { // n
          const countIndex = Number(numToString(num, passes)[digitIdx]);
          counts[countIndex].push(num);
        }
        for (let arr of counts) { // b
          sorts.push(...arr);
        }

        array = sorts;
        sorts = [];
      }

      return array;
    }

    function numToString(num: number, length: number) {
      let numStr = num.toString();
      while (numStr.length < length) {
        numStr = "0" + numStr;
      }

      return numStr;
    }
  }
  {
    // O(p(n + b)) time | O(n + b) space
    // p = no. of passes
    // n = length of array
    // b = base of operation (10)
    function radixSort(array: number[]) {
      const passes = Math.max(...array).toString().length;
      let sorted: number[] = [];
      for (let digitIdx = passes - 1; digitIdx >= 0; digitIdx--) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let num of array) {
          const idx = Number(numToStr(num, passes)[digitIdx]);
          counts[idx].push(num);
        }
        for (let arr of counts) sorted.push(...arr);

        array = sorted;
        sorted = [];
      }

      return array;
    }

    function numToStr(num: number, size: number): string {
      let numStr = num.toString();
      while (numStr.length < size) numStr = "0" + numStr;
      return numStr;
    }
  }
  {
    // O(p(n + b)) time | O(n + b) space;
    // p = no. of passes = length of the max number in array
    // n = length of array;
    // b = base of operatin (base 10 here)
    function radixSort(array: number[]) {
      const numOfPasses = Math.max(...array).toString().length;
      for (let digitIdx = numOfPasses - 1; digitIdx >= 0; digitIdx--) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        const sortedAtIdx: number[] = [];

        for (let num of array) {
          const idx = Number(numToStr(num, numOfPasses)[digitIdx]);
          counts[idx].push(num);
        }
        for (let subArr of counts) sortedAtIdx.push(...subArr);

        array = sortedAtIdx;
      }

      return array;
    }

    function numToStr(num: number, numOfPasses: number): string {
      let strNum = num.toString();
      while (strNum.length < numOfPasses) {
        strNum = "0" + strNum;
      }
      return strNum;
    }
  }
  {
    // O(p(b + n)) time | O(b + n) space
    // p = length of the largest number of the array (no. of digits in the largest number)
    // b = base of operation (for base 10, b = 10);
    // n = length of the input array
    function radixSort(array: number[]) {
      const numOfPasses = Math.max(...array).toString().length;
      for (let passIdx = numOfPasses - 1; passIdx >= 0; passIdx--) {
        const counts: number[][] = new Array(10).fill(0).map(() => []);
        for (let num of array) counts[Number(pad(num, numOfPasses)[passIdx])].push(num);
        array = counts.reduce((acc, arr) => acc.concat(arr));
      }
      return array;
    }

    function pad(num: number, length: number) {
      let str = num.toString();
      while (str.length < length) str = '0' + str;
      return str;
    }
  }
}

export const ___ = '___';