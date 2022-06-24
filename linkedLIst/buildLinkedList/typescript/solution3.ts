/**
 * Recursive Solution
 */
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

  // O(n) time, O(n) space
  buildList(array: number[], currentIdx = 0): Node | null {
    if (array.length < 1) return null;
    if (!array[currentIdx]) return null;
    let head: Node = new Node(array[currentIdx]);
    head.next = this.buildList(array, currentIdx + 1);

    return head;
  }

  reverse() {
    this.head = this.reverseLinkedList(this.head);
  }

  // O(n) time, O(n) space
  reverseLinkedList(head: Node | null, prev: Node | null = null): Node | null {
    if (head === null) return prev;
    const next: Node | null = head.next;
    head.next = prev;
    return this.reverseLinkedList(next, head);
  }

  print() {
    const array = this.toArray(this.head);
    console.log(array.join(' -> '));
  }

  // O(n) time, O(n) space
  toArray(node: Node | null, arr: number[] = []): number[] {
    if (node === null) return arr;
    arr = [...arr, node.value];
    return this.toArray(node.next, arr);
  }
}

// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const testRun = () => {
  const list = new LinkedList([10, 11, 12, 13, 14, 15]);
  list.print();
  list.reverse();
  list.print();
};

// testRun();
