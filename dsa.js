//Arrays

//An array is a collection of elements identified by index or key.




//linked lists

//A linked list is a linear data structure where elements are not stored at contiguous memory locations. Each element (node) contains a reference (link) to the next element in the sequence.


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.head.value); // 1




//stack

//A stack is a linear data structure which follows a particular order in which operations are performed. The order may be LIFO (Last In First Out) or FILO (First In Last Out).

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20




//queue

//A queue is a linear structure which follows a particular order in which operations are performed. The order is First In First Out (FIFO).

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10





//Hashtable

//A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

let ht = new HashTable(50);
ht.set("name", "John");
console.log(ht.get("name")); // John







//binary tree

// A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.root.value); // 10



//Graph

//A graph is a data structure that consists of a finite set of nodes (or vertices) and a set of edges connecting these nodes.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
console.log(graph.adjacencyList); // { A: [ 'B' ], B: [ 'A' ] }




//sorting algirthms

// 1. Bubble Sort
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
      }
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [ 11, 12, 22, 25, 34, 64, 90 ]



//2. Selection Sort
// Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
    }
  }
  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // [ 11, 12, 22, 25, 64 ]



//3. Insertion Sort
//Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr)); // [ 5, 6, 11, 12, 13 ]





//Merge Sort
//Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, sorts them recursively, and then merges the two sorted halves.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]




//Quick Sort
//Quick Sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into two sub-arrays, according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.



function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr)); // [1, 5, 7, 8, 9, 10]





// Explanation
// Merge Sort:

// Time Complexity: O(n log n)
// Space Complexity: O(n)
// Stable: Yes
// Quick Sort:

// Time Complexity: O(n log n) on average, O(n^2) in the worst case
// Space Complexity: O(log n) on average
// Stable: No
// These sorting algorithms are very efficient and are widely used in practice. Merge Sort is particularly useful for linked lists, while Quick Sort is often used for arrays due to its in-place sorting capability.