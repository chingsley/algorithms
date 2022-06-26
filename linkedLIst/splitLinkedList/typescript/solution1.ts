import { Node, LinkedList } from "../../buildLinkedList/typescript/solution3";




// For odd-length lists, list2 will be greater in lnegth
function splitLinkedList(head: Node): [Node | null, Node | null] {
  let [prev, slow, fast] = [head, head, head];

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // handle a one-node List
  if (slow.next === null && slow === fast) return [head, null];

  prev.next = null;
  return [head, slow];
}


// For odd-length lists, list1 will be greater in lnegth
function splitLinkedList2(head: Node): [Node | null, Node | null] {
  let [prev, slow, fast] = [head, head, head];
  let result: [Node | null, Node | null] = [head, null];

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast === null) {
    prev.next = null;
    result[1] = slow;
  } else {
    result[1] = slow.next;
    slow.next = null;
  }

  return result;
}


const list = new LinkedList([1, 2, 3, 4]);
const [h1, h2] = splitLinkedList(list.head);

console.log(h1);
console.log(h2);
h1 && h1.print();
h2 && h2.print();