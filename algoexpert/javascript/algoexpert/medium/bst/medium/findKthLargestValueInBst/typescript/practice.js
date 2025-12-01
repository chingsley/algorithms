export class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
{
    {
        // O(n) time, O(n) space
        function findKthLargestValueInBst(tree, k) {
            // traverse tree in descending order of values
            const array = reverseInorderTraverse(tree);
            // console.log(array);
            // return the kth largest value by index since array is sorted in descending order
            return array[k - 1];
        }
        function reverseInorderTraverse(tree, array = []) {
            if (!tree)
                return;
            reverseInorderTraverse(tree.right, array);
            array.push(tree.value);
            reverseInorderTraverse(tree.left, array);
            return array;
        }
    }
    {
        // O(n) time | O(d + k) space 
        // n = no. of nodes
        // d = depth of tree
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            reverseInOrderTraverse(tree, array, k);
            console.log(array);
            return array[k - 1];
        }
        function reverseInOrderTraverse(tree, array, k) {
            if (tree === null || array.length >= k)
                return;
            reverseInOrderTraverse(tree.right, array, k);
            if (array.length < k) {
                array.push(tree.value);
                reverseInOrderTraverse(tree.left, array, k);
            }
        }
    }
    {
        class TreeInfo {
            constructor(numberOfVisitedNodes, latestVisitedNodeValue) {
                this.numberOfVisitedNodes = numberOfVisitedNodes;
                this.latestVisitedNodeValue = latestVisitedNodeValue;
            }
        }
        // O(h + k) time, O(h) space
        // h = height of the tree
        function findKthLargestValueInBst(tree, k) {
            const treeInfo = new TreeInfo(0, -1);
            // traverse tree in descending order of values
            reverseInorderTraverse(tree, k, treeInfo);
            return treeInfo.latestVisitedNodeValue;
        }
        function reverseInorderTraverse(node, k, treeInfo) {
            if (!node || treeInfo.numberOfVisitedNodes >= k) {
                return;
            }
            reverseInorderTraverse(node.right, k, treeInfo);
            if (treeInfo.numberOfVisitedNodes < k) {
                treeInfo.numberOfVisitedNodes += 1;
                treeInfo.latestVisitedNodeValue = node.value;
                reverseInorderTraverse(node.left, k, treeInfo);
            }
        }
    }
    {
        // O(n) time (n = no. of nodes in the tree)
        // O(max(k, n)) ()
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            reverseInOrderTraversal(tree, array, k);
            console.log(array);
            return array[k - 1];
        }
        function reverseInOrderTraversal(tree, array, k) {
            if (tree === null || array.length >= k)
                return;
            reverseInOrderTraversal(tree.right, array, k);
            if (array.length < k) {
                array.push(tree.value);
                reverseInOrderTraversal(tree.left, array, k);
            }
        }
    }
    {
        // O(n) time | O(n) space
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            reverseInOrderTraverse(tree, array, k);
            return array[k - 1];
        }
        function reverseInOrderTraverse(tree, array, k) {
            if (tree === null)
                return;
            reverseInOrderTraverse(tree.right, array, k);
            array.push(tree.value);
            reverseInOrderTraverse(tree.left, array, k);
        }
    }
    {
        // O(n) time | O(max(d, k)) space (OPTIMIZED)
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            reverseInOrderTraverse(tree, array, k);
            console.log('here: ', array);
            return array[k - 1];
        }
        function reverseInOrderTraverse(tree, array, k) {
            console.log(array);
            if (tree === null)
                return;
            if (array.length > k)
                return; // --- OPTIMIZATION
            reverseInOrderTraverse(tree.right, array, k);
            array.push(tree.value);
            reverseInOrderTraverse(tree.left, array, k);
        }
    }
    {
        // O(n) time | O(n) space (without OPTIMIZATION)
        // O(n) time | O(d + k) space (with OPTIMIZATION) (d from recursive call stacks, and k from length of array)
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            reverseInorderTraverse(tree, array, k);
            return array[k - 1];
        }
        function reverseInorderTraverse(tree, array, k) {
            if (tree === null)
                return;
            reverseInorderTraverse(tree.right, array, k);
            if (array.length >= k)
                return; // optimization: Stop if kth item is reached
            array.push(tree.value);
            reverseInorderTraverse(tree.left, array, k);
        }
    }
    {
        // O(n) time | O(n) space;
        // n = no. of nodes in the tree
        function findKthLargestValueInBst(tree, k) {
            const array = [];
            traverseDescending(tree, array, k);
            return array[k - 1];
        }
        function traverseDescending(tree, array, k) {
            console.log(tab(array.length), 'traverseDescending(', tree && tree.value, ',', JSON.stringify(array), ', ', k, ')');
            if (tree === null)
                return;
            traverseDescending(tree.right, array, k);
            array.push(tree.value);
            if (array.length >= k)
                return; //----- OPTIMIZATION:
            traverseDescending(tree.left, array, k);
        }
        function tab(length) {
            let space = '';
            let count = 0;
            while (count++ < length)
                space += ' ';
            return space;
        }
    }
    {
        class BST {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        class TraversalInfo {
            constructor() {
                this.k = 0;
                this.kthLargest = 0;
            }
        }
        // O(d + k) time | O(d) space;
        // d = depth of the tree
        function findKthLargestValueInBst(tree, k) {
            const traversalInfo = new TraversalInfo();
            reverseInorderTraverse(tree, k, traversalInfo);
            return traversalInfo.kthLargest;
        }
        function reverseInorderTraverse(tree, k, trvInfo) {
            if (tree === null)
                return;
            reverseInorderTraverse(tree.right, k, trvInfo);
            if (trvInfo.k === k)
                return;
            trvInfo.kthLargest = tree.value;
            trvInfo.k += 1;
            reverseInorderTraverse(tree.left, k, trvInfo);
        }
    }
    {
        // O(n) time | O(n) space
        function findKthLargestValueInBst(tree, k) {
            const sortedNodes = [];
            visit(tree, k, sortedNodes);
            return sortedNodes[k - 1];
        }
        function visit(node, k, sortedNodes) {
            if (node === null)
                return;
            visit(node.right, k, sortedNodes);
            sortedNodes.push(node.value);
            visit(node.left, k, sortedNodes);
        }
    }
    {
        // O(h + k) time | O(h + k) space
        function findKthLargestValueInBst(tree, k) {
            const sortedNodes = [];
            visit(tree, k, sortedNodes);
            return sortedNodes[k - 1];
        }
        function visit(node, k, sortedNodes) {
            if (node === null)
                return;
            if (sortedNodes.length >= k)
                return;
            visit(node.right, k, sortedNodes);
            sortedNodes.push(node.value);
            visit(node.left, k, sortedNodes);
        }
    }
    {
        // O(h + k) time | O(h) space (space complexity due to recursive calls)
        function findKthLargestValueInBst(tree, k) {
            const visited = { count: 0, value: 0 };
            traverse(tree, k, visited);
            return visited.value;
        }
        function traverse(node, k, visited) {
            if (node === null)
                return;
            if (visited.count >= k)
                return;
            traverse(node.right, k, visited);
            visited.count += 1;
            if (visited.count === k)
                visited.value = node.value;
            traverse(node.left, k, visited);
        }
    }
}
