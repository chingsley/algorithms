import List from '../../../../linkedLIst/buildLinkedList/typescript/solution2';
// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// O(n) time, O(n) space
export function removeKthNodeFromEnd(head, k) {
    const current = getStep(head, k);
    let [prev0, prev1] = traverse(null, head, current);
    if (prev0 == null) { // then prev1 is at head
        head.value = head.next.value;
        head.next = head.next.next;
    }
    else {
        prev0.next = prev1.next;
    }
    return head;
}
function getStep(head, k) {
    if (k === 1)
        return head;
    getStep(head.next, k - 1);
}
function traverse(p0, p1, current) {
    if (current.next === null)
        return [p0, p1];
    traverse(p1, p1.next, current.next);
}
const list = new List.LinkedList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
list.print();
list.removeKthNodeFromEnd(10);
list.print();
// removeKthNodeFromEnd(list.head, 4);
