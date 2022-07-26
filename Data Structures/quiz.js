class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// Traverse a linked list and return the values in an array

function traverseLinkedList(head) {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  return values;
}

// Using recursion
function traverseLinkedList2(head) {
  if (head === null) return;
  console.log(head.data);
  traverseLinkedList2(head.next);
}

traverseLinkedList2(a);

console.log(a);
console.log(traverseLinkedList(a));

// Add the values of a linked list and return the sum
function sumList(head) {
  let current = head;
  let sum = 0;
  while (current !== null) {
    sum += current.data;
    current = current.next;
  }
  return sum;
}

console.log(sumList(a));

// Traverse a linked list and return true if the value exists in the linked list
function linkedListFind(head, target) {
  let current = head;
  while (current !== null) {
    if (current.data === target) return true;
    current = current.next;
  }
  return false;
}

console.log(linkedListFind());

//Get the value of a node in a linkedList using the index

function getNodeValue(head, index) {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.data;
    count += 1;
    current = current.next;
  }
  return null;
}

console.log(getNodeValue(a, 3));

//Using recursion
function getNodeValue2(head, index) {
  if (head === null) return null;
  if (index === 0) return head.data;
  return getNodeValue2(head.next, index - 1);
}

console.log(getNodeValue2(a, 3));
