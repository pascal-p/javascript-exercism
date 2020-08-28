//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const MAP_DNA_RNA = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A'
  };

  var rna = "";

  if (dna.length == 0) {
    return rna;
  }
  else {
    // > 0
    dna = dna.toUpperCase();
  };
  
  for (var ix = 0; ix < dna.length; ix++) {
    if (! Object.keys(MAP_DNA_RNA).includes(dna.charAt(ix))) {
      throw('Not a valid nucleotide!')
    };

    rna += MAP_DNA_RNA[dna.charAt(ix)];
  }

  return rna;
};
