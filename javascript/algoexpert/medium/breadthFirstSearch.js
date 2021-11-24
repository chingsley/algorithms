// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v+e) time, O(v) space
  // v = number of vertices in the tree
  // e = number of edges in the tree
  breadthFirstSearch(array) {
    const queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);

      for (let child of current.children) {
        queue.push(child);
      }
    }

    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;