//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this.re = real;
    this.im = imag;
  }

  get real() {
    return this.re;
  }

  get imag() {
    return this.im;
  }

  add(other) {
    return new ComplexNumber(this.re + other.re, this.im + other.im)
  }

  sub(other) {
    return new ComplexNumber(this.re - other.re, this.im - other.im)
  }

  div(other) {
    const [a, b] = this.to_tuple();
    const [c, d] = other.to_tuple();
    const den = c * c + d * d;
    const x = (a * c + b * d) / den;
    const y = (b * c - a * d) / den;
    return new ComplexNumber(x, y)
  }

  mul(other) {
    const [a, b] = this.to_tuple();
    const [c, d] = other.to_tuple();
    const x = (a * c - b * d);
    const y = (b * c + a * d);
    return new ComplexNumber(x, y)
  }

  get abs() {
    return Math.sqrt(this.re * this.re + this.im * this.im)
  }

  get conj() {
    return new ComplexNumber(this.re, this.im !== 0.0 ? -this.im : this.im)
  }

  get exp() {
    const a = Math.exp(this.re);
    const [x, y] = [Math.cos(this.im), Math.sin(this.im)];
    return new ComplexNumber(a * x, a * y)
  }

  to_tuple() {
    return [this.re, this.im]
  }
}
