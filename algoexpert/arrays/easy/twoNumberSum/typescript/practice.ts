{
  {
    // O(n) time | O(n) space
    function twoNumberSum(array: number[], targetSum: number): number[] {
      const complements: Set<number> = new Set();
      for (let num of array) {
        const compl = targetSum - num;
        if (complements.has(compl)) return [num, compl];
        complements.add(num);
      }
      return [];
    }
  }
  {
    // O(n) time | O(n) space
    function twoNumberSum(array: number[], targetSum: number): number[] {
      const complements: Set<number> = new Set();
      for (let num of array) {
        const compl = targetSum - num;
        if (complements.has(compl)) return [num, compl];
        complements.add(num);
      }
      return [];
    }
  }
  {
    // o(n) time | O(n) space
    function twoNumberSum(array: number[], targetSum: number): number[] {
      const complements: Set<number> = new Set();
      for (let num of array) {
        const compl = targetSum - num;
        if (complements.has(compl)) return [num, compl];
        complements.add(num);
      }

      return [];
    }
  }
  {// returns the indices (not the values) of the two numbers that add up to the target
    // O(n) time | O(n) space
    function twoSum(nums: number[], target: number): number[] {
      const rem: { [key: string]: number; } = {};
      for (let i = 0; i < nums.length; i++) {
        const key = String(nums[i]);
        if (key in rem) return [i, rem[key]];
        rem[String(target - nums[i])] = i;
      }

      return [];
    };
  }
}

export const ___ = '___';