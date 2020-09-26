//
// file for the 'Rational Numbers' exercise.
//

export class Rational {
  constructor(num, den) {
    // integer overflow ?

    if (den === 0) { throw new Error(`Denominator cannot be 0 (num: ${num}, den: ${den}`) }

    if (num === den) {
      this._num = this._den = 1;
    }
    else {
      let sign = (num >= 0 && den >= 0) || (num < 0 && den < 0) ? 1 : -1;
      [num, den] = [Math.abs(num), Math.abs(den)];
      let [n, d] = divByGcd(num, den);

      this._num = sign * n;
      this._den = d;
    }
  }

  get num() {
    return this._num;
  }

  get den() {
    return this._den;
  }

  add(r) {
    r = checkArg(r);
    return new Rational(this.num * r.den + r.num * this.den, this.den * r.den);
  }

  sub(r) {
    r = checkArg(r);
    return new Rational(this.num * r.den - r.num * this.den, this.den * r.den);
  }

  mul(r) {
    r = checkArg(r);
    return new Rational(this.num * r.num, this.den * r.den);
  }

  div(r) {
    r = checkArg(r);
    return new Rational(this.num * r.den, this.den * r.num);
  }

  abs() {
    return new Rational(Math.abs(this._num), Math.abs(this._den))
  }

  exprational(n) {
    if (n === undefined ||
        (typeof n) !== 'number' ||
        Math.floor(n) !== n) { throw new Error("NaN or Not an Integer"); }

    if (n >= 0) {
      return new Rational(this.num ** n, this.den ** n);
    }
    else {
      n = Math.abs(n);
      return new Rational(this.den ** n, this.num ** n);
    }
  }

  expreal(r) {
    if (r === undefined ||
        (typeof r) !== 'number') { throw new Error("NaN"); }

    return r ** (this.num / this.den);
  }

  reduce() {
    return this;  // identity
  }
}

const gcd = (n, d) => {  // n > 0 && d > 0
  [n, d] = n < d ? [d, n] : [n, d];

  if (d === 0) { return n; }

  let r = n;
  while (r > 1) {
    r = n % d;
    [n, d] = [d, r];
  }

  return r === 0 ? n : r;
}

const divByGcd = (n, d) => {  // n > 0 && d > 0
  let r = gcd(n, d);
  return [n / r, d / r];
}

const checkArg = (r) => {
  if (r === undefined) { throw new Error("NaN"); }

  if (r instanceof Rational) {
    return r;
  }
  else if ((typeof r) === 'number' && Math.floor(r) === r) {
    // we want an integer, not a real
    return new Rational(r, 1);
  }
  else {
    throw new Error("NaN");
  }
}
