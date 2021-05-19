/*
  Determine if a sentence is a pangram.
  A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once.
  The best known English pangram is:
  "The quick brown fox jumps over the lazy dog."

  The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/

const LEN_ALPHA = 26;

export const isPangram = (sentence) => {
  if (typeof(sentence) !== 'string') {
    throw new Error('Expecting a string!');
  }

  if (sentence.length < LEN_ALPHA) {
    return false;
  }

  // build a set and check its length is 26
  let s = new Set();
  for (let ix=0; ix < sentence.length; ix++) {
    let ch = sentence[ix].toLowerCase();
    if ('a' <= ch  && ch <= 'z') {
      s.add(ch);
    }
  }

  return s.size == LEN_ALPHA;
};

const isPangramAlt = (sentence) => {
  if (typeof(sentence) !== 'string') {
    throw new Error('Expecting a string!');
  }

  if (sentence.length < LEN_ALPHA) {
    return false;
  }

  // build a 'presence' Map and check whether it contains 26 keys == 1 per alphabetic char
  let d = new Map();
  for (let ix=0; ix < sentence.length; ix++) {
    let ch = sentence[ix].toLowerCase();
    if ('a' <= ch  && ch <= 'z') {
      if (d.has(ch)) {
        continue; // already seen
      }
      else {
        d.set(ch, 1);
      }
    }
  }

  return d.size == LEN_ALPHA;
};
