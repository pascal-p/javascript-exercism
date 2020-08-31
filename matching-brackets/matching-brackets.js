//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BRACKETS = ['[', ']', '{', '}', '(', ')'];

const HSHMAP = new Map(
  BRACKETS.map(ch => [ch, BRACKETS.indexOf(ch)])
);  // to detect matching pairs
const OPENING_BRACKETS = Array.from(BRACKETS.keys(),
                                    ix => ix % 2 === 0 ? BRACKETS[ix] : undefined).filter(x => x !== undefined);
const CLOSING_BRACKETS =  Array.from(BRACKETS.keys(),
                                     ix => ix % 2 === 1 ? BRACKETS[ix] : undefined).filter(x => x !== undefined);
const STACK_CAP = 20;

export const isPaired = (expr) => {
  if (expr.length === 0) { return true; }

  let stack = new Stack(STACK_CAP);
  for (const ch of expr) {
    if (!BRACKETS.includes(ch)) { continue; }

    if (OPENING_BRACKETS.includes(ch)) {
      stack.push(ch);
      continue;
    }
    else if (CLOSING_BRACKETS.includes(ch)) {
      if (stack.isEmpty()) { return false; }

      let n_ch = stack.pop();
      if (HSHMAP.get(ch) - 1 !== HSHMAP.get(n_ch)) { return false; }
    }
  }

  return stack.isEmpty();
};

class Stack {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('capacity is an positive integer');
    }
    this.capacity = capacity;
    this.stack = [];
  }

  get cap() {
    return this.capacity;
  }

  push(item) {
    if (this.isFull()) { throw new Error('Stack is full!'); }

    this.stack.push(item);
    return;
  }

  pop() {
    if (this.isEmpty()) { throw new Error('Stack is empty!'); };

    let item = this.stack.pop();
    return item;
  }

  peek() {
    if (this.isEmpty()) { throw new Error('Stack is empty!'); };

    return this.stack[this.stack.length - 1]
  }

  isEmpty() { return this.stack.length === 0; }
  isFull() { return this.stack.length === this.capacity; }

};
