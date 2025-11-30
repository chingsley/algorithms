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
        // O(n) time | O(h) space (n = no. of nodes, h = height of tree)
        function rightSiblingTree(root) {
            traverse(root, null, false);
            return root;
        }
        function traverse(node, parent, isLeftNode) {
            if (node === null)
                return;
            traverse(node.left, node, true);
            const prevRightChild = node.right;
            if (isLeftNode) {
                node.right = parent.right;
            }
            else {
                if (parent === null || parent.right === null) {
                    node.right = null;
                }
                else {
                    node.right = parent.right.left;
                }
            }
            traverse(prevRightChild, node, false);
        }
    }
}
