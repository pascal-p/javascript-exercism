//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n < 0) { throw new Error("Integer must be > 0"); };
  if (n === 0) { return []; };

  return _rows(n);
};

const _rows = (n) => {
  let ary = [[1]];

  // construct full array
  for(let ix = 1; ix < n; ix++) {
    ary.push([1]);

    for(let jx=1; jx < ix; jx++) {
      // the rec. formulae
      ary[ix].push(ary[ix - 1][jx - 1] + ary[ix - 1][jx]);
    };

    ary[ix].push(1);
  };

  return ary;
};
