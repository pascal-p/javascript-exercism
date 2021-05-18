//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const YA_MAP = new Map(
  [
    [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'],
    [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'], [10, 'X'],
    [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']
  ]
);

const LIMITS = [1, 3000];

export const toRoman = (number) => {
  if (typeof(number) !== "number") {
    throw(new Error("NaN: Not a Number!"));
  }

  if (number < LIMITS[0] || number > LIMITS[1]) {
    throw(new Error("Out of range"));
  }

  if (YA_MAP.has(number))  {
    return YA_MAP.get(number);
  }

  let [roman, p] = ['', 1000];
  while (true) {
    let [num, rem] = [number / p >> 0, number % p];  // perfrom integer division (a/b) >> 0 or ~~(a / b);

    if (num > 0) {
      if (p == 1000) {
        roman = roman.concat(YA_MAP.get(p).repeat(num));
      }
      else if ((p == 100) || (p == 10)) {
        roman = roman_helper_fn(roman, num, p);
      }
      else {
        roman = roman.concat(YA_MAP.get(num));
      }
    }

    if (rem == 0) { break; }
    [number, p] = [rem, p / 10 >> 0];
  }

  return roman;
};

const roman_helper_fn = (roman, num, p) => {
  let args = [];

  if (num <= 3) {
    args = [YA_MAP.get(p).repeat(num)];            // ex. 30 => XXXX
  }
  else if (num == 4) {
    args = [YA_MAP.get(p), YA_MAP.get(5 * p)];     // ex. 40 => XL
  }
  else if (num < 9) {
    let s = YA_MAP.get(p)
    args = [YA_MAP.get(5 * p), s.repeat(num - 5)]; // ex. 70 => LXX
  }
  else {
    args = [YA_MAP.get(p), YA_MAP.get(10 * p)];    // ex. 90 => XC
  }

  roman = roman.concat(args.join(''))
  return roman;
}
