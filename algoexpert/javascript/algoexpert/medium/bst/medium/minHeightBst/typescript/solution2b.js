// * NOTE: THIS QUESTIN IS SAME AS RECONSTRUCTING A BST FROM AN IN-ORDER TRAVERSAL
// O(n) time | O(n) space
export function minHeightBst(array) {
    return construct(array, 0, array.length - 1);
}
function construct(array, startIdx, endIdx) {
    if (startIdx > endIdx)
        return null;
    const midIdx = Math.floor((endIdx + startIdx) / 2);
    const val = array[midIdx];
    const left = construct(array, startIdx, midIdx - 1);
    const right = construct(array, midIdx + 1, endIdx);
    return new BST(val, left, right);
}
class BST {
    // NOTE: the constructor here (solution2b) takes 3 arguments, unlike the the case in solutin2
    // See how tht affects the 'construct' recursive function (line 13)
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new BST(value);
            }
            else {
                this.right.insert(value);
            }
        }
    }
}
