// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// O(n) time | O(1) space
export function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
