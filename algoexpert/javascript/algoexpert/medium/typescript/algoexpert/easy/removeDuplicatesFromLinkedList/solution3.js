// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// O(n) time | O(1) space
// where n = no. of nodes in the linkedList
export function removeDuplicatesFromLinkedList(linkedList) {
    let prev = linkedList;
    let current = linkedList.next;
    while (current !== null) {
        if (prev.value === current.value) {
            prev.next = current.next;
            current = current.next;
        }
        else {
            prev = current;
            current = current.next;
        }
    }
    return linkedList;
}
