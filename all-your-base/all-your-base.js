//
// file for the 'All Your Base' exercise.
//

export const convert = (digits, ibase, obase) => {
  if (!Number.isInteger(ibase) || ibase < 2) { throw new Error("Wrong input base"); }  // input base >= 2

  if (!Number.isInteger(obase) || obase < 2) { throw new Error("Wrong output base"); } // output base >= 2

  if (digits.length === 0) { throw new Error("Input has wrong format"); }

  if (digits.length > 1 &&
      (digits[0] === 0 || digits.every(x => x === 0))) { throw new Error("Input has wrong format"); }

  if (digits.some(x => x < 0 || x >= ibase)) {
    throw new Error('Input has wrong format'); // `digit must be >= 0 && less than ibase: ${ibase}`
  }

  let n = toBase10(ibase, digits);
  return (obase == 10) ? (n).toString().split('').map(x => parseInt(x)) :
    from10ToObase(obase, n);
};

const toBase10 = (ibase, digits) => {
  return digits.reduce((n, d) => n * ibase + d, 0)
}

const from10ToObase = (obase, num) => {
  if (num === 0) { return [0]; }

  let digits = [];
  let d;
  while (num > 0) {
    [num, d] = [Math.floor(num / obase), num % obase];
    digits.unshift(d);
  }
  return digits;
}
