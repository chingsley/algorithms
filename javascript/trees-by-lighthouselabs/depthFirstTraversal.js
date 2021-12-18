class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  depthFirstTraversal() {
    console.log(this);

    for (const childNode of this.children) {
      childNode.depthFirstTraversal();
    }
  }
}