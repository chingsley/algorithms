export class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

}

export class LinkedList {
  head: Node | null;

  constructor(array: number[]) {
    this.head = this.buildList(array);
  }

  // O(n) time, O(1) space
  buildList(array: number[]): Node | null {
    let head: Node | null = null;
    let currentNode: Node | null = null;
    for (let i = 0; i < array.length; i++) {
      if (head === null) {
        head = new Node(array[i]);
        currentNode = head;
      } else {
        const node = new Node(array[i]);
        currentNode.next = node;
        currentNode = node;
      }
    }
    return head;
  }
}

export default {
  LinkedList,
  Node,
};