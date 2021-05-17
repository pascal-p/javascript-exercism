//
const LIM = 1000;

export const prime = (num, lim=LIM) => {
  if (num == 0) {
    throw new Error('There is no zeroth prime');
  }
  if (lim < num) {
    throw new Error('lim must be > num');
  }
  if (num < 0 || num > lim) {
    throw new Error('Outside admissible limit');
  }
  const _primes = genPrimesLt(lim);
  return _primes[num - 1];
};

const genPrimesLt = (n) => {
  let primeIxes = [true];
  let primes = [2];

  // init. prime candidates
  const _lim = (n - 1 - 3) / 2 + 1
  for (let _ix of range(1, _lim)) { // range(3, n - 1, 2)
    primeIxes.push(true);
  }

  let [ix, m] = [0, primeIxes.length];

  while (ix < m) {
    let cp = 2 * ix + 3;
    for (let jx of range(ix + cp, m, cp)) {
      primeIxes[jx] = false;
    }
    ix++;
    while ((ix < m) && !(primeIxes[ix])) {
      ix++;
    }
  }

  for (let ix of range(0, m)) {
    if (primeIxes[ix]) {
      primes.push(2 * ix + 3);
    }
  }
  return primes;
}

// let's create a range function similar to python...
const range = (start, end, step=1) => {
  function* genRange() {
    let ix = start - step;
    while (ix < end - step)
      yield ix += step;
  }
  return {
    [Symbol.iterator]: genRange
  };
}
