// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currentNode: LinkedList | null = linkedList;
  let prevNode: LinkedList | null = null;
  while (currentNode !== null) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    while (currentNode && currentNode.value === prevNode.value) {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}