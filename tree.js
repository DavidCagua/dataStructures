/*
A tree is a hierarchical structure that consists of nodes connected by edges
Is a non linear data structure compared to arrays, linked lists, stacks and queues
which are linear
In linear data structures the time required to search is proportional to the size of
the dataset 
Trees however alloe quicker and easier access to the data
A tree will not contain any loops or cycles
Are used for file systems, family tree, organizations, DOM, Chat bots, abstract syntax tree

Bynary tree: each node has at most two children

Binary search tree: left node is smaller, right node is bigger

Operations:

Insertion
Search
DFS & BFS: Visit all nodes in the tree
Deletion

Usage:
Searching
Sorting
To implement abstract data types such as lookup tables an priority queues

Tree traversal

visiting every node in the tree
1. Depth first search (DFS): starts at the root and explores as far as possible
along each branch before backtracking

visit the root node, visit all the nodes in the left subtree and visit all the nodes
in the right subtree

depending on the order in which we do this, there can be three types
-preorder
  1.read the data of the node
  2.visit the left subtree
  3.visit the right subtree
-inorder
  1.visit the left subtree
  2.read the data of the node
  3.visit the right subtree
-postorder
  1.visit the left subtree
  2.visit the right subtree
  3.read the data of the node
2. Breadth first search (BFS): Explore all nodes at the present depth prior to 
moving on to the nodes at the next level

*/

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

  levelOrder() {
    /** Use the optimised queue enqueue and dequeue from queue-object.js instead.
     * I've used an array for simplicity. */
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
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
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 3));
console.log(bst.search(bst.root, 7));
console.log(bst.search(bst.root, 6));

bst.inOrder(bst.root);
