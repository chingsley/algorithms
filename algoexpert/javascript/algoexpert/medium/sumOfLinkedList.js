// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedListHeaderPointer = new LinkedList(0);
  let currentNode = newLinkedListHeaderPointer;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  // let [val, carry] = addNodes(nodeOne, nodeTwo);

  let [val, carry] = [null, 0];
  while (nodeOne || nodeTwo || carry !== 0) {
    [val, carry] = addNodes(nodeOne, nodeTwo, carry);
    console.log({ carry });

    let newNode = new LinkedList(val);
    currentNode.next = newNode;
    currentNode = newNode;

    nodeOne = nodeOne ? nodeOne.next : null;
    nodeTwo = nodeTwo ? nodeTwo.next : null;
  }

  return newLinkedListHeaderPointer.next;
}

function valueOf(node) {
  return node ? node.value : 0;
}

function addNodes(node1, node2, carry = 0) {
  let sum = valueOf(node1) + valueOf(node2) + carry;
  return [sum % 10, Math.floor(sum / 10)];
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
