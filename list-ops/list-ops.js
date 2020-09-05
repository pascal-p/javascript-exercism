//
// 'List Ops' exercise.
//

const isList = (list) => {
  return list.hasOwnProperty('buffer');
}

export class List {
  constructor(arg) {
    // use array for implementation
    if (arg === undefined) {
      this.buffer = [];
    }
    else if (Array.isArray(arg)) {
      this.buffer = [...arg];        // make a copy
    }
    else if (isList(arg)) {
      this.buffer = [...arg.buffer];
    }
    else {
      throw new Error('Type not yet managed or incompatible');
    }
  }

  get values() {
    return this.buffer;
  }

  isEmpty() { return this.buffer.length == 0; }

  append(list) {
    /*
     * given two lists, add all items in the second list to the end of the first list
     */
    this.buffer = list.buffer.reduce((clist, item) => [...clist, item],
                               this.buffer);
    return this;
  }

  concat(...lists) {
    /*
     * given a series of lists, combine all items in all lists into one flattened list)
     */
    let buffer = this.buffer;
    for (const l of lists) {
      buffer = l.buffer.reduce((cl, x) => cl.concat(isList(x) ? x.buffer : x), buffer);
    }
    this.buffer = buffer;
    return this;
  }

  filter(fn) {
    /*
     * given a predicate and a list, return the list of all items for which predicate(item) is True
     */
    this.buffer = this.buffer.filter(fn);
    return this;
  }

  map(fn) {
    /*
     * given a function and a list, return the list of the results of applying function(item) on all items
     */
    this.buffer = this.buffer.map(fn);
    return this;
  }

  length() { return this.buffer.length; }

  foldl(fn, init) {
    /*
     * given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator
     * from the left using function(accumulator, item)
     */
    return this.buffer.reduce(fn, init);
  }

  foldr(fn, init) {
    /*
     * given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator
     * from the right using function(item, accumulator)
     */
    return this.buffer.reduceRight(fn, init);
  }

  reverse() {
    /*
     * given a list (this.buffer), return a list with all the original items, but in reversed order
     */
    this.buffer = this.buffer.reverse();
    return this;
  }


  //
  // Extensions
  //

  flatten(depth=1) {
    /*
     * creates a new list with all sub-list elements concatenated into it recursively up to the specified depth.
     */
    if (depth === undefined) { depth = 1; }

    this.buffer = this.buffer.flat(depth);
    return this;
  }

  push(x) {
    this.buffer.push(x)
    return this;
  }

  pop() {
    if (this.isEmpty()) { return undefined; }
    return this.buffer.pop();
  }

  every(predicate) {
    return this.buffer.every(predicate)
  }

  unique() {
    this.buffer = this.buffer.reduce((cl, elt) => cl.indexOf(elt) === -1 ? [...cl, elt] : cl,
                                     [])
    return this;
  }
}
