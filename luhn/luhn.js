//
//the 'Luhn' exercise.
//

export const valid = (str) => {
  let nstr = str.replace(/[\s\t\n\r]+/g, '');      // remove any space

  if (nstr.length <= 1) { return false; }          // check length

  if (!nstr.match(/^[0-9]+$/)) { return false; }   // consider only digit

  return extractCalc(nstr.split('')) % 10 === 0;   // calculate and conclude
};

const extractCalc1 = (ary) => {
  let r = ary.length % 2 === 0 ? 0 : 1;
  let ix = 1;                                      // to keep track of position, starting at 1

  const [ds, s] = ary.reduce(([ds, s], ch) => {
    let d = parseInt(ch);
    if (ix % 2 === r) { s += d; }                  // accumulate
    else {
      let x = 2 * d;
      ds += x > 9 ? x - 9 : x;                     // double, norm., accumulate
    }
    ix += 1;
    return [ds, s];
  }, [0, 0]);

  return ds + s;
};

const extractCalc = (ary) => {
  let r = ary.length % 2 === 0 ? 0 : 1;

  const [ds, s] = ary.reduce(([ds, s], ch, ix) => {  // use ix to keep track of position parity
    let d = parseInt(ch);
    if ((ix + 1) % 2 === r) { s += d; }              // accumulate
    else {
      let x = 2 * d;
      ds += x > 9 ? x - 9 : x;                       // double, norm., accumulate
    }
    // ix += 1;
    return [ds, s];
  }, [0, 0]);

  return ds + s;
};
