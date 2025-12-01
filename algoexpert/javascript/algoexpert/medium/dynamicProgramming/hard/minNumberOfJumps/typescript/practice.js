{
    {
        // O(n) time | O(n) space (n = length of array)
        function minNumberOfJumps(array) {
            const memo = {};
            return getMinJumpsFromIdx(0, array, memo);
        }
        function getMinJumpsFromIdx(i, array, memo) {
            if (i === array.length - 1)
                return 0;
            if (i in memo)
                return memo[i];
            let minJumps = Infinity;
            for (let j = 1; j <= array[i]; j++) {
                if (i + j >= array.length)
                    continue;
                minJumps = Math.min(minJumps, getMinJumpsFromIdx(i + j, array, memo));
            }
            memo[i] = minJumps + 1;
            return minJumps + 1;
        }
    }
    {
        //O(n) time | O(n) space
        function minNumberOfJumps(array) {
            return minJumpsFromIdx(0, array, {});
        }
        function minJumpsFromIdx(idx, array, memo) {
            if (idx >= array.length - 1)
                return 0;
            if (idx in memo)
                return memo[idx];
            let minJumps = Infinity;
            for (let i = 1; i <= array[idx]; i++) {
                minJumps = Math.min(minJumps, minJumpsFromIdx(idx + i, array, memo));
            }
            memo[idx] = minJumps + 1;
            return memo[idx];
        }
    }
}
export const __ = '__';
