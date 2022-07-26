//Implement Queue data structure using a linked list.

const { LinkedList } = require("./linkedListHeadTail");

class LinkedListQueue {
  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(value) {
    return this.queue.append(value);
  }

  dequeue() {
    return this.queue.removeFromFront();
  }

  peek() {
    return this.queue.head.value;
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  print() {
    return this.queue.print();
  }

  getSize() {
    return this.queue.getSize();
  }
}

const queue = new LinkedListQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.getSize());
