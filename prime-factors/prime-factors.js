//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const FIRST_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19];

export const primeFactors = (n, check=false) => {
  if (n <= 0) { throw new Error('argument should be strictly positive'); }
  if (n === 1) { return []; }
  if (FIRST_PRIMES.includes(n)) { return [n]; }

  if (Number.isSafeInteger(n)) { return pfWheel(n, check); }
  throw new Error('Integer Overflow');
};

const pfWheel = (n, check=false) => {
  //
  // Wheel factorization
  // cf. https://en.wikipedia.org/wiki/Wheel_factorization
  //
  let cn = n; // copy
  let base = [2, 3, 5];
  // let base_prod = base.reduce((acc, next) => acc * next, 1);

  let inc = [4, 2, 4, 2, 4, 6, 2, 6];
  let divs = [];

  for (const q of base) {
    while (true) {
      let [nq, r] = divRem(n, q);
      if (r !== 0) { break; }

      divs.push(q);
      n = nq;
    }
  };

  let [q, ix] = [7, 0];
  while (q * q <= n) {
    let [nq, r] = divRem(n, q);

    if (r === 0) {
      divs.push(q);
      n = nq;
    }
    else {
      q += inc[ix];
      ix = (ix + 1) % inc.length;
    }
  }
  if (n !== 1) { divs.push(n); }

  if (check) {
    //
    // not really necesary, as  we have a guard clause in primeFactors
    // for integer overflow
    //
    let res = divs.reduce((acc, next) => acc * next, 1);

    if (!Number.isSafeInteger(cn) || !Number.isSafeInteger(res) || (cn !== res)) {
      throw new Error('Integer Overflow');
    }
  }

  return divs;
};

const divRem = (x, y) => {
  if (y === 0) { throw new Error('Divide by 0!'); }
  return [x / y, x % y];
};
