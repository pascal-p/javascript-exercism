import { primeFactors } from './prime-factors';

describe('primeFactors', () => {
  test('returns an empty array for 1', () => expect(primeFactors(1)).toEqual([]));

  test('factors 2', () => expect(primeFactors(2)).toEqual([2]));
  test('factors 3', () => expect(primeFactors(3)).toEqual([3]));

  // Additions
  test('factors 5', () => expect(primeFactors(5)).toEqual([5]));
  test('factors 7', () => expect(primeFactors(7)).toEqual([7]));

  test('factors 4', () => expect(primeFactors(4)).toEqual([2, 2]));

  test('factors 6', () => expect(primeFactors(6)).toEqual([2, 3]));

  test('factors 8', () => expect(primeFactors(8)).toEqual([2, 2, 2]));

  test('factors 9', () => expect(primeFactors(9)).toEqual([3, 3]));

  test('factors 27', () => expect(primeFactors(27)).toEqual([3, 3, 3]));

  test('factors 625', () => expect(primeFactors(625)).toEqual([5, 5, 5, 5]));

  // Additions
  test('factors 1024', () => expect(primeFactors(1024)).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
  test('factors 5959', () => expect(primeFactors(5959)).toEqual([59, 101]));
  test('factors 1000009', () => expect(primeFactors(1000009)).toEqual([293, 3413]));

  test('factors 901255', () => expect(primeFactors(901255)).toEqual([5, 17, 23, 461]));

  test('factors 93819012551', () => expect(primeFactors(93819012551)).toEqual([11, 9539, 894119]));

  //
  // test('factors ', () => expect(primeFactors()).toEqual([]));

  test('factors 199_999_999', () => expect(primeFactors(199_999_999)).toEqual([89, 1447, 1553]));
  test('factors 199_999_999_998', () => expect(primeFactors(199_999_999_998)).toEqual([2, 3, 3, 21649, 513239]));
  test('factors 700_666_999_666', () => expect(primeFactors(700_666_999_666)).toEqual([2, 193, 257, 1453, 4861]));
  test('factors 1_099_511_627_775', () => expect(primeFactors(1_099_511_627_775)).toEqual([3, 5, 5, 11, 17, 31, 41, 61681]));

  // integer overflow => incorrect result!
  // test('factors 2^64 - 1', () => expect(primeFactors(340282366920938463463374607431768211455)).toEqual([3, 5, 17, 257, 641, 65537, 274177, 6_700_417, 672_804_213_107_21]));


  test('invalid input', () => {
    expect(() =>  {
      primeFactors(0);
    }).toThrow('argument should be strictly positive');

    expect(() =>  {
      primeFactors(-100);
    }).toThrow('argument should be strictly positive');
  });

  test('integer overflow', () => {
    expect(() =>  {
      primeFactors(340282366920938463463374607431768211455, true);
    }).toThrow('Integer Overflow');
  });

});
