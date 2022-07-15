class Stack {
  constructor() {
    this.items = [];
  }

  print() {
    return this.items.toString();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  pop() {
    return this.items.pop();
  }

  push(element) {
    this.items.push(element);
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(4));
console.log(stack.push(6));
console.log(stack.pop());

console.log(stack.print());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());
