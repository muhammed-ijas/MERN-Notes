// A linked list is a data structure consisting of a collection of nodes that together represent a sequence. Each node contains data and a reference (or link) to the next node in the sequence. This allows for efficient insertion and removal of elements since you only need to update the references of the nodes.

// Types of Linked Lists
// Singly Linked List: Each node points to the next node.
// Doubly Linked List: Each node points to both the next and the previous node.
// Circular Linked List: The last node points back to the first node.
// Operations on Linked Lists
// Insertion: Adding a node to the list.
// Deletion: Removing a node from the list.
// Traversal: Visiting each node in the list.
// Search: Finding a node in the list.
// Singly Linked List Example in JavaScript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
                         
  // Insert at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Search for a node by value
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Traverse the list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


// // Example usage
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.traverse(); // Output: 0 1 2 3
list.delete(2);
list.traverse(); // Output: 0 1 3
console.log(list.search(3)); // Output: Node { data: 3, next: null }
list.append(3);
list.append(3);
list.append(3);
list.append(3);
console.log(list);
list.traverse(); // Output: 0 1 3

// Explanation
// Node Class: Represents a single node in the list, containing the data and a next reference.
// LinkedList Class: Contains methods to manipulate the linked list:
// append(data): Adds a new node with the specified data at the end of the list.
// prepend(data): Adds a new node with the specified data at the beginning of the list.
// delete(data): Removes the first node containing the specified data.
// search(data): Searches for a node containing the specified data and returns it.
// traverse(): Prints out the data of each node in the list.
// This example covers basic operations on a singly linked list in JavaScript.
