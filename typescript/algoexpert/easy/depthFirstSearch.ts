// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v+e) time, O(v) space
  // where v = no. of vertices (or nodes)
  // 			 e = no. of edges
  depthFirstSearch(array: string[]) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }

  // depthFirstSearch(array: string[], node: Node) {
  //   node = node ? node : this;
  //   array.push(node.name);
  //   for (let child of node.children) {
  //     this.depthFirstSearch(array, child);
  //   }
  // console.log(array)
  //   return array;
  // }
}
