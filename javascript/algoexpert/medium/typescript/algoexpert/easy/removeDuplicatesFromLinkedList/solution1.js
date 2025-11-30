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
    let prevNode = linkedList;
    let currentNode = linkedList.next;
    while (currentNode) {
        if (prevNode.value === currentNode.value) {
            prevNode.next = currentNode.next;
            currentNode = currentNode.next;
        }
        else {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    return linkedList;
}
function printList(linkedList) {
    let currentNode = linkedList;
    let str = '';
    while (currentNode) {
        str += currentNode.value + (currentNode.next ? ' -> ' : '');
        currentNode = currentNode.next;
    }
    console.log(str);
}
let linkedList = new LinkedList(1);
linkedList.next = new LinkedList(1);
linkedList.next.next = new LinkedList(3);
linkedList.next.next.next = new LinkedList(4);
linkedList.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next.next = new LinkedList(5);
linkedList.next.next.next.next.next.next.next = new LinkedList(6);
linkedList.next.next.next.next.next.next.next.next = new LinkedList(6);
printList(linkedList);
printList(removeDuplicatesFromLinkedList(linkedList));
