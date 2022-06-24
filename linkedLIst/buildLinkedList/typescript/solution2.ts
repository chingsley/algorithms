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
    if (array.length < 1) return null;
    let head: Node = new Node(array[0]);
    let currentNode: Node = head;

    let idx = 1;
    while (array[idx]) {
      currentNode.next = new Node(array[idx]);
      currentNode = currentNode.next;
      idx += 1;
    }

    return head;
  }

  reverse() {
    this.head = this.reverseLinkedList(this.head);
  }

  // O(n) time, O(1) space
  reverseLinkedList(head: Node | null): Node | null {
    let current = head;
    let prev: Node | null = null;
    while (current !== null) {
      const next: Node | null = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  print() {
    const array = this.toArray(this.head);
    console.log(array.join(' -> '));
  }

  removeKthNodeFromEnd(k: number) {
    let counter = 1;
    let prev0: Node | null = null; // node prior to node-to-remove
    let prev1: Node = this.head; // nod-to-remove
    let current: Node | null = this.head;
    while (counter < k && current !== null) {

      current = current.next;
      counter += 1;
    }

    while (current.next !== null) {
      prev0 = prev1;
      prev1 = prev1.next;
      current = current.next;

    }
    console.log(current.value);
    console.log(prev1.value);
    if (prev0 == null) { // then prev1 is at this.head
      this.head.value = this.head.next!.value;
      this.head.next = this.head.next!.next;
    } else {
      prev0.next = prev1.next;
    }
  }

  // O(n) time, O(1) space
  toArray(head: Node | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

const testRun = () => {
  // node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
  // index  0 ->  1 ->  2 ->  3 ->  4 ->  5
  const list = new LinkedList([10, 11, 12, 13, 14, 15]);
  list.print();
  list.reverse();
  list.print();
};

// testRun();


export default {
  LinkedList,
  Node,
};