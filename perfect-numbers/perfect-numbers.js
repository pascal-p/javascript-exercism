/*
  Determine if a number is perfect, abundant, or deficient based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.

The Greek mathematician Nicomachus devised a classification scheme for positive integers, identifying each as belonging uniquely to the categories of perfect, abundant, or deficient based on their aliquot sum. The aliquot sum is defined as the sum of the factors of a number not including the number itself.

For example, the aliquot sum of 15 is (1 + 3 + 5) = 9

    Perfect: aliquot sum = number
        6 is a perfect number because (1 + 2 + 3) = 6
        28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28

    Abundant: aliquot sum > number
        12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
        24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36

    Deficient: aliquot sum < number
        8 is a deficient number because (1 + 2 + 4) = 7
        Prime numbers are deficient

Implement a way to determine whether a given number is perfect. Depending on your language track, you may also need to implement a way to determine whether a given number is abundant or deficient.
 */

export const classify = (n) => {
  if (typeof n !== 'number') {
    throw new Error('Expect a natural integer');
  }

  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  if (n <= 2) return "deficient";
  let divs = findFactors(n);            // find all factors of a given (natural integer) n
  const div_sum = divs.reduce((s, x) => s + x, 0);

  if (isPerfect(n, div_sum)) {
    return "perfect";
  }
  else if (isAbundant(n, div_sum)) {
    return "abundant";
  }

  return "deficient";
};

const isPerfect = (n, sum) => n == sum ? true : false;

const isAbundant = (n, sum) => n < sum ? true : false;

const isDeficient = (n, sum) => n > sum ? true : false;

const findFactors = (n) => {
  // start a 2 up to Math.round(Math.sqrt(n) + 0.49)
  let fact = 2;
  let factors = new Set();
  factors.add(1);
  const lim = Math.round(Math.sqrt(n) + 0.49);

  while (fact <= lim) {
    if (n % fact == 0) {
      const  m = n / fact >> 0;         // integer division
      factors.add(fact).add(m);
      if (m == 1) { break; }
    }
    fact++;
  }
  return new Array(...factors.values());
}
