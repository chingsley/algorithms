// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// O(n) time | O(n) space
export function reverseLinkedList(head, prev = null) {
    if (head === null)
        return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}
