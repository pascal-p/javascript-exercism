/*
  A Pythagorean triplet is a set of three natural numbers, {a, b, c}, for which,
  a**2 + b**2 = c**2

  and such that: a < b < c

  For example:
  3**2 + 4**2 = 9 + 16 = 25 = 5**2.

  Given an input integer N, find all Pythagorean triplets for which a + b + c = N.
  For example, with N = 1000, there is exactly one Pythagorean triplet for which a + b + c = 1000: {200, 375, 425}.

  By default, only sum is given to the triplets function, but it may optionally also receive minFactor and/or maxFactor.
  When these are given, make sure each factor of the triplet is at least minFactor and at most maxFactor.
 */

export function triplets({ minFactor, maxFactor, sum }) {
  if (typeof sum !== 'number') {
    throw new Error('Expecting an integer');
  }

  if (typeof minFactor === 'undefined' && typeof maxFactor === 'undefined') {
    return search(sum)
  }
  else if (typeof minFactor !== 'undefined' && typeof maxFactor !== 'undefined') {
    return search(sum, minFactor=minFactor, maxFactor=maxFactor);
  }
  else if (typeof minFactor !== 'undefined') {
    // only minFactor
    return search(sum, minFactor=minFactor);
  }
  else {
    return search(sum, minFactor=1, maxFactor=maxFactor);
  }
}

const search = (sum, minFactor=1, maxFactor=sum) => {
  let triplets = [];

  for (let a=minFactor; a <= maxFactor; a++) {
    if (a > maxFactor) break;

    for (let b=a+1; b <= maxFactor; b++) {
      if (a + b > sum || b > maxFactor) break;

      for (let c=sum - a - b; c <= maxFactor; c++) {

        if (a + b + c < sum) continue;
        if (a + b + c > sum || c > maxFactor) break;
        if (a ** 2 + b ** 2 == c ** 2) {
          const t = new Triplet(a, b, c);
          triplets.push(t);
        }
      } // end for c
    } // end for b
  } // end for a

  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    [a, b, c] = [a, b, c].sort();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get toArray() {
    return [this.a, this.b, this.c]
  }
}
