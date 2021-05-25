/*
Implement a doubly linked list.
Like an array, a linked list is a simple linear data structure. Several common data types can be implemented using linked lists, like queues, stacks, and associative arrays.

A linked list is a collection of data elements called nodes. In a singly linked list each node holds a value and a link to the next node. In a doubly linked list each node also holds a link to the previous node.

You will write an implementation of a doubly linked list. Implement a Node to hold a value and pointers to the next and previous nodes. Then implement a List which holds references to the first and last node and offers an array-like interface for adding and removing items:
    push (insert value at back);
    pop (remove value at back);
    shift (remove value at front).
    unshift (insert value at front);

To keep your implementation simple, the tests will not cover error conditions. Specifically: pop or shift will never be called on an empty list.

If you want to know more about linked lists, check Wikipedia.

Your list must also implement the following interface:

    delete (delete the first occurence of a specified value)
    count (count the number of items in the list)

NOTE: Do not use a library to implement this exercise. Do not use a backing array to implement this exercise.
 */

export class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.len = 0;
  }

  push(v) {
    // add at the end of the list (tail)
    const node = new Node(v);
    // node.next = undefined;
    node.prev = this.tail;

    if (this.len == 0) {
      // it was an empty list move head ref.
      this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
    this.len += 1;
  }

  pop() {
    // get element from tail
    if (this.len == 0) return undefined; // throw new Error('Empty List');

    const node = this.tail;
    this.tail = node.prev;

    if (this.len == 1) {
      // will become empty list - update head ref
      this.head = undefined
      // node.prev === undefined
    }
    else {
      node.prev.next = undefined;
    }
    this.len -= 1;
    return node.v;
  }

  shift() {
    // get element from head
    if (this.len == 0) return undefined; // throw new Error('Empty List');

    const node = this.head;
    this.head = node.next;

    if (this.len == 1) {
      // will become empty list - update tail ref
      this.tail = undefined;
    }
    else {
      node.next.prev = undefined;
    }
    node.next = undefined;
    this.len -= 1;
    return node.v;
  }

  unshift(v) {
    // add at the start of the list (head)
    const node = new Node(v);
    // node.prev = undefined;
    node.next = this.head;

    if (this.len == 0) {
      // it was an empty list move tail ref.
      this.tail = node;
    }
    else {
      this.head.prev = node;
    }
    this.head = node;
    this.len += 1;
  }

  delete(v) {
    if (this.len == 0) return undefined;

    if (this.len == 1 && this.head.v == v) { // delete from singleton list
      this.len = 0;
      this.head = this.tail = undefined;
      return;
    }

    // find element in list
    let cur = this.head;
    let found = false;
    while (cur != this.tail) {
      if (cur.v == v) {
        found = true;
        break;
      }
      cur = cur.next;
    }

    if (! found) {
      if (typeof(cur) !== 'undefined' && cur.v == v) {
        // NO-OP => special case: delete tail
      }
      else return undefined;
    }

    if (cur == this.head) {       // special case: delete head
      this.head = this.head.next;
      this.head.prev = undefined;
    }
    else if (cur == this.tail) {  // special case: delete tail
      this.tail = this.tail.prev;
      this.tail.next = undefined;
    }
    else {
      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;
    }

    this.len -= 1;
    return;
  }

  count() {
    return this.len;
  }
}


class Node {
  constructor(v) {
    this.v = v;             // value
    this.next = undefined;
    this.prev = undefined;
  }
}
