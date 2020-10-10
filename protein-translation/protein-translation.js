//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COD_PRO = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'], ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'], ['UUG', 'Leucine'],
  ['UCU', 'Serine'], ['UCC', 'Serine'], ['UCA', 'Serine'], ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'], ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'], ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'], ['UAG', 'STOP'], ['UGA', 'STOP']
]);

const LEN_COD = 3;

export const translate = (strand) => {
  if (strand == undefined) { return []; }

  strand = strand.toUpperCase();

  if (strand.length == LEN_COD) {
    const val = getValue(strand);
    return val === undefined ? [] : [val];
  }

  if (strand.length %3 !== 0) { throw new Error("Invalid codon"); }

  let proteins = [];
  for (let ix=0; ix <= strand.length - LEN_COD; ix += LEN_COD) {
    const key = strand.slice(ix, ix + LEN_COD);
    const val = getValue(key);

    if (val === undefined) { return proteins; }
    proteins.push(val);
  }

  return proteins;
};

const getValue = (key) => {
  if (COD_PRO.has(key)) {
    let val =  COD_PRO.get(key);
    return val === 'STOP' ?  undefined : val;
  }

  throw new Error("Invalid codon"); // Not such CODON in our base (yet)
}
