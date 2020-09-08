//
// The 'Sieve' exercise.
//

export const primes = (n) => {
  // throw new Error("Remove this statement and implement this function");

  if (n <= 1) { return []; }
  if (n == 2) { return [2]; }

  let ary = [];
  for (let ix = 0; ix <= n; ix++) {
    ary[ix] = true;
  }
  ary[0] = ary[1] = false;

  let [cand, ix] = [2, 3];
  const limit = Math.ceil(Math.sqrt(n));

  while (cand <= limit) {
    for (let jx = 2*cand; jx <= n; jx += cand) {
      ary[jx] = false;
    }

    // next cand
    while (!ary[ix]) { // 2, 3, 5, 7, 11,
      ix += 2;
    }
    cand = ix;
    ix += 2;
  }

  return ary.reduce((a, x, ix) => { if (x) { a.push(ix); }; return a; },
                    []);
};
