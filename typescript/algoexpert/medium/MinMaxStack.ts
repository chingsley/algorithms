// Feel free to add new properties and methods to the class.
export class MinMaxStack {
  stack: number[] = [];
  min: number[] = [];
  max: number[] = [];

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.min.pop();
    this.max.pop();
    return this.stack.pop();
  }

  push(number: number) {
    this.stack.push(number);
    const currentMin = this.getMin() === undefined ? Infinity : this.getMin();
    const currentMax = this.getMax() === undefined ? -Infinity : this.getMax();
    const newMin = number < currentMin ? number : currentMin;
    const newMax = number > currentMax ? number : currentMax;
    this.min.push(newMin);
    this.max.push(newMax);
    return null;
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}

const minMaxStack = new MinMaxStack();
console.log(minMaxStack.push(5));
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.peek());
console.log(minMaxStack.push(5));
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.peek());
console.log(minMaxStack.push(5));
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.peek());
console.log(minMaxStack.push(5));
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.peek());
console.log(minMaxStack.push(5));
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.peek());
