//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const Nucleotides = ['A', 'C', 'G' , 'T']

export class NucleotideCounts {
  static parse(strand) {
    // Using a map  which has ordered keys by design
    let hsh = new Map(Nucleotides.map(k => [k, 0]));

    strand = strand.toUpperCase();
    for (let ch of strand.split('')) {
      if (! Nucleotides.includes(ch)) { throw new Error('Invalid nucleotide in strand'); };

      hsh.set(ch, hsh.get(ch) + 1);
    }

    return [...hsh.keys()].map(k => hsh.get(k)).join(' ');
  }
}
