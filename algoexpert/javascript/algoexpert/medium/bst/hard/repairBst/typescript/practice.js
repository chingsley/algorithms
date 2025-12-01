{
    {
        // O(n) time | O(h) space
        function repairBst(tree) {
            const t = { prevNode: null, nodeOne: null, nodeTwo: null };
            traverseTree(tree, t);
            [t.nodeOne.value, t.nodeTwo.value] = [t.nodeTwo.value, t.nodeOne.value];
            return tree;
        }
        function traverseTree(node, t) {
            if (node === null)
                return;
            traverseTree(node.left, t);
            if (t.prevNode !== null && node.value < t.prevNode.value) {
                if (t.nodeOne === null)
                    t.nodeOne = t.prevNode;
                t.nodeTwo = node;
            }
            t.prevNode = node;
            traverseTree(node.right, t);
        }
    }
}
export {};
