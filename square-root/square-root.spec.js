import { squareRoot } from './square-root';

describe('Square root', () => {
  test('root of 1', () => {
    expect(squareRoot(1)).toEqual(1);
  });

  test('root of 4', () => {
    expect(squareRoot(4)).toEqual(2);
  });

  test('root of 5', () => {
    expect(squareRoot(25)).toEqual(5);
  });

  test('root of 81', () => {
    expect(squareRoot(81)).toEqual(9);
  });

  test('root of 196', () => {
    expect(squareRoot(196)).toEqual(14);
  });

  test('root of 65025', () => {
    expect(squareRoot(65025)).toEqual(255);
  });

  // Addition
  test('root of 125348', () => {
    const EPS = 1e-8;
    const expected = 354.04519485; // 51

    expect(Math.abs(squareRoot(125348, EPS) - expected)).toBeLessThanOrEqual(EPS);
  });
  
  test('root of 1522756', () => {
    const EPS = 1e-8;
    const expected = 1234;

    expect(squareRoot(1522756, EPS)).toEqual(expected);
  });
  
});
