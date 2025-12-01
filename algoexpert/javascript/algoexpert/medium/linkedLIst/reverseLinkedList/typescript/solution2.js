import { LinkedList } from "../../buildLinkedList/typescript/solution3";
// O(n) time, O(n) space
// n = no. of nodes in the list
function reverseLinkedList(head, prev = null) {
    if (head === null)
        return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}
// node: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// index  0 ->  1 ->  2 ->  3 ->  4 ->  5
const list = new LinkedList([10, 11, 12, 13, 14, 15]);
// list.print();
const result = reverseLinkedList(list.head);
console.log('result = ', result);
list.print();
// console.log(reverseLinkedList(list.head));
