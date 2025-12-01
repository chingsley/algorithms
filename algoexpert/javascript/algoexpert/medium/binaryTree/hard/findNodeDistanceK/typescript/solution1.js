// This is an input class. Do not edit.
export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(n) space (n = no. of nodes in tree)
export function findNodesDistanceK(tree, target, k) {
    const parents = {};
    buildParentsHash(tree, null, parents);
    const targetNode = getTargetNode(tree, parents, target);
    const queue = [[targetNode, 0]];
    const seen = new Set();
    const result = [];
    while (queue.length > 0) {
        const log = queue.map(([b, v]) => [b.value, v]);
        console.log(log);
        const [node, distance] = queue.shift();
        seen.add(node.value);
        if (distance === k) {
            result.push(node.value);
        }
        else {
            const parent = parents[node.value];
            if (parent && !seen.has(parent.value))
                queue.push([parent, distance + 1]);
            if (node.left !== null && !seen.has(node.left.value))
                queue.push([node.left, distance + 1]);
            if (node.right !== null && !seen.has(node.right.value))
                queue.push([node.right, distance + 1]);
        }
    }
    return result;
}
function buildParentsHash(node, parent, parents) {
    if (node === null)
        return;
    parents[node.value] = parent;
    buildParentsHash(node.left, node, parents);
    buildParentsHash(node.right, node, parents);
}
function getTargetNode(root, parents, target) {
    let targetNode;
    let targetNodeParent = parents[target];
    if (targetNodeParent === null) {
        targetNode = root;
    }
    else {
        targetNode = targetNodeParent.left;
        if (targetNode === null || targetNode.value !== target) {
            targetNode = targetNodeParent.right;
        }
    }
    return targetNode;
}
