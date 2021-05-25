//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

  delete() {
    throw new Error('Remove this statement and implement this function');
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
