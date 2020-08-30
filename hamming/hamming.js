//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (s1, s2) => {
  if (s1.length === 0 && s2.length > 0) { throw new Error('left strand must not be empty'); };
  if (s1.length > 0 && s2.length === 0) { throw new Error('right strand must not be empty'); };
  if (s1.length !== s2.length) { throw new Error('left and right strands must be of equal length'); };

  if (s1.length === 0) { return 0; };

  return zip(s1, s2).map(([...args]) => args[0] === args[1] ? 0 : 1)
    .reduce((t, v) => t + v, 0);
};

const zip = (a1, a2) => {
  // only deal with strings or arrays
  // does not allow mix array/string
  let ary = [];

  if ((typeof a1) === 'string' && (typeof a2) === 'string') {
    for (let ix=0; ix < min(a1.length, a2.length); ix++) {
      ary.push([a1.substr(ix, 1), a2.substr(ix, 1)]);
    };
  }
  else if (Array.isArray(a1) && Array.isArray(a2)) {
    for (let ix=0; ix < min(a1.length, a2.length); ix++) {
      ary.push([a1[ix], a2[ix]])
    };
  }
  else {
    throw new Error('Type not supported...');p
  }

  return ary;
};

const min = (x1, x2) => x1 < x2 ? x1 : x2;
