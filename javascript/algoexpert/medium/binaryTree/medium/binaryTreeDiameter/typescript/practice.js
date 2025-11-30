{
    {
        // O(n) time
        // O(d) space (recursive calls)
        // n = no. of nodes in tree
        // d = depth or height of the tree
        function binaryTreeDiameter(tree) {
            const treeInfo = new TreeInfo();
            getDiameterInTree(tree, treeInfo);
            return treeInfo.maxDiameter;
        }
        function getDiameterInTree(tree, treeInfo) {
            if (tree === null)
                return 0;
            const leftHeight = getDiameterInTree(tree.left, treeInfo);
            const rightHeight = getDiameterInTree(tree.right, treeInfo);
            const diameter = leftHeight + rightHeight;
            if (diameter > treeInfo.maxDiameter) {
                treeInfo.maxDiameter = diameter;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        }
        class TreeInfo {
            constructor() {
                this.maxDiameter = -Infinity;
            }
        }
    }
    {
        // O(n) time
        // O(d) space (recursive calls)
        // n = no. of nodes in tree
        // d = depth or height of the tree
        function binaryTreeDiameter(tree) {
            const treeInfo = { maxDiameter: -Infinity };
            getDiameterInTree(tree, treeInfo);
            return treeInfo.maxDiameter;
        }
        function getDiameterInTree(tree, treeInfo) {
            if (tree === null)
                return 0;
            const leftHeight = getDiameterInTree(tree.left, treeInfo);
            const rightHeight = getDiameterInTree(tree.right, treeInfo);
            const diameter = leftHeight + rightHeight;
            if (diameter > treeInfo.maxDiameter) {
                treeInfo.maxDiameter = diameter;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
    {
        // O(n) time | O(d) space
        function binaryTreeDiameter(tree) {
            return traverse(tree)[0];
        }
        function traverse(tree) {
            if (tree === null)
                return [0, 0];
            const [leftMaxDiam, leftHeight] = traverse(tree.left);
            const [rightMaxDiam, rightHeight] = traverse(tree.right);
            const diameterAtNode = leftHeight + rightHeight;
            return [
                Math.max(diameterAtNode, leftMaxDiam, rightMaxDiam),
                Math.max(leftHeight, rightHeight) + 1
            ];
        }
    }
    {
        // O(n) time | O(d) space
        function binaryTreeDiameter(tree) {
            const treeInfo = new TreeInfo();
            traverse(tree, treeInfo);
            return treeInfo.maxDiameter;
        }
        function traverse(tree, treeInfo) {
            if (tree === null)
                return 0;
            const left = traverse(tree.left, treeInfo);
            const right = traverse(tree.right, treeInfo);
            treeInfo.maxDiameter = Math.max(treeInfo.maxDiameter, left + right);
            return Math.max(left, right) + 1;
        }
        class TreeInfo {
            constructor() {
                this.maxDiameter = -Infinity;
            }
        }
    }
    {
        // O(n) time | O(d) space (n = no. of nodes, d = depth of the tree)
        function binaryTreeDiameter(tree) {
            const [depthOfLeftSubtree, longestPathInLeftSubtree] = parseTree(tree.left);
            const [depthOfRightSubtree, longestPathInRightSubtree] = parseTree(tree.right);
            return Math.max(longestPathInLeftSubtree, longestPathInRightSubtree, depthOfLeftSubtree + depthOfRightSubtree);
        }
        function parseTree(node) {
            if (node === null)
                return [0, 0];
            const [depthOfLeftSubtree, longestPathInLeftSubtree] = parseTree(node.left);
            const [depthOfRightSubtree, longestPathInRightSubtree] = parseTree(node.right);
            let pathAtCurrentNode = 0;
            if (node.right && node.left) {
                pathAtCurrentNode = depthOfLeftSubtree + depthOfRightSubtree;
            }
            const maxPathAtCurrentNode = Math.max(longestPathInLeftSubtree, longestPathInRightSubtree, pathAtCurrentNode);
            const depthAtCurrentNode = 1 + Math.max(depthOfLeftSubtree, depthOfRightSubtree);
            return [depthAtCurrentNode, maxPathAtCurrentNode];
        }
    }
    {
        // O(n) time | O(d) space (n = no. of nodes, d = depth of the tree)
        function binaryTreeDiameter(tree) {
            const [maxDaimeter] = parseTree(tree);
            return maxDaimeter;
        }
        function parseTree(node) {
            if (node === null)
                return [0, 0];
            const [leftMaxDiam, leftMaxPath] = parseTree(node.left);
            const [rightMaxDiam, rightMaxPath] = parseTree(node.right);
            return [
                Math.max(leftMaxDiam, rightMaxDiam, leftMaxPath + rightMaxPath),
                1 + Math.max(leftMaxPath, rightMaxPath)
            ];
        }
    }
}
export {};
