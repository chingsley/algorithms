// This is an input class. Do not edit.
export class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class TreeInfo {
    constructor(rootIdx) {
        this.rootIdx = rootIdx;
    }
}
// O(n) time | o(h) space (no considering output tree, but only as a result of the recursive calls),
// O(n) time | o(n) space (considering output tree. This is the actual space complexity),
// where h is the height of the tree (and is due to recursive calls)
// where n is the length of the input array
export function reconstructBst(preOrderTraversalValues) {
    const treeInfo = new TreeInfo(0);
    return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}
function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
    if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) {
        return null;
    }
    const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
    if (rootValue < lowerBound || rootValue >= upperBound) {
        return null;
    }
    currentSubtreeInfo.rootIdx += 1;
    const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
    const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
    return new BST(rootValue, leftSubtree, rightSubtree);
}
