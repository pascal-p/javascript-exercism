//
// file for the 'Custom Set' exercise.
//

export class CustomSet {
  constructor(arg) {
    if (! arg) {
      this._set = new Map();
    }
    else if (Array.isArray(arg)) {
      this._set = mapper(arg);
    }
    else throw new Error("argument not managed yet...");

    return this;
  }

  empty() {
    // this._set.keys() returns an iterator
    return !this._set.keys().next().value
  }

  contains(elt) {
    return this.has(elt)
  }

  add(elt) {
    if (!this._set.has(elt)) { this._set.set(elt, 1); }
    return this;
  }

  subset(cs) {
    // true iff all elements of this._set are in cs
    // conversely false if some elements of this._set are not in cs
    // turn iterator into an array...
    return ![...this.items()].some(elt => !cs.has(elt));
  }

  disjoint(cs) {
    // false if some elements of this._set are in cs or
    // some elements of cs ar in this
    return (this.card() > cs.card()) ? !cs.toAry().some(elt => this.has(elt))
      : !this.toAry().some(elt => cs.has(elt));
  }

  eql(cs) {
    // 2 sets are equals if same number of elemenst and same elements in both set
    return this.card() === cs.card() && this.subset(cs)
  }

  union(cs) {
    if (this.card() === 0 && cs.card() === 0) {
      return new CustomSet();
    }
    else if (this.card() === 0) {
      return new CustomSet(cs.toAry());
    }
    else if (cs.card() === 0) {
      return new CustomSet(this.toAry());
    }

    let [newCS, ocs] = this.card() > cs.card() ? [new CustomSet(this.toAry()), cs]:
        [new CustomSet(cs.toAry()), this];

    newCS._set = mapper(ocs.toAry(), newCS._set);
    return newCS
  }

  intersection(cs) {
    const ary = (this.card() > cs.card()) ? cs.toAry().filter(elt => this.has(elt))
          : this.toAry().filter(elt => cs.has(elt))
    return new CustomSet(ary)
  }

  difference(cs) {
    const ary = this.toAry().filter(elt => !cs.has(elt))
    return new CustomSet(ary)
  }

  // extension

  has(elt) {
    return this._set.has(elt);
  }

  items() {
    return this._set.keys();
  }

  card() {
    // number of elements in the set
    return this.toAry().length;
  }

  toAry() {
    return [...this._set.keys()];
  }
}

// internal helpers

const mapper = (arg, init=new Map) => {
  return arg.reduce(
    (amap, elt) => {
      amap.set(elt, 1);  // if same element repeated, it is 'remapped' with same value
      return amap;
    },
    init
  )
}
