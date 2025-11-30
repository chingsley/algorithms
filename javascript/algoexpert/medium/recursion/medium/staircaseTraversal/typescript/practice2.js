{
    {
        // O(k * n) time | O(n) space
        // n = height
        // k = maxSteps
        function staircaseTraversal(height, maxSteps) {
            const memo = {};
            return waysOf(height, maxSteps, { 0: 1, 1: 1 });
        }
        function waysOf(height, maxSteps, memo) {
            if (height < 0)
                return 0;
            if (height in memo)
                return memo[height];
            let ways = 0;
            for (let i = maxSteps; i > 0; i--) {
                ways += waysOf(height - i, maxSteps, memo);
            }
            memo[height] = ways;
            return memo[height];
        }
    }
    {
        function staircaseTraversal(height, maxSteps) {
            const memo = {};
            return waysOf(height, maxSteps, memo);
        }
        function waysOf(height, maxSteps, memo) {
            if (height < 0)
                return 0;
            if (height <= 1)
                return 1;
            const key = String(height);
            if (key in memo)
                return memo[key];
            let ways = 0;
            for (let i = maxSteps; i > 0; i--) {
                ways += waysOf(height - i, maxSteps, memo);
            }
            memo[key] = ways;
            return memo[key];
        }
    }
    {
        // RECURSION
        // O(k^n) time (without memoizaiton);
        // O(n) space
        function staircaseTraversal(height, maxSteps) {
            return waysOf(height, maxSteps);
        }
        function waysOf(height, maxSteps) {
            if (height <= 1)
                return 1;
            let ways = 0;
            for (let i = 1; i <= maxSteps; i++) {
                if (height - i < 0)
                    continue;
                ways += waysOf(height - i, maxSteps);
            }
            return ways;
        }
    }
    {
        // RECURSION
        // O(n) time (with memoization)
        // O(n) space
        function staircaseTraversal(height, maxSteps) {
            const memo = {};
            return waysOf(height, maxSteps, memo);
        }
        function waysOf(height, maxSteps, memo) {
            if (height <= 1)
                return 1;
            if (height in memo)
                return memo[height];
            memo[height] = 0;
            for (let i = 1; i <= maxSteps; i++) {
                if (height - i < 0)
                    continue;
                memo[height] += waysOf(height - i, maxSteps, memo);
            }
            return memo[height];
        }
    }
    {
        // O(k * n) time | O(n) space
        function staircaseTraversal(height, maxSteps) {
            return waysOf(height, maxSteps);
        }
        function waysOf(height, maxSteps, memo = { 0: 1, 1: 1 }) {
            if (height in memo)
                return memo[height];
            memo[height] = 0;
            for (let i = 1; i <= maxSteps; i++) {
                if (height - i < 0)
                    continue;
                memo[height] += waysOf(height - i, maxSteps, memo);
            }
            return memo[height];
        }
    }
    { /**
        O(k^n) time (without Memo) | O(k * n) time (with memo)
        O(n) space (with or without memo)
     * @param height h
     * @param maxSteps k
     * @param memo Memo
     * @returns number
     */
        function staircaseTraversal(height, maxSteps, memo = { 0: 1, 1: 1 }) {
            if (height < 0)
                return 0;
            if (height in memo)
                return memo[height];
            let result = 0;
            for (let i = 1; i <= maxSteps; i++) {
                result += staircaseTraversal(height - i, maxSteps, memo);
            }
            return result;
        }
    }
    {
        // O(k^n) time | O(n) space (without memo)
        // O(k * n) time | O(n) space (without memo)
        function staircaseTraversal(height, maxSteps, memo = { 0: 1, 1: 1 }) {
            if (height < 0)
                return 0;
            if (height in memo)
                return memo[height];
            let ways = 0;
            let i = maxSteps;
            for (let i = 1; i <= maxSteps; i++) {
                ways += staircaseTraversal(height - i, maxSteps, memo);
            }
            memo[height] = ways;
            return memo[height];
        }
        ;
    }
    {
        // O(k * n) time | O(n) space; (n = height, k = maxSteps)
        function staircaseTraversal(height, maxSteps, memo = { 0: 1, 1: 1 }) {
            if (height < 0)
                return 0;
            if (height in memo)
                return memo[height];
            memo[height] = 0;
            for (let j = 1; j <= maxSteps; j++) {
                memo[height] += staircaseTraversal(height - j, maxSteps);
            }
            return memo[height];
        }
    }
}
export const __ = '__';
