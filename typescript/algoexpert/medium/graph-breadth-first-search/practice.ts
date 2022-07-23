{
  {
    // Do not edit the class below except
    // for the breadthFirstSearch method.
    // Feel free to add new properties
    // and methods to the class.
    class Node {
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

      /**
       * Time: O(e) time (e = no. of edges)
       * Space: O(n) space (n = no. of nodes)
       * @param array string[]
       * @returns string[]
       */
      breadthFirstSearch(array: string[]) {
        const queue: Node[] = [this];

        while (queue.length > 0) {
          const current = queue.shift()!;

          array.push(current.name);

          for (let child of current.children) {
            queue.push(child);
          }
        }
        return array;
      }
      breadthFirstSearch2(array: string[]) {
        const queue: Node[] = [this];
        while (queue.length > 0) {
          const current = queue.shift()!;
          array.push(current.name);

          queue.push(...current.children);
        }
        return array;
      }
    }

  }
}
