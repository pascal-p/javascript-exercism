//
// file for the 'Acronym' exercise.
//

export const parse = (phrase) => {
  if (phrase.length === 0) { return ""; }

  const firstLetter = (word) => {
    word = word.toUpperCase();
    return ('A' <= word[0] && word[0] <= 'Z') ? word[0] : word[1];
  }

  return phrase.split(/[\s,\.:;\-_"]/)
    .filter((w) => w !== '')
    .map(firstLetter)
    .join('')
};
