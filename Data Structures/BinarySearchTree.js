class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    //Check whether the newNode to be inserted value is less than the root node value.
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  breadFirstSearch() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      console.log(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  min(root) {
    if (root.left === null) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (root.right === null) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.right;
      } else {
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }
    return root;
  }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
BST.insert(7);
BST.delete(15);
BST.breadFirstSearch();
console.log(BST.search(BST.root, 15));
BST.preOrder(BST.root);
BST.inOrder(BST.root);
BST.postOrder(BST.root);
BST.breadFirstSearch();
console.log(BST.min(BST.root));
console.log(BST.max(BST.root));
console.log("Is tree empty?", BST.isEmpty());
