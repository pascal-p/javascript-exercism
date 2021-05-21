/*
Given a 3 x 4 grid of pipes, underscores, and spaces, determine which number is represented, or whether it is garbled.
- Step One
To begin with, convert a simple binary font to a string containing 0 or 1.
The binary font uses pipes and underscores, four rows high and three columns wide.

     _   #
    | |  # zero.
    |_|  #
         # the fourth row is always blank

Is converted to "0"

         #
      |  # one.
      |  #
         # (blank fourth row)

Is converted to "1"

If the input is the correct size, but not recognizable, your program should return '?'
If the input is the incorrect size, your program should return an error.

- Step Two
Update your program to recognize multi-character binary strings, replacing garbled numbers with ?

- Step Three
Update your program to recognize all numbers 0 through 9, both individually and as part of a larger string.
 _
 _|
|_

Is converted to "2"

      _  _     _  _  _  _  _  _  #
    | _| _||_||_ |_   ||_||_|| | # decimal numbers.
    ||_  _|  | _||_|  ||_| _||_| #
                                 # fourth line is always blank

Is converted to "1234567890"

- Step Four
Update your program to handle multiple numbers, one per line. When converting several lines, join the lines with commas.
    _  _
  | _| _|
  ||_  _|
    _  _
|_||_ |_
  | _||_|
 _  _  _
  ||_||_|
  ||_| _|

Is converted to "123,456,789"
 */

const N = 4;  // 4 rows
const M = 3   // 3 cols

const DIGIT_MAP = new Map([
  [ ' _ \n' +
    '| |\n' +
    '|_|\n' +
    '   ', 0],
  [ '   \n' +
    '  |\n' +
    '  |\n' +
    '   ', 1],
  [ ' _ \n' +
    ' _|\n' +
    '|_ \n' +
    '   ', 2],

  [' _ \n' +
   ' _|\n' +
   ' _|\n' +
   '   ', 3],
  ['   \n' +
   '|_|\n' +
   '  |\n' +
   '   ', 4],
  [' _ \n' +
   '|_ \n' +
   ' _|\n' +
   '   ', 5],

  [' _ \n' +
   '|_ \n' +
   '|_|\n' +
   '   ', 6],
  [' _ \n' +
   '  |\n' +
   '  |\n' +
   '   ', 7],
  [ ' _ \n' +
    '|_|\n' +
    '|_|\n' +
    '   ', 8],

  [ ' _ \n' +
    '|_|\n' +
    ' _|\n' +
    '   ', 9]
]);

export const convert = (str) => {
  // throw new Error('Remove this statement and implement this function');

  const ary = str.split("\n");

  if (ary.length % N != 0) { // array length should be a mutilple of 4
    throw new Error(`Incorrect input size - num. of rows should be multiple of ${N}`);
  }

  if (ary.some((row) => row.length % M != 0)) { // (! ary.every((row) => row.length % M == 0)) {
    throw new Error(`Incorrect input size - num. of cols should be multiple of ${M}`);
  }

  if (DIGIT_MAP.has(str)) {
    return String(DIGIT_MAP.get(str));
  }
  //
  const [n, m] = [ary.length / N >> 0, ary[0].length / M >> 0];

  if (n == 1 && m == 1) {
    // we have a problem with the input
    return "?";
  }

  // n >= 1 || m >= 1
  const p = n * m;
  let digits = new Array(p);
  for (let g=0; g < p; g++) {
    digits[g] = new Array();
  }

  let offset = 0;
  for (let r=0; r < ary.length; r++) { // [0, N[, [N..2N[, ...
    if (r > 0 && r % N == 0) offset += M;

    for (let g=0; g < m; g++) {         // 0..m[==3]
      digits[g + offset].push(ary[r].slice(g * M, (g + 1) * M));
    }
  }

  let result = "";
  for (let g=0; g < p; g++) {
    if (n > 1 && g > 0 && g % M == 0) { result = result.concat(","); }

    const str = digits[g].join("\n");
    if (DIGIT_MAP.has(str)) {
      result = result.concat(String(DIGIT_MAP.get(str)));
    }
    else {
      result = result.concat("?");
    }
  }

  return result;
};
