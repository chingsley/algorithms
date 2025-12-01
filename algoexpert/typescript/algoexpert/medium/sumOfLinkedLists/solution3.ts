import List from '../../../../linkedLIst/buildLinkedList/typescript/solution2';

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let sum = linkedListOne.value + linkedListTwo.value;
  let carry = Math.floor(sum / 10);
  const head = new LinkedList(sum % 10);
  sumLIst(head, linkedListOne.next, linkedListTwo.next, carry);
  return head;
}

function sumLIst(head: LinkedList, list1: LinkedList | null, list2: LinkedList | null, carry: number) {
  if (!list1 && !list2 && carry < 1) return null;
  let sum = (list1 ? list1.value : 0) + (list2 ? list2.value : 0) + carry;
  head.next = new LinkedList(sum % 10);
  sumLIst(head.next, list1 && list1.next, list2 && list2.next, Math.floor(sum / 10));
}

const list1 = new List.LinkedList([2, 4, 7, 1]);
const list2 = new List.LinkedList([9, 4, 5]);
list1.print();
list2.print();
const newListHead = sumOfLinkedLists(list1.head, list2.head);
console.log(list1.toArray(newListHead).join(' -> '));
// 5 -> 5 -> 6
// 6 -> 4 -> 6
// 1 -> 0 -> 13