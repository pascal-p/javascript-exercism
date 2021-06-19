/*
  VLQ implementation
 */

const SHIFT = 7;
const MOD = 0x80;        // 128
const HEX = 16;
const ZERO = 0x00;
const SLIM = 2**31 - 1;  // signed limit


export const encode = (vnum) => {
  if (typeof vnum === 'undefined' || !Array.isArray(vnum)) {
    throw new Error('Expecting an Array of bytes...');
  }
  
  if (vnum.length === 1 && vnum[0] <= (MOD - 1)) return vnum

  let res = [];
  for (let n of vnum) {
    let ary = [];
    const lowerByte = n % MOD;  // lower 8 byte (rightmost one) ==> zero-ed leftmost bit
    ary.push(lowerByte);

    let r = n >>> SHIFT;        // divide (extract 7bits, unsigned right shift)...
    while (r > ZERO) {          // until reaching 0
      ary.push(r % MOD + MOD)   // set leftmost bit to 1
      r >>>= SHIFT;
    }
    res.push(...ary.reverse());
  }

  return res;
};

export const decode = (vnum) => {
  const slices = extractSlices(vnum)

  let res = [];
  for (let slice of slices) {
    slice = slice.map(x => x & (MOD - 1));

    let shift = -SHIFT;
    let fn = (b) => {
      shift += SHIFT;

      const r = b << shift
      if (r < 0) {          // bitwise operators are 32 bits bounded - limit 2 ** 31 -1
        shift -= SHIFT;
        b <<= shift
        for (let ix=0; ix < SHIFT; ix++) {
          b *= 2;           // Arithmetic operators work on 64-bits values...
        }
        return b;
      }

      return r;
    }

    const ary = slice.reverse().map(fn);
    const s = ary.reduce((s, x) => s += x, ZERO);
    res.push(s);
  }

  return res;
};

// const toHex = (num) => num.toString(HEX);

const extractSlices = (vnum) => {
  let aOfAry = [];
  let ary = [];

  for (let num of vnum) {
    if ((num & MOD) >>> SHIFT === ZERO) {
      ary.push(num);
      aOfAry.push(ary);
      ary = [];
    }
    else {
      ary.push(num);
    }
  }

  if (ary.length > 0) {
    if (getLast(ary) !== ZERO) {
      throw new Error('Incomplete sequence');
    }
    aOfAry.push(ary);
  }

  return aOfAry;
}

const getLast = (ary) => {
  const n = ary.length;
  if (n > 0) return ary[n - 1];
  throw new Error('Cannot get last element of an empty array');
}
