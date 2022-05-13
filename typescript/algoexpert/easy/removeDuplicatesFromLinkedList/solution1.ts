// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
// where n = no. of nodes in the linkedList
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let prevNode: LinkedList | null = linkedList;
  let currentNode: LinkedList | null = linkedList.next;

  while (currentNode) {
    if (prevNode.value === currentNode.value) {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}

function printList(linkedList: LinkedList) {
  let currentNode = linkedList;
  let str: string = '';
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
