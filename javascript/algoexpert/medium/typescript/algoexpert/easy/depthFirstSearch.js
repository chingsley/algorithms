// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
    // O(v+e) time, O(v) space
    // where v = no. of vertices (or nodes)
    // 			 e = no. of edges
    depthFirstSearch(array) {
        array.push(this.name);
        for (let child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}
