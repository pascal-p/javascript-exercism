//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  // caveat: integer overflow

  constructor(n) {
    this.n = n
  }

  get sumOfSquares() {
    // 1² + 2² + 3² + ... + n² ≡ (n × (n + 1) × (2n + 1)) / 6
    const x1 = this.n;
    const x2 = this.n + 1; // x1 + 1;
    const x3 = (this.n << 1) + 1;
    const x = (x1 * x2 * x3) >> 1;
    return x / 3;
  }

  get squareOfSum() {
    // sum(1:n)^2 ≡ (n × (n + 1) / 2)²
    const x1 = this.n;
    const x2 = this.n + 1; // x1 + 1;
    const x = (x1 * x2) >> 1;
    return x * x;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

//
// functional version
//
const add1 = (x) => x + 1;

const mult2Add1 = (x) => (x << 1) + 1;

const multTriDiv2 = (x1, x2, x3) => (x1 * x2 * x3) >> 1;

const div3 = (x) => x / 3; // Math.floor(x / 3);

const multBinDiv2 = (x1, x2) =>  (x1 * x2) >> 1;

const square = (x) => x * x;

const compose = (...fns) => (...args) => {
  return fns.reduceRight(
    (comp, f) => f(comp(...args))
  );
}

export const sumOfSquares = (x) => compose(div3, multTriDiv2)(x, add1(x), mult2Add1(x));
/*
export const sumOfSquares = (x) => {
  // 1² + 2² + 3² + ... + n² ≡ (n × (n + 1) × (2n + 1)) / 6
  return div3(
    multTriDiv2(x, add1(x), mult2Add1(x))
  );
}
*/

export const squareOfSum = (x) => compose(square, multBinDiv2)(x, add1(x));
/*
export const squareOfSum = (x) => {
  // sum(1:n)^2 ≡ (n × (n + 1) / 2)²
  return square(
    multBinDiv2(x, add1(x))
  );
}
*/

// finally:
export const diffOfSquares = (n) => squareOfSum(n) - sumOfSquares(n);
