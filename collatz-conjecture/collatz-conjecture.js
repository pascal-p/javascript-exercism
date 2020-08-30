//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) { throw new Error('Only positive numbers are allowed'); };
  return collatzSteps(n);
};

const isOdd = (n) => n % 2 === 1;

const collatzSteps = (n) => {
  // caveat: Integer overflow...
  let nStep = 0;

  while (n > 1) {
    n = isOdd(n) ? 3 * n + 1 : n / 2;
    nStep += 1;
  }

  return nStep;
};
