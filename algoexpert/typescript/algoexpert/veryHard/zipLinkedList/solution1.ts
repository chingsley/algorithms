import LList from "../../../../linkedLIst/buildLinkedList/typescript/solution2";

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  static print(node: LinkedList) {
    const array: number[] = [];
    let curr: LinkedList | null = node;
    while (curr! !== null) {
      array.push(curr.value);
      curr = curr.next;
    }

    console.log(array.join(' -> '));
  }
}

// O(3n) time = O(n) time, O(1) spave
export function zipLinkedList(linkedList: LinkedList) {
  // if it's a linkedList of 1 node, return the list untouched
  if (linkedList.next === null) return linkedList;

  // split list => head1, head2
  const [head1, head2]: [LinkedList, LinkedList] = splitLinkedList(linkedList);

  // reverse list head2
  const revHead2: LinkedList = reverseList(head2);

  // interweave lists head1, head2
  return interweave(head1, revHead2);
}

// we expect list to contain at least 2 nodes, b/c we've handled a 1-node list in first line of zipLlinkedList
// O(n) time, O(1) spave
function splitLinkedList(head: LinkedList): [LinkedList, LinkedList] {
  let [prev, slow, fast]: [LinkedList, LinkedList, LinkedList | null] = [head, head, head];
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next!;
    fast = fast.next.next;
  }

  prev.next = null;
  return [head, slow];
}


// linkedList will contain at least 1 node
// O(n) time, O(1) spave
function reverseList(linkedList: LinkedList): LinkedList {
  let [prev, curr]: [LinkedList | null, LinkedList | null] = [null, linkedList];
  while (curr !== null) {
    let next: LinkedList | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev!;
}

// O(n) time, O(1) spave
function interweave(head1: LinkedList, head2: LinkedList): LinkedList {
  let count = 0;
  let curr = head1;
  let curr1: LinkedList | null = head1.next;
  let curr2: LinkedList | null = head2;
  while (curr1 !== null && curr2 !== null) {
    if (count % 2 === 0) {
      curr.next = curr2;
      curr2 = curr2.next;
    } else {
      curr.next = curr1;
      curr1 = curr1.next;
    }

    curr = curr.next;
    count += 1;
  }
  if (curr1 !== null) curr.next = curr1;
  if (curr2 !== null) curr.next = curr2;

  return head1;
}

const list = new LList.LinkedList([1, 2, 3, 4, 5, 6]);
// const [h1, h2] = splitLinkedList(list.head);
// console.log(list.toArray(h1));
// console.log(list.toArray(h2));
// console.log('.....\n', list.toArray(reverseList(h2)));


const res = zipLinkedList(list.head);
LinkedList.print(res);