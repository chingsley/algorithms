{
    {
        /**
         * WITHOUT MEMO
         * O(n^n) time | O(n) space (n = length of array)
         */
        function longestIncreasingSubsequence(array) {
            let longestSeq = [];
            for (let i = 0; i < array.length; i++) {
                const longestSeqFromI = getLongestSeqFrom(i, array);
                if (longestSeqFromI.length > longestSeq.length) {
                    longestSeq = longestSeqFromI;
                }
            }
            return longestSeq.reverse();
        }
        function getLongestSeqFrom(i, array) {
            let longestSeqFromI = [];
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] <= array[i])
                    continue;
                const longestSeqFromJ = getLongestSeqFrom(j, array);
                if (longestSeqFromJ.length > longestSeqFromI.length) {
                    longestSeqFromI = longestSeqFromJ;
                }
            }
            longestSeqFromI.push(array[i]);
            return longestSeqFromI;
        }
    }
    {
        /**
         * WITH MEMO
         * O(n^2) time | O(n^2) space
         */
        function longestIncreasingSubsequence(array) {
            const memo = {};
            let longestSeq = [];
            for (let i = 0; i < array.length; i++) {
                const longestSeqFromI = getLongestSeqFrom(i, array, memo);
                if (longestSeqFromI.length > longestSeq.length) {
                    longestSeq = longestSeqFromI;
                }
            }
            return longestSeq.reverse();
        }
        function getLongestSeqFrom(i, array, memo) {
            if (i in memo)
                return JSON.parse(memo[i]);
            let longestSeqFromI = [];
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] <= array[i])
                    continue;
                const longestSeqFromJ = getLongestSeqFrom(j, array, memo);
                if (longestSeqFromJ.length > longestSeqFromI.length) {
                    longestSeqFromI = longestSeqFromJ;
                }
            }
            longestSeqFromI.push(array[i]);
            memo[i] = JSON.stringify(longestSeqFromI);
            return longestSeqFromI;
        }
    }
}
export const __ = '__';
