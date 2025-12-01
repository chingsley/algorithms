class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export default function buildTree(nodes, nodeId) {
    if (nodeId === null)
        return null;
    const node = nodes.find(({ id }) => id === nodeId);
    const bst = new BST(node.value);
    bst.left = buildTree(nodes, node.left);
    bst.right = buildTree(nodes, node.right);
    return bst;
}
;
const tree = {
    "nodes": [
        { "id": "15", "left": "5", "right": "20", "value": 15 },
        { "id": "20", "left": "17", "right": "22", "value": 20 },
        { "id": "22", "left": null, "right": null, "value": 22 },
        { "id": "17", "left": null, "right": null, "value": 17 },
        { "id": "5", "left": "2", "right": "5-2", "value": 5 },
        { "id": "5-2", "left": null, "right": null, "value": 5 },
        { "id": "2", "left": "1", "right": "3", "value": 2 },
        { "id": "3", "left": null, "right": null, "value": 3 },
        { "id": "1", "left": null, "right": null, "value": 1 }
    ],
    "root": "15",
};
// console.log(
//   buildTree(tree.nodes, tree.root)
// );
