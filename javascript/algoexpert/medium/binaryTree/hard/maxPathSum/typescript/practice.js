export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
{
    {
        // O(n) time | O(d) space
        function maxPathSum(tree) {
            const treeInfo = { max: -Infinity };
            calcMaxPathSum(tree, treeInfo);
            return treeInfo.max;
        }
        function calcMaxPathSum(tree, treeInfo) {
            if (tree === null)
                return 0;
            const left = calcMaxPathSum(tree.left, treeInfo);
            const right = calcMaxPathSum(tree.right, treeInfo);
            const maxAtNode = Math.max(tree.value, tree.value + left, tree.value + right, tree.value + left + right);
            treeInfo.max = Math.max(treeInfo.max, maxAtNode);
            return Math.max(tree.value, tree.value + left, tree.value + right);
        }
        ;
    }
    {
        class BinaryTree {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        // O(n) time | O(d) space (n = no. of nodes, d = depth of tree)
        function maxPathSum(tree) {
            const [currMaxPathSum, _] = maxPathSumHelper(tree);
            return currMaxPathSum;
        }
        function maxPathSumHelper(node) {
            if (node === null)
                return [-Infinity, -Infinity];
            if (node.left === null && node.right === null) {
                return [node.value, node.value];
            }
            const [leftMaxSum, leftMaxPathSum] = maxPathSumHelper(node.left);
            const [rightMaxSum, rightMaxPathSum] = maxPathSumHelper(node.right);
            const currMaxSum = Math.max(node.value + leftMaxPathSum, node.value + rightMaxPathSum, node.value + leftMaxPathSum + rightMaxPathSum, leftMaxSum, rightMaxSum);
            return [
                currMaxSum,
                Math.max(node.value + leftMaxPathSum, node.value + rightMaxPathSum) // runningMaxPathSum
            ];
        }
    }
}
