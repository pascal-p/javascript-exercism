//
// This is a file for the 'Largest Series Product' exercise.
//

export const largestProduct = (series, size) => {
  if (series === '' && size === 0) {
    return 1;
  }

  if (series.length < size || (series.length === 0 && size > 0)) {
    throw new Error('Span must be smaller than string length');
  }
  else if (size < 0) {
    throw new Error('Span must be greater than zero');
  }
  else if (!series.match(/^[0-9]+$/)) {
    throw new Error('Digits input must only contain digits');
  }

  let max_s = 0;
  let max_seq = [];

  for(let ix = 0; ix < series.length - size + 1; ix++) {
    const seq = series.substring(ix, ix + size);

    if (seq.includes('0')) { continue; }

    const s = seq.split('').map(s => parseInt(s, 10)).
          reduce((p, i) => p * i, 1);

    if (s > max_s) {
      max_s = s;
      max_seq = seq;
      if (max_seq.match(/^9+$/)) { break; }
    }
  }

  return [max_s, max_seq][0];  // ignoring max_seq
}
