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
  {
    // Feel free to add new properties and methods to the class.
    // all methods are O(1) time and O(1) space when considered independently
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
        if (this.getMax() === undefined || number >= this.getMax()) this.max.push(number);
        if (this.getMin() === undefined || number <= this.getMin()) this.min.push(number);
      }

      getMin() {
        return this.min[this.min.length - 1];
      }

      getMax() {
        return this.max[this.max.length - 1];
      }
    }
  }
  {
    // All methods when considered independently run in
    // O(1) time | O(1) space
    class MinMaxStack {
      stack: number[];
      min: number[];
      max: number[];
      constructor() {
        this.stack = [];
        this.min = [];
        this.max = [];
      }
      peek() {
        return this.stack[this.stack.length - 1];
      }

      pop() {
        const value = this.stack.pop();
        if (value === this.getMin()) this.min.pop();
        if (value === this.getMax()) this.max.pop();
        return value;
      }

      push(number: number) {
        this.stack.push(number);
        if (this.getMin() === null || number <= this.getMin()!) this.min.push(number);
        if (this.getMax() === null || number >= this.getMax()!) this.max.push(number);
      }

      getMin() {
        return this.min.length > 0 ? this.min[this.min.length - 1] : null;
      }

      getMax() {
        return this.max.length > 0 ? this.max[this.max.length - 1] : null;
      }
    }
  }
}