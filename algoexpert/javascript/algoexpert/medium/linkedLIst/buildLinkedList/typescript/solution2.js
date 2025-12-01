export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export class LinkedList {
    constructor(array) {
        this.head = this.buildList(array);
    }
    // O(n) time, O(1) space
    buildList(array) {
        if (array.length < 1)
            return null;
        let head = new Node(array[0]);
        let currentNode = head;
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
    reverseLinkedList(head) {
        let current = head;
        let prev = null;
        while (current !== null) {
            const next = current.next;
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
    removeKthNodeFromEnd(k) {
        let counter = 1;
        let prev0 = null; // node prior to node-to-remove
        let prev1 = this.head; // nod-to-remove
        let current = this.head;
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
            this.head.value = this.head.next.value;
            this.head.next = this.head.next.next;
        }
        else {
            prev0.next = prev1.next;
        }
    }
    // O(n) time, O(1) space
    toArray(head) {
        const arr = [];
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
