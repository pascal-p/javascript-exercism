/*
  An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, 
  however spaces and hyphens are allowed to appear multiple times.

  Examples of isograms:

  lumberjacks
  background
  downstream
  six-year-old

  The word isograms, however, is not an isogram, because the s repeats.
*/

export const isIsogram = (word) => {
  if (typeof(word) !== 'string') {
    throw new Error('Expecting a string!');
  }

  // build a frequency map - check than all values are 1
  let d = new Map();

  for (let ix=0; ix < word.length; ix++) {
    let ch = word[ix].toLowerCase();
    if ('a' <= ch  && ch <= 'z') {
      if (d.has(ch)) {
        return false; // no point going on...
      }
      else {
        d.set(ch, 1);
      }
    }
  }

  const vals = [...d.values()];
  return vals.every((x) => x == 1);
};
