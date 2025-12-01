;
;
const testGraph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
};
{
    { // RECURSION
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function largestComponent(graph) {
            const visited = {};
            let maxCount = 0;
            for (let node in graph) {
                const size = countComponents(Number(node), graph, visited);
                if (size > maxCount)
                    maxCount = size;
            }
            return maxCount;
        }
        function countComponents(node, graph, visited) {
            if (node in visited)
                return 0;
            visited[node] = node;
            let count = 1;
            for (let childNode of graph[node]) {
                count += countComponents(childNode, graph, visited);
            }
            return count;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    { // ITERATION (DFS)
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function largestComponent(graph) {
            const visited = {};
            let maxCount = 0;
            for (let node in graph) {
                const size = countComponents(Number(node), graph, visited);
                if (size > maxCount)
                    maxCount = size;
            }
            return maxCount;
        }
        function countComponents(node, graph, visited) {
            if (node in visited)
                return 0;
            const stack = [node];
            let count = 0;
            while (stack.length > 0) {
                let current = stack.pop();
                visited[current] = current;
                for (const childNode of graph[current]) {
                    if (childNode in visited)
                        continue;
                    stack.push(childNode);
                }
                count += 1;
            }
            return count;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    { // ITERATION (BFS)
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function largestComponent(graph) {
            const visited = {};
            let maxCount = 0;
            for (let node in graph) {
                const size = countComponents(Number(node), graph, visited);
                if (size > maxCount)
                    maxCount = size;
            }
            return maxCount;
        }
        function countComponents(node, graph, visited) {
            if (node in visited)
                return 0;
            const queue = [node];
            let count = 0;
            while (queue.length > 0) {
                let current = queue.shift();
                visited[current] = current;
                for (const childNode of graph[current]) {
                    if (childNode in visited)
                        continue;
                    queue.push(childNode);
                }
                count += 1;
            }
            return count;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        function largestComponent(graph) {
            let max = 0;
            const visited = new Set();
            for (let node in graph) {
                const size = countComponents(Number(node), graph, visited);
                if (size > max)
                    max = size;
            }
            return max;
        }
        function countComponents(node, graph, visited) {
            if (visited.has(node))
                return 0;
            visited.add(node);
            let count = 1;
            for (let childNode of graph[node]) {
                if (!visited.has(childNode)) {
                    count += countComponents(childNode, graph, visited);
                }
            }
            return count;
        }
        ;
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        function largestComponent(graph) {
            let max = 0;
            const visited = new Set();
            for (let node in graph) {
                if (visited.has(Number(node)))
                    continue;
                const stack = [Number(node)];
                let count = 0;
                while (stack.length > 0) {
                    const current = stack.pop();
                    visited.add(current);
                    for (let node of graph[current]) {
                        if (!visited.has(node)) {
                            stack.push(node);
                        }
                    }
                    count += 1;
                }
                // console.log({ count });
                if (count > max)
                    max = count;
            }
            return max;
        }
        ;
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        function largestComponent(graph) {
            let largestSize = -Infinity;
            const visited = new Set();
            for (let key in graph) {
                const size = getSize(Number(key), graph, visited);
                if (size > largestSize)
                    largestSize = size;
            }
            return largestSize;
        }
        function getSize(src, graph, visited) {
            if (visited.has(src))
                return 0;
            visited.add(src);
            let size = 1;
            for (let node of graph[src]) {
                size += getSize(node, graph, visited);
            }
            return size;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        // O(e) time | O(n) space;
        // e = no. of edges
        // n = no. of vertices
        function largestComponent(graph) {
            let largestSize = 0;
            const visited = new Set();
            for (let key in graph) {
                const node = Number(key);
                if (visited.has(node))
                    continue;
                const size = calcSize(graph, node, visited);
                if (size > largestSize)
                    largestSize = size;
            }
            return largestSize;
        }
        function calcSize(graph, node, visited) {
            visited.add(node);
            let size = 1;
            for (let nd of graph[node]) {
                if (visited.has(nd))
                    continue;
                size += calcSize(graph, nd, visited);
            }
            return size;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        // O(e) time | O(n) space;
        // e = no. of edges
        // n = no. of vertices
        function largestComponent(graph) {
            let largestSize = 0;
            const visited = new Set();
            for (let key in graph) {
                const node = Number(key);
                const size = calcSize(graph, node, visited);
                if (size > largestSize)
                    largestSize = size;
            }
            return largestSize;
        }
        function calcSize(graph, node, visited) {
            if (visited.has(node))
                return 0;
            visited.add(node);
            let size = 1;
            for (let nd of graph[node]) {
                size += calcSize(graph, nd, visited);
            }
            return size;
        }
        // console.log(
        //   largestComponent(testGraph), // expect 5,
        // );
    }
    {
        function largestComponent(graph) {
            let largestSize = 0;
            const visited = new Set();
            for (let key in graph) {
                const node = Number(key);
                const size = calcSize(graph, node, visited);
                if (size > largestSize)
                    largestSize = size;
            }
            return largestSize;
        }
        function calcSize(graph, node, visited) {
            const stack = [node];
            let size = 0;
            while (stack.length > 0) {
                const current = stack.pop();
                if (visited.has(current))
                    continue;
                visited.add(current);
                stack.push(...graph[current]);
                size += 1;
            }
            return size;
        }
        console.log(largestComponent(testGraph));
    }
}
export const _ = '_'; // just to make this file a module and avoid dupliate warnings
