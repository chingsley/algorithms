export class MinMaxStack {
    constructor() {
        this.stack = [];
        this.min = [];
        this.max = [];
    }
    pop() {
        const num = this.stack.pop();
        const currMin = this.getMin();
        const currMax = this.getMax();
        if (num === currMin)
            this.min.pop();
        if (num === currMax)
            this.max.pop();
        return num;
    }
    push(num) {
        this.stack.push(num);
        this.updateMin(num);
        this.updateMax(num);
    }
    getMin() {
        return this.min[this.min.length - 1];
    }
    getMax() {
        return this.max[this.max.length - 1];
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    updateMin(num) {
        const lastMin = this.min[this.min.length - 1];
        if (lastMin === undefined || num <= lastMin)
            this.min.push(num);
    }
    updateMax(num) {
        const lastMax = this.max[this.max.length - 1];
        if (lastMax === undefined || num >= lastMax)
            this.max.push(num);
    }
}
