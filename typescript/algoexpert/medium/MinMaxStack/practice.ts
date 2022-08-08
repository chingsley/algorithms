{
  {
    // Feel free to add new properties and methods to the class.
    class MinMaxStack {
      min: number[];
      max: number[];
      stack: number[];
      constructor() {
        this.min = [];
        this.max = [];
        this.stack = [];
      }
      peek() {
        return this.stack[this.stack.length - 1];
      }

      pop() {
        const num = this.stack.pop();
        if (num === this.getMin()) this.min.pop();
        if (num === this.getMax()) this.max.pop();
        return num;
      }

      push(number: number) {
        this.stack.push(number);
        if (this.min.length === 0 || number <= this.getMin()) {
          this.min.push(number);
        }
        if (this.max.length === 0 || number >= this.getMax()) {
          this.max.push(number);
        }
      }

      getMin() {
        return this.min[this.min.length - 1];
      }

      getMax() {
        return this.max[this.max.length - 1];;
      }
    }

  }
  {
    // Feel free to add new properties and methods to the class.
    class MinMaxStack {
      min: number[];
      max: number[];
      stack: number[];
      constructor() {
        this.min = [];
        this.max = [];
        this.stack = [];
      }
      peek() {
        return this.stack[this.stack.length - 1];
      }

      pop() {
        const num = this.stack.pop();
        if (num === this.getMin()) this.min.pop();
        if (num === this.getMax()) this.max.pop();
        return num;
      }

      push(number: number) {
        this.stack.push(number);
        if (this.min.length === 0 || number <= this.getMin()) {
          this.min.push(number);
        }
        if (this.max.length === 0 || number >= this.getMax()) {
          this.max.push(number);
        }
      }

      getMin() {
        return this.min[this.min.length - 1];
      }

      getMax() {
        return this.max[this.max.length - 1];
      }
    }

  }
}

// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.
// Write your code here.