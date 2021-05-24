/*
  Given a natural radicand, return its square root.

  Note that the term "radicand" refers to the number for which the root is to be determined. That is, it is the number under the root symbol.

  Check out the Wikipedia pages on square root and methods of computing square roots.

  Recall also that natural numbers are positive real whole numbers (i.e. 1, 2, 3 and up).

  The idea is NOT to use the built-in javascript functions such as Math.sqrt(x), x ** 0.5 or x ** (1/2), it's to build your own.

 */

export const squareRoot = (n, Eps=1e-8) => {

  if (typeof n !== 'number') {
    throw new Error('Expecting a natural Integer');
  }

  n = Math.trunc(n);
  if (n < 0) {
    throw new Error('Expecting a natural Integer');
  }

  if (typeof Eps === 'undefined') {
    Eps = 1e-10;
  }

  // Using Babylonian Method
  // https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method

  let x = n / 2;

  while (Math.abs(x * x - n) > Eps) {
    x = .5 * (x + n / x);
  }

  x = Math.trunc(x * 1/Eps) * Eps;
  return x;
};
