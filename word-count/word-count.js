//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
"use strict"

const PUNCTUATION = [':', ';', '\\\?', '!', ',', '\\\.']; // but single-quote

export const countWords = (str) => {
  let wc = {} // new Map();

  // first, replace any punctuation symbols
  const expr = PUNCTUATION.map((s) => s + '|').join('').replace(/\|$/, '');
  const punctRE = new RegExp(expr, 'g')
  str = str.replace(punctRE, ' ');  // replaceAll() not yet supported (but firefox)

  // second make sur the str is space separated (1 space only) and trimmed
  const allSpacesRE = /(\t|\n|\s)+/g;
  str = str.replace(allSpacesRE, ' ').trim();

  const wordRE = /^[\w']+$/i;
  const wordMixedRE = /^[^\w](\w+)[^\w]$/;

  // closure
  // const updateFn = (w) => wc.set(w, (wc.get(w) || 0) + 1);
  const updateFn = (w) => wc[w] = wc[w] === undefined ? 1 : wc[w] + 1;

  for (let word of str.split(' ')) {
    let m = word.match(wordMixedRE);

    if (m === null) {
      if (word.match(wordRE)) { updateFn(word.toLowerCase()); }
      continue;
    }

    updateFn(m[1].toLowerCase());
  };

  return wc;
};
