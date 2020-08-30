//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  if (dna.length == 0) { return ""; };
  return dna.toUpperCase().split('').map((ch) => transcribe(ch)).join('');
};

const MAP_DNA_RNA = {
  A: 'U',
  C: 'G',
  G: 'C',
  T: 'A'
};

const transcribe = (ch) => {
  if (! Object.keys(MAP_DNA_RNA).includes(ch)) { throw new Error('Not a valid nucleotide!'); };
  return MAP_DNA_RNA[ch]
}

//
// other version:
//

/*
const toRnaAlt = (dna) => {
  if (dna.length == 0) { return ""; };

  let rna = "";
  dna = dna.toUpperCase();

  for (let ix = 0; ix < dna.length; ix++) {
    if (! Object.keys(MAP_DNA_RNA).includes(dna.charAt(ix))) { throw ('Not a valid nucleotide!') };
    rna += MAP_DNA_RNA[dna.charAt(ix)];
  }

  return rna;
};
*/
