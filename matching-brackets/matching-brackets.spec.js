import { isPaired } from './matching-brackets';

describe('Matching Brackets', () => {
  test('paired square brackets', () => {
    expect(isPaired('[]')).toBe(true);
  });

  test('empty string', () => {
    expect(isPaired('')).toBe(true);
  });

  test('unpaired brackets', () => {
    expect(isPaired('[[')).toBe(false);
  });

  test('wrong ordered brackets', () => {
    expect(isPaired('}{')).toBe(false);
  });

  test('wrong closing bracket', () => {
    expect(isPaired('{]')).toBe(false);
  });

  test('paired with whitespace', () => {
    expect(isPaired('{ }')).toBe(true);
  });

  test('partially paired brackets', () => {
    expect(isPaired('{[])')).toBe(false);
  });

  test('simple nested brackets', () => {
    expect(isPaired('{[]}')).toBe(true);
  });

  test('several paired brackets', () => {
    expect(isPaired('{}[]')).toBe(true);
  });

  test('paired and nested brackets', () => {
    expect(isPaired('([{}({}[])])')).toBe(true);
  });

  test('unopened closing brackets', () => {
    expect(isPaired('{[)][]}')).toBe(false);
  });

  test('unpaired and nested brackets', () => {
    expect(isPaired('([{])')).toBe(false);
  });

  test('paired and wrong nested brackets', () => {
    expect(isPaired('[({]})')).toBe(false);
  });

  test('paired and incomplete brackets', () => {
    expect(isPaired('{}[')).toBe(false);
  });

  test('too many closing brackets', () => {
    expect(isPaired('[]]')).toBe(false);
  });

  test('math expression', () => {
    expect(isPaired('(((185 + 223.85) * 15) - 543)/2')).toBe(true);
  });

  test('complex latex expression', () => {
    expect(
      isPaired(
        '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
      )
    ).toBe(true);
  });

  // more ...
  test('no brackets at all', () => {
    expect(isPaired('sdfhgkasdhfkashkd, 9sjdh, kahsdk9shdkajhd')).toBe(true);
  });

  test('some well formed brackets', () => {
    expect(isPaired('[(sdfhgkasdhfkashkd (9sjdh) kahsdk9shdkajhd)][{{}}]asasas')).toBe(true);
  });

  test('some non well formed brackets', () => {
    expect(isPaired('[(sdfhgkasdhfkashkd (9sjdh) kahsdk9shdkajhd)]{{}]asasas')).toBe(false);
  });

});
