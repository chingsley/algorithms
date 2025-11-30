// This is an input class. Do not edit.
export class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new LinkedList(0);
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;
    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;
    while (nodeOne || nodeTwo || carry) {
        const valueOne = nodeOne ? nodeOne.value : 0;
        const valueTwo = nodeTwo ? nodeTwo.value : 0;
        const sumOfValues = valueOne + valueTwo + carry;
        const newNode = new LinkedList(sumOfValues % 10);
        currentNode.next = newNode;
        currentNode = newNode;
        carry = Math.floor(sumOfValues / 10);
        nodeOne = nodeOne ? nodeOne.next : null;
        nodeTwo = nodeTwo ? nodeTwo.next : null;
    }
    return newLinkedListHeadPointer.next;
}
