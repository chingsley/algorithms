{
    {
        /**
         * Time:  (hw) with memo | O(2^(h + w)) without memo
         * Space: O(hw) with memoization; O(h + w) without memo
         *        the O(hw) space is due to the size of the memo
         *        the O(h + w) space is due to recursive calls
         *        With memo, space is actually O(h + w) from recursion + O(hw) from memoization
         *        b/c hw > h + 2, the space is rounded to O(hw);
         * @param width w
         * @param height h
         * @returns number
         */
        function numberOfWaysToTraverseGraph(width, height) {
            const memo = {};
            return waysOf(width, height, memo);
        }
        function waysOf(width, height, memo) {
            const key = [height, width].join(',');
            if (key in memo)
                return memo[key];
            if (width === 1 || height === 1) {
                memo[key] = 1;
                return memo[key];
            }
            memo[key] = waysOf(width - 1, height, memo) + waysOf(width, height - 1, memo);
            return memo[key];
        }
        ;
    }
    {
        // O(hw) time | O(hw) space
        // h = height, w = width
        function numberOfWaysToTraverseGraph(width, height) {
            const array = new Array(height).fill(new Array(width).fill(1));
            for (let i = 1; i < array.length; i++) {
                for (let j = 1; j < array[i].length; j++) {
                    array[i][j] = array[i - 1][j] + array[i][j - 1];
                }
            }
            return array[height - 1][width - 1]; // b/c 0-based indexing
        }
    }
    {
        /*
     * Time; O(w + h)
     * Space: O(1);
     * @param width w
     * @param height h
     * @returns number
     */
        function numberOfWaysToTraverseGraph(width, height) {
            const r = width - 1;
            const d = height - 1;
            return factorial(r + d) / (factorial(r) * factorial(d));
        }
        function factorial(num) {
            let result = 1;
            while (num > 0) {
                result *= num;
                num -= 1;
            }
            return result;
        }
        function rFactorial(num) {
            console.log(num);
            if (num < -10)
                return 2;
            if (num <= 1)
                return 1;
            return num * rFactorial(num - 1);
        }
        console.log(
        // numberOfWaysToTraverseGraph(4, 3),
        numberOfWaysToTraverseGraph(2, 1));
    }
    {
        // O(wh) time | O(wh) space (space due to memo)
        // w = width, h = height
        function numberOfWaysToTraverseGraph(width, height) {
            const memo = {};
            return waysOf(width, height, memo);
        }
        function waysOf(w, h, memo) {
            if (h <= 1 || w <= 1)
                return 1;
            const key = [w, h].join(',');
            if (key in memo)
                return memo[key];
            memo[key] = waysOf(w - 1, h, memo) + waysOf(w, h - 1, memo);
            return memo[key];
        }
    }
    {
        // O(2^(w +h)) time | O(w + h) space; (without memo)
        // O(wh) time | O(wh) space (with memoization)
        function numberOfWaysToTraverseGraph(width, height) {
            return waysOf(width, height);
        }
        function waysOf(w, h, memo = {}) {
            if (w === 1 || h === 1)
                return 1;
            const key = [w, h].join(',');
            if (key in memo)
                return memo[key];
            memo[key] = waysOf(w - 1, h, memo) + waysOf(w, h - 1, memo);
            return memo[key];
        }
    }
    {
        // O(wh) time | O(wh) space (with memoization)
        function numberOfWaysToTraverseGraph(width, height) {
            const matrix = new Array(height).fill(1).map(() => new Array(width).fill(1));
            for (let i = 1; i < matrix.length; i++) {
                for (let j = 1; j < matrix[i].length; j++) {
                    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
                }
            }
            return matrix[height - 1][width - 1];
        }
    }
    {
        // O(w + h) time | O(1) space
        function numberOfWaysToTraverseGraph(width, height) {
            const h = height - 1;
            const v = width - 1;
            return factorial(h + v) / (factorial(h) * factorial(v));
        }
        function factorial(num) {
            let result = 1;
            while (num > 0) {
                result *= num;
                num -= 1;
            }
            return result;
        }
    }
    {
        ;
        function numberOfWaysToTraverseGraph(width, height) {
            const memo = {};
            return waysOf(width, height, memo);
        }
        function waysOf(width, height, memo) {
            if (width === 1 || height === 1)
                return 1;
            const key = [width, height].join(',');
            if (key in memo)
                return memo[key];
            memo[key] = waysOf(width - 1, height, memo) + waysOf(width, height - 1, memo);
            return memo[key];
        }
    }
}
export const __ = '__';
