{
  {
    // Do not edit the class below except
    // for the depthFirstSearch method.
    // Feel free to add new properties
    // and methods to the class.
    class Node {
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

      depthFirstSearch(array: string[]) {
        const stack: Node[] = [this];

        while (stack.length > 0) {
          const current = stack.pop()!;
          array.push(current.name);

          for (let i = current.children.length - 1; i >= 0; i--) { // pushing in reverse, specific order is required to pass the test
            stack.push(current.children[i]);
          }
        }
        return array;
      }
    }
  }
}