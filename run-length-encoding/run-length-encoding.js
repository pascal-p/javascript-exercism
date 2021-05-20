/*
  Implement run-length encoding and decoding.
  Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.

  For example we can represent the original 53 characters with only 13.
  "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"

  RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.
  "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"

  For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace.
  This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
*/

export const encode = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Expecting a string');
  }

  if (str.length == 0) {
    return '';
  }
  else if (str.length == 1) {
    return str;
  }

  let [prev_ch, count, encoding] = ['', 0, ''];
  for (let cur_ch of str) {
    if (cur_ch == prev_ch) {
      count += 1;
    }
    else {
      if (cur_ch != '') {
        encoding = encoding.concat(count > 1 ? String(count) : "", prev_ch);
      }
      prev_ch = cur_ch;
      count = 1;
    }
  }

  if (count > 0) {
    encoding = encoding.concat(count > 1 ? String(count) : "", prev_ch);
  }

  return encoding;
};

export const decode = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Expecting a string');
  }

  // str should not be a single digit like '2' for ex.
  if (str.length == 0) {
    return '';
  }
  else if (str.length == 1) {
    return str;
  }

  let [decoding, snum] = ['', ''];
  for (let cur_ch of str) {
    if (cur_ch >= '0' && cur_ch <= '9') {
      snum = snum.concat(cur_ch);
    }
    else {
      // cur_ch is a Character that needs to be repeated
      if (snum.length == 0) {
        snum = 1;
      }
      const num = parseInt(snum, 10);
      decoding = decoding.concat(cur_ch.repeat(num));
      snum = '';
    }
  }

  return decoding;
};
