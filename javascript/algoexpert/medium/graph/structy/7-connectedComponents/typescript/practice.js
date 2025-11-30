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
;
;
{
    { // RECURSION
        function connectedComponents(graph) {
            const components = [];
            const visited = {};
            for (let node in graph) {
                const res = getConnectedComponents(Number(node), graph, visited);
                if (res.length > 0)
                    components.push(res);
            }
            return components;
        }
        function getConnectedComponents(node, graph, visited) {
            if (node in visited)
                return [];
            visited[node] = node;
            const array = [node];
            for (let childNode of graph[node]) {
                const result = getConnectedComponents(childNode, graph, visited);
                array.push(...result);
            }
            return array;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
        // );
    }
    { // ITERATION (DFS)
        function connectedComponents(graph) {
            const components = [];
            const visited = {};
            for (let node in graph) {
                const res = getConnectedComponents(Number(node), graph, visited);
                if (res.length > 0)
                    components.push(res);
            }
            return components;
        }
        function getConnectedComponents(node, graph, visited) {
            if (node in visited)
                return [];
            visited[node] = node;
            const stack = [node];
            const array = [node];
            while (stack.length > 0) {
                const current = stack.pop();
                for (let childNode of graph[current]) {
                    const res = getConnectedComponents(childNode, graph, visited);
                    array.push(...res);
                }
            }
            return array;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
        // );
    }
    { // ITERATION (DFS)
        function connectedComponents(graph) {
            const components = [];
            const visited = {};
            for (let node in graph) {
                const res = getConnectedComponents(Number(node), graph, visited);
                if (res.length > 0)
                    components.push(res);
            }
            return components;
        }
        function getConnectedComponents(node, graph, visited) {
            if (node in visited)
                return [];
            visited[node] = node;
            const stack = [node];
            const array = [node];
            while (stack.length > 0) {
                const current = stack.pop();
                for (let childNode of graph[current]) {
                    const res = getConnectedComponents(childNode, graph, visited);
                    array.push(...res);
                }
            }
            return array;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
        // );
    }
    { // ITERATION (BFS)
        function connectedComponents(graph) {
            const components = [];
            const visited = {};
            for (let node in graph) {
                const res = getConnectedComponents(Number(node), graph, visited);
                if (res.length > 0)
                    components.push(res);
            }
            return components;
        }
        function getConnectedComponents(node, graph, visited) {
            if (node in visited)
                return [];
            visited[node] = node;
            const queue = [node];
            const array = [node];
            while (queue.length > 0) {
                const current = queue.shift();
                for (let childNode of graph[current]) {
                    const res = getConnectedComponents(childNode, graph, visited);
                    array.push(...res);
                }
            }
            return array;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
        // );
    }
    { // RECURSION (METHOD 1) - PREFERRED (no spread operator which can incure additional time cost)
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function connectedComponents(graph) {
            const array = [];
            const visited = new Set();
            for (let node in graph) {
                const components = getComponents(Number(node), graph, visited, []);
                if (components.length > 0)
                    array.push(components);
            }
            return array;
        }
        function getComponents(node, graph, visited, components) {
            if (visited.has(node))
                return [];
            visited.add(node);
            components.push(node);
            for (let childNode of graph[node]) {
                if (!visited.has(childNode)) {
                    getComponents(childNode, graph, visited, components);
                }
            }
            return components;
        }
        ;
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
        // );
    }
    { // RECURSION (METHOD 2)
        function connectedComponents(graph) {
            const array = [];
            const visited = new Set();
            for (let node in graph) {
                const components = getComponents(Number(node), graph, visited);
                if (components.length > 0)
                    array.push(components);
            }
            return array;
        }
        function getComponents(node, graph, visited) {
            if (visited.has(node))
                return [];
            visited.add(node);
            const arr = [node];
            for (let childNode of graph[node]) {
                if (!visited.has(childNode)) {
                    const res = getComponents(childNode, graph, visited);
                    arr.push(...res);
                }
            }
            return arr;
        }
        ;
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
        // );
    }
    {
        function connectedComponents(graph) {
            const groups = [];
            const visited = new Set();
            for (let node in graph) {
                if (visited.has(Number(node)))
                    continue;
                const stack = [Number(node)];
                const array = [];
                while (stack.length > 0) {
                    const current = stack.pop();
                    array.push(current);
                    visited.add(current);
                    for (let childNode of graph[current]) {
                        if (!visited.has(childNode))
                            stack.push(childNode);
                    }
                }
                groups.push(array);
            }
            return groups;
        }
        ;
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
        // );
    }
    {
        function connectedComponents(graph) {
            const result = [];
            const visited = new Set();
            for (let key in graph) {
                const components = getComponents(Number(key), graph, visited);
                if (components.length > 0)
                    result.push(components);
            }
            return result;
        }
        function getComponents(src, graph, visited) {
            if (visited.has(src))
                return [];
            visited.add(src);
            const components = [src];
            for (let node of graph[src]) {
                components.push(...getComponents(node, graph, visited));
            }
            return components;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
        // );
    }
    {
        function connectedComponents(graph) {
            const result = [];
            const visited = new Set();
            for (let key in graph) {
                const components = getComponents(Number(key), graph, visited);
                if (components.length > 0)
                    result.push(components);
            }
            return result;
        }
        function getComponents(src, graph, visited) {
            const stack = [src];
            const components = [];
            while (stack.length > 0) {
                const current = stack.pop();
                if (visited.has(current))
                    continue;
                visited.add(current);
                components.push(current);
                stack.push(...graph[current]);
            }
            return components;
        }
        // console.log(
        //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
        // );
    }
    {
        function connectedComponents(graph) {
            const array = [];
            const visited = new Set();
            for (let key in graph) {
                if (visited.has(Number(key)))
                    continue;
                array.push(getConnectedComponents(graph, Number(key), visited));
            }
            return array;
        }
        function getConnectedComponents(graph, node, visited) {
            visited.add(node);
            const result = [node];
            for (let nd of graph[node]) {
                if (visited.has(nd))
                    continue;
                result.push(...getConnectedComponents(graph, nd, visited));
            }
            return result;
        }
        console.log(connectedComponents(testGraph));
    }
    {
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function connectedComponents(graph) {
            const array = [];
            const visited = new Set();
            for (let key in graph) {
                if (visited.has(Number(key)))
                    continue;
                const curr = [];
                getConnectedComponents(graph, Number(key), visited, curr);
                array.push(curr);
            }
            return array;
        }
        function getConnectedComponents(graph, node, visited, curr) {
            visited.add(node);
            curr.push(node);
            for (let nd of graph[node]) {
                if (visited.has(nd))
                    continue;
                getConnectedComponents(graph, nd, visited, curr);
            }
            ;
        }
        console.log(connectedComponents(testGraph));
    }
    {
        // O(e) time | O(n) space
        // e = no. of edges | n = no. of nodes
        function connectedComponents(graph) {
            const array = [];
            const visited = new Set();
            for (let key in graph) {
                if (visited.has(Number(key)))
                    continue;
                const conn = getConnectedComponents(graph, Number(key), visited);
                array.push(conn);
            }
            return array;
        }
        function getConnectedComponents(graph, node, visited) {
            const conn = [];
            const stack = [node];
            while (stack.length > 0) {
                const current = stack.pop();
                if (visited.has(current))
                    continue;
                visited.add(current);
                conn.push(current);
                stack.push(...graph[current]);
            }
            return conn;
        }
        console.log(connectedComponents(testGraph));
    }
}
export {};
