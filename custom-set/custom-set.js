//
// file for the 'Custom Set' exercise.
//

export class CustomSet {
  constructor(arg) {
    if (! arg) {
      this.cs = new Map();
    }
    else if (Array.isArray(arg)) {
      this.cs = mapper(arg);
    }
    else throw new Error("argument not managed yet...");

    return this;
  }

  empty() {
    // this.cs.keys() returns an iterator
    return !this.cs.keys().next().value
  }

  contains(elt) {
    return this.has(elt)
  }

  add(elt) {
    if (!this.cs.has(elt)) { this.cs.set(elt, 1); }
    return this;
  }

  subset(cs) {
    // true iff all elements of this.cs are in cs
    // conversely false if some elements of this.cs are not in cs
    // turn iterator into an array...
    return ![...this.keys()].some(elt => !cs.has(elt));
  }

  disjoint(cs) {
    // false if some elements of this.cs are in cs
    return (this.card() > cs.card()) ? !toAry(cs).some(elt => this.has(elt))
      : !toAry(this).some(elt => cs.has(elt));
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
      return new CustomSet(toAry(cs));
    }
    else if (cs.card() === 0) {
      return new CustomSet(toAry(this));
    }

    let [newCS, ocs] = this.card() > cs.card() ? [new CustomSet(toAry(this)), cs]:
        [new CustomSet(toAry(cs)), this.cs];

    newCS.cs = mapper(toAry(ocs), newCS.cs);
    return newCS
  }

  intersection(cs) {
    const ary = (this.card() > cs.card()) ? toAry(cs).filter(elt => this.has(elt))
          : toAry(this).filter(elt => cs.has(elt))
    return new CustomSet(ary)
  }

  difference(cs) {
    const ary = toAry(this).filter(elt => !cs.has(elt))
    return new CustomSet(ary)
  }

  // extension

  has(elt) {
    return this.cs.has(elt);
  }

  keys() {
    return this.cs.keys();
  }

  card() {
    // number of elements in the set
    return toAry(this).length;
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

const toAry = (cset) => [...cset.keys()];
