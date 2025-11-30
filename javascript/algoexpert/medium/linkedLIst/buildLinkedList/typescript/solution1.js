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
        let head = null;
        let currentNode = null;
        for (let i = 0; i < array.length; i++) {
            if (head === null) {
                head = new Node(array[i]);
                currentNode = head;
            }
            else {
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
