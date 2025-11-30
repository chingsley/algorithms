{
    function repairBst(tree) {
        let arr = [null, null, null];
        traverseTree(tree, arr);
        const [prevNode, nodeOne, nodeTwo] = arr;
        [nodeOne.value, nodeTwo.value] = [nodeTwo.value, nodeOne.value];
        return tree;
    }
    function traverseTree(node, arr) {
        if (node === null)
            return;
        traverseTree(node.left, arr);
        if (arr[0] !== null && node.value < arr[0].value) {
            if (arr[1] === null)
                arr[1] = arr[0];
            arr[2] = node;
        }
        arr[0] = node;
        traverseTree(node.right, arr);
    }
}
export {};
