//
// This is the file for the 'Anagram' exercise.
//

export const findAnagrams = (word, wordList) => {
  const wordl = word.toLowerCase()
  const cword = canonicalRepr(word);

  return wordList.map((w) => [canonicalRepr(w), w])
    .filter(([cw, w]) => cw === cword && w.toLowerCase() !== wordl)
    .map(([_cw, w]) => w);
};

const canonicalRepr = (word) => word.toLowerCase().split('').sort().join('');
