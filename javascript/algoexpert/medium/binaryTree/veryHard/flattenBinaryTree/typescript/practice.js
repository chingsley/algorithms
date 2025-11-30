{
    {
        // This is the class of the input root. Do not edit it.
        class BinaryTree {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        // O(n) time | O(d) space (n = no. of nodes in tree, d = depth of tree)
        function flattenBinaryTree(root) {
            const [leftMost, _] = flattenNode(root);
            return leftMost;
        }
        function flattenNode(node) {
            let leftMost, rightMost;
            if (node.left === null) {
                leftMost = node;
            }
            else {
                const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenNode(node.left);
                connect(leftSubtreeRightMost, node);
                leftMost = leftSubtreeLeftMost;
            }
            if (node.right === null) {
                rightMost = node;
            }
            else {
                const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenNode(node.right);
                connect(node, rightSubtreeLeftMost);
                rightMost = rightSubtreeRightMost;
            }
            return [leftMost, rightMost];
        }
        function connect(leftNode, rightNode) {
            [leftNode.right, rightNode.left] = [rightNode, leftNode];
        }
    }
}
