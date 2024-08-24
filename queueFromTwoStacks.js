class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(value) {
    this.input.push(value);
  }

  dequeue() {
    if (this.output.length === 0) {
      while (this.input.length > 0) {
        this.output.push(this.input.pop());
      }
    }

    return this.output.pop();
  }

  peek() {
    if (this.input.length === 0 && this.output.length === 0) {
      return undefined;
    }

    if (this.output.length > 0) {
      return this.output[this.output.length - 1];
    }

    return this.input[0];
  }
}

let queue1 = new Queue();
queue1.enqueue(5);
queue1.enqueue(51);
queue1.enqueue(52);
console.log(queue1.dequeue()); // Output: 5
console.log(queue1.dequeue()); // Output: 51
queue1.enqueue(53);
console.log(queue1.dequeue()); // Output: 52
