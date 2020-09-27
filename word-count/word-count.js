//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
"use strict"

const PUNCTUATION = [':', ';', '\\\?', '!', ',', '\\\.']; // but single-quote

export const countWords_V1 = (str) => {
  let wc = {} // new Map();

  // first, replace any punctuation symbols
  const expr = PUNCTUATION.map((s) => s + '|').join('').replace(/\|$/, '');
  const punctRE = new RegExp(expr, 'g')
  str = str.replace(punctRE, ' ');  // replaceAll() not yet supported (but firefox)

  // second make sure the str is space separated (1 space only) and trimmed
  const allSpacesRE = /(\t|\n|\s|_)+/g;
  str = str.replace(allSpacesRE, ' ').trim();

  const wordRE = /^\w+$/i;            // no single-quote
  const wordMixedRE = /^[\w']+$/i;    // potentially multi-single quotes

  // closure
  const updateFn = (w) => wc[w] = wc[w] === undefined ? 1 : wc[w] + 1;

  for (let word of str.split(' ')) {
    if (word.match(wordRE)) {
      updateFn(word.toLowerCase());
    }
    else if (word.startsWith("'") && word.endsWith("'")) {
      updateFn(word.replace(/^'/, '').replace(/'$/, '').toLowerCase());
    }
    else if (word.match(wordMixedRE)) {
      updateFn(word.toLowerCase());
    }
  };

  return wc;
};

export const countWords = (str) => {
  // first, replace any punctuation symbols
  const expr = PUNCTUATION.map((s) => s + '|').join('').replace(/\|$/, '');
  const punctRE = new RegExp(expr, 'g')
  str = str.replace(punctRE, ' ');

  // second make sure the str is space separated (1 space only) and trimmed
  const allSpacesRE = /(\t|\n|\s|_)+/g;
  str = str.replace(allSpacesRE, ' ').trim();

  const updateFn = (wc, w) => wc[w] = wc[w] === undefined ? 1 : wc[w] + 1;

  return str.split(' ').reduce(
    (wc, word) => {
      if (word.match(/^\w+$/i)) {          // no single-quote
        updateFn(wc, word.toLowerCase());
      }
      else if (word.startsWith("'") && word.endsWith("'")) {
        updateFn(wc, word.replace(/^'/, '').replace(/'$/, '').toLowerCase());
      }
      else if (word.match(/^[\w']+$/i)) {  // potentially multi-single quotes
        updateFn(wc, word.toLowerCase());
      }
      return wc;
    },
    {}
  );
};
