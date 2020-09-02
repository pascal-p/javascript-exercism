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
    let x1 = this.n;
    let x2 = x1 + 1;
    let x3 = (this.n << 1) + 1;
    let x = (x1 * x2 * x3) >> 1;
    return x / 3;
  }

  get squareOfSum() {
    // sum(1:n)^2 ≡ (n × (n + 1) / 2)²
    let x1 = this.n;
    let x2 = x1 + 1;
    let x = (x1 * x2) >> 1;
    return x * x;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
