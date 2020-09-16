//
// The file for the 'Binary Search' exercise.
//

const genEx = (msg='Value not in array') => { throw new Error(msg); }

const _find = (ary, elt) => {
  if (! Array.isArray(ary)) { genEx('First argument must be an array'); }
  if (ary.length === 0) { genEx(); }
  if (elt < ary[0] || elt > ary[ary.length - 1]) { genEx(); }

  let [l, r] = [0, ary.length];
  let [found, m] = [false, -1];

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (elt < ary[m]) {
      r = m - 1;
    }
    else if (elt > ary[m]) {
      l = m + 1;
    }
    else {
      found = true;
      break;
    }
  }

  return [found, m, l, r];
}

const isLess = (x, y) => x < y;
const isGreater = (x, y) => x > y;

const _findOthers = (ary, elt, ix, lim, rel=isLess, inc=-1) => {
  while (elt === ary[ix]) {
    ix += inc;
    if (rel(ix, lim)) { break; }
  }
  return ix -= inc;
}


//
// Public
//
export const find = (ary, elt) => {
  let [found, m] = _find(ary, elt);
  return found ? m : genEx();
};


// Extension: assuming duplicate values in ordered array
export const findAll = (ary, elt) => {
  let [found, m, l, r] = _find(ary, elt);

  if (! found) { genEx(); }

  let lx = m;
  if (m > l) {
    lx = _findOthers(ary, elt, lx, l);
  }
  let rx = m;
  if (m < r) {
    rx = _findOthers(ary, elt, rx, r, isGreater, 1);
  }

  return [lx, rx]; // return an array (representing a range)
}
