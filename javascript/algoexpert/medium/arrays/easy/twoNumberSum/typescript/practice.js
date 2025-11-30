{
    {
        // O(n) time | O(n) space
        function twoNumberSum(array, targetSum) {
            const complements = new Set();
            for (let num of array) {
                const compl = targetSum - num;
                if (complements.has(compl))
                    return [num, compl];
                complements.add(num);
            }
            return [];
        }
    }
    {
        // O(n) time | O(n) space
        function twoNumberSum(array, targetSum) {
            const complements = new Set();
            for (let num of array) {
                const compl = targetSum - num;
                if (complements.has(compl))
                    return [num, compl];
                complements.add(num);
            }
            return [];
        }
    }
    {
        // o(n) time | O(n) space
        function twoNumberSum(array, targetSum) {
            const complements = new Set();
            for (let num of array) {
                const compl = targetSum - num;
                if (complements.has(compl))
                    return [num, compl];
                complements.add(num);
            }
            return [];
        }
    }
}
export const ___ = '___';
