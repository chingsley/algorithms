const arr = [
    ['w', 'l', 'w', 'l'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
    ['w', 'l', 'w', 'w'],
];
{
    {
        /**
     * Question:  write a function that returns the minum
     * island size
     *
     * Time: O(e)
     * Space: O(n)
     * Where: e = no. of edges in the graph
     *        n = no. of nodes in the graph
     *
     * @param arr string[]
     * @returns number
     */
        function minIslands(array) {
            let min = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] === 'w')
                        continue;
                    const size = countIslandSize(array, [i, j], visited);
                    if (size > 0 && size < min)
                        min = size;
                }
            }
            return min;
        }
        function countIslandSize(array, pos, visited) {
            const key = pos.join(',');
            if (visited.has(key))
                return 0;
            visited.add(key);
            const [row, col] = pos;
            if (row < 0 || row >= array.length)
                return 0;
            if (col < 0 || col >= array[row].length)
                return 0;
            if (array[row][col] === 'w')
                return 0;
            let size = 1;
            size += countIslandSize(array, [row - 1, col], visited);
            size += countIslandSize(array, [row + 1, col], visited);
            size += countIslandSize(array, [row, col + 1], visited);
            size += countIslandSize(array, [row, col - 1], visited);
            return size;
        }
        // console.log(
        //   minIslands(arr), // // expect 1
        // );
    }
    {
        function minIslands(array) {
            let min = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] === 'w')
                        continue;
                    const size = countIslandSize(array, [i, j], visited);
                    if (size > 0 && size < min)
                        min = size;
                }
            }
            return min;
        }
        function countIslandSize(array, pos, visited) {
            let size = 0;
            const stack = [pos];
            while (stack.length > 0) {
                const current = stack.pop();
                const key = current.join(',');
                if (visited.has(key))
                    continue;
                visited.add(key);
                const [row, col] = current;
                if (row < 0 || row >= array.length)
                    continue;
                if (col < 0 || col >= array[row].length)
                    continue;
                if (array[row][col] === 'w')
                    continue;
                stack.push([row - 1, col]);
                stack.push([row + 1, col]);
                stack.push([row, col - 1]);
                stack.push([row, col + 1]);
                size += 1;
            }
            return size;
        }
        // console.log(
        //   minIslands(arr), // // expect 1
        // );
    }
    {
        function minIslands(array) {
            let minSize = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    const size = sizeIsland([i, j], array, visited);
                    if (size > 0 && size < minSize)
                        minSize = size;
                }
            }
            return minSize;
        }
        function sizeIsland(pos, array, visited) {
            const [i, j] = pos;
            const key = [i, j].join(',');
            if (visited.has(key))
                return 0;
            visited.add(key);
            if (i < 0 || i >= array.length)
                return 0;
            if (j < 0 || j >= array[i].length)
                return 0;
            if (array[i][j] === 'w')
                return 0;
            let size = 1;
            size += sizeIsland([i - 1, j], array, visited);
            size += sizeIsland([i + 1, j], array, visited);
            size += sizeIsland([i, j - 1], array, visited);
            size += sizeIsland([i, j + 1], array, visited);
            return size;
        }
        // console.log(
        //   minIslands(arr), // // expect 1
        // );
    }
    {
        function minIslands(array) {
            let minSize = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    const size = sizeIsland([i, j], array, visited);
                    if (size > 0 && size < minSize)
                        minSize = size;
                }
            }
            return minSize;
        }
        function sizeIsland(pos, array, visited) {
            const stack = [pos];
            let size = 0;
            while (stack.length > 0) {
                const [i, j] = stack.pop();
                const key = [i, j].join(',');
                if (visited.has(key))
                    continue;
                visited.add(key);
                if (i < 0 || i >= array.length)
                    continue;
                if (j < 0 || j >= array[i].length)
                    continue;
                if (array[i][j] === 'w')
                    continue;
                stack.push([i - 1, j]);
                stack.push([i + 1, j]);
                stack.push([i, j - 1]);
                stack.push([i, j + 1]);
                size += 1;
            }
            return size;
        }
        // console.log(
        //   minIslands(arr), // // expect 1
        // );
    }
    {
        function minIslands(array) {
            let minSize = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (!unVisitedLand(arr, [i, j], visited))
                        continue;
                    const size = getIslandSize(arr, [i, j], visited);
                    if (size < minSize)
                        minSize = size;
                }
            }
            return minSize;
        }
        function getIslandSize(arr, [i, j], visited) {
            if (!unVisitedLand(arr, [i, j], visited))
                return 0;
            visited.add([i, j].join(','));
            let size = 1;
            size += getIslandSize(arr, [i - 1, j], visited);
            size += getIslandSize(arr, [i + 1, j], visited);
            size += getIslandSize(arr, [i, j - 1], visited);
            size += getIslandSize(arr, [i, j + 1], visited);
            return size;
        }
        const unVisitedLand = (arr, [i, j], visited) => {
            if (i < 0 || i >= arr.length)
                return false;
            if (j < 0 || j >= arr[i].length)
                return false;
            if (arr[i][j] === 'w')
                return false;
            if (visited.has([i, j].join(',')))
                return false;
            return true;
        };
        console.log(minIslands(arr));
    }
    {
        function minIslands(array) {
            let minSize = Infinity;
            const visited = new Set();
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (!unVisitedLand(arr, [i, j], visited))
                        continue;
                    const size = getIslandSize(arr, [i, j], visited);
                    if (size < minSize)
                        minSize = size;
                }
            }
            return minSize;
        }
        function getIslandSize(arr, [row, col], visited) {
            let size = 0;
            const stack = [[row, col]];
            while (stack.length > 0) {
                const [i, j] = stack.pop();
                if (!unVisitedLand(arr, [i, j], visited))
                    continue;
                visited.add([i, j].join(','));
                stack.push([i - 1, j]);
                stack.push([i + 1, j]);
                stack.push([i, j - 1]);
                stack.push([i, j + 1]);
                size += 1;
            }
            return size;
        }
        const unVisitedLand = (arr, [i, j], visited) => {
            if (i < 0 || i >= arr.length)
                return false;
            if (j < 0 || j >= arr[i].length)
                return false;
            if (arr[i][j] === 'w')
                return false;
            if (visited.has([i, j].join(',')))
                return false;
            return true;
        };
        console.log(minIslands(arr));
    }
}
export const __ = '__';
