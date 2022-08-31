// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      array.push(currentNode!.name);

      for (const node of currentNode!.children) {
        queue.push(node);
      }
    }
    return array;
  }
}

