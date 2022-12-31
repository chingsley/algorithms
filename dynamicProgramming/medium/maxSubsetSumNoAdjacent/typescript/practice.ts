{
  {
    /**
     * Time: 0(n)
     * Space: 0(1)
     * @param array n
     * @returns number
     */
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length < 1) return 0;
      if (array.length === 1) return array[0];

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        maxSums.push(Math.max(maxSums[i - 1], array[i] + maxSums[i - 2]));
      }
      return maxSums[maxSums.length - 1];
    }
  }
  {
    /**
     * Time: 0(n)
     * Space: 0(1)
     * @param array n
     * @returns number
     */
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length < 1) return 0;
      if (array.length === 1) return array[0];

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(maxSums[1], array[i] + maxSums[0]);
        maxSums[0] = maxSums[1];
        maxSums[1] = nextMaxSum;
      }

      // return maxSums[maxSums.length - 1]; same thing as line below
      return maxSums[1];
    }
  }
  {
    // O(n) time | O(1) space
    // n = length of array
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(maxSums[1], array[i] + maxSums[0]);
        maxSums[0] = maxSums[1];
        maxSums[1] = nextMaxSum;
      }

      return maxSums[maxSums.length - 1];
    }
  }
  {
    // O(n) time | O(n) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];

      const result = [array[0], Math.max(array[0], array[1])];

      for (let i = 2; i < array.length; i++) {
        result.push(Math.max(
          result[result.length - 1],
          array[i] + result[result.length - 2]
        ));
      }

      return result[result.length - 1];
    }
  }
  {
    // O(n) time | O(1) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];

      const result = [array[0], Math.max(array[0], array[1])];

      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(
          result[result.length - 1],
          array[i] + result[result.length - 2]
        );
        result[0] = result[1];
        result[1] = nextMaxSum;
      }

      return result[result.length - 1];
    }
  }
  {
    // O(n) time | O(1) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(
          maxSums[maxSums.length - 1],
          maxSums[maxSums.length - 2] + array[i]
        );
        maxSums[0] = maxSums[1];
        maxSums[1] = nextMaxSum;
      }

      return maxSums[maxSums.length - 1];
    }
  }
  {
    // O(n) time | O(n) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];

      const maxAt = new Array(array.length).fill(0);
      [maxAt[0], maxAt[1]] = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        maxAt[i] = Math.max(
          maxAt[i - 1],
          array[i] + maxAt[i - 2]
        );
      }

      return maxAt[array.length - 1];
    }
  }
  {
    // O(n) time | O(1) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length < 1) return 0;
      if (array.length === 1) return array[0];

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(maxSums[1], array[i] + maxSums[0]);
        maxSums[0] = maxSums[1];
        maxSums[1] = nextMaxSum;
      }
      return maxSums[1];
    }
  }
  {
    // O(n) time | O(n) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length < 2) return array[0] || 0;

      const maxSums = [...array];
      for (let i = 1; i < maxSums.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i] + (maxSums[i - 2] || 0));
      }

      return maxSums[maxSums.length - 1];
    }
  }
  {
    // O(n) time | O(1) space
    function maxSubsetSumNoAdjacent(array: number[]) {
      if (array.length < 2) return array[0] || 0;

      const maxSums = [array[0], Math.max(array[0], array[1])];
      for (let i = 2; i < array.length; i++) {
        const nextMaxSum = Math.max(maxSums[1], array[i] + maxSums[0]);
        [maxSums[0], maxSums[1]] = [maxSums[1], nextMaxSum];
      }

      return maxSums[1];
    }

  }
}

export const ___ = '___';