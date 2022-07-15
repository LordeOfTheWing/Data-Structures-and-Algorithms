class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());

//Optimising the queue
class Queue2 {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return this.items;
  }
}

const queue2 = new Queue2();
console.log(queue2.print());
console.log(queue2.enqueue(1));
console.log(queue2.enqueue(2));
console.log(queue2.enqueue(3));
console.log(queue2.dequeue());
console.log(queue2);
console.log(queue2.print());
console.log(queue2.peek());
console.log(queue2.size());
console.log(queue2.isEmpty());
