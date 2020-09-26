import { parse } from './acronym';

describe('Acronyms are produced from', () => {
  test('title cased phrases/1', () => {
    expect(parse('Portable Network Graphics')).toEqual('PNG');
  });

  test('title cased phrases/2', () => {
    const spec = [
      ["Portable Network Graphics", "PNG"],
      ["Looks good to me", "LGTM"],
      ["Sounds 'good' to me", "SGTM"],
      ["Isn't it good", "IIG"],
      ["If and only if...", "IAOI"],
      ["Yet Another Funny Acronym", "YAFA"],
      ["Sometimes, it is necessary to raise an exception.", "SIINTRAE"],
      ["Last-in, first-out", "LIFO"],
      ["Oh my \"Gosh!\"", "OMG"],
      ["Functional Programming", "FP"],
      ["Imperative Programming", "IP"],
      ["Object oriented Programming", "OOP"],
      ["Differentiable Programming", "DP"]]
    for(const [str, exp] of spec) {
      expect(parse(str)).toEqual(exp);
    }
  });

  test('other title cased phrases', () => {
    expect(parse('Ruby on Rails')).toEqual('ROR');
  });

  test('phrases with punctuation', () => {
    expect(parse('First In, First Out')).toEqual('FIFO');
  });

  test('phrases with all uppercase words', () => {
    expect(parse('GNU Image Manipulation Program')).toEqual('GIMP');
  });

  test('phrases with punctuation without whitespace', () => {
    expect(parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });

  test('long phrases', () => {
    expect(parse('Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me'))
      .toEqual('ROTFLSHTMDCOALM');
  });

  test('phrases with consecutive delimiters', () => {
    expect(parse('Something - I made up from thin air')).toEqual('SIMUFTA');
  });

  test('phrases with apostrophes', () => {
    expect(parse("Halley's Comet")).toEqual('HC');
  });

  test('phrases with underscore emphasis', () => {
    expect(parse('The Road _Not_ Taken')).toEqual('TRNT');
  });
});
