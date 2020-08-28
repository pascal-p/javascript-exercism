import { toRna } from './rna-transcription'

describe('Transcription', () => {
  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });

  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
    expect(toRna('c')).toEqual('G');
  });

  test('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
    expect(toRna('g')).toEqual('C');
  });

  test('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
    expect(toRna('t')).toEqual('A');
  });

  test('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
    expect(toRna('a')).toEqual('U');
  });

  test('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
    expect(toRna('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')).toEqual('UCGAAAAGUAAGACUGACGUUGCCCGUUAUACAGAGACACACCUAAUUUUUUUCUCACAGACUAUCGUCG');
  });

   test('dna correctly handles invalid input', () => {
     expect(() =>  {
       toRna('U');
     }).toThrow('Not a valid nucleotide!');

     expect(() =>  {
       toRna('ACGTXXXCTTAA');
     }).toThrow('Not a valid nucleotide!');
  });
})
