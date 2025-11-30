// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    let prevNode = null;
    while (currentNode !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        while (currentNode && currentNode.value === prevNode.value) {
            currentNode = currentNode.next;
        }
    }
    return linkedList;
}
