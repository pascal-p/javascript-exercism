import { prime } from './nth-prime';

describe('nth-prime', () => {
  //
  test('first prime', () => {
    expect(prime(1)).toEqual(2);
  });

  test('second prime', () => {
    expect(prime(2)).toEqual(3);
  });

  test('sixth prime', () => {
    expect(prime(6)).toEqual(13);
  });

  test('big prime', () => {
    const lim = 1000000;
    expect(prime(10001, lim)).toEqual(104743);
  });

  test('big prime', () => {
    const lim = 10000000;
    expect(prime(100001, lim)).toEqual(1299721);
  });

  test('there is no zeroth prime', () => {
    expect(() => prime(0)).toThrow(new Error('There is no zeroth prime'));
  });

  test('first 20 primes', () => {
    const lim = 10000;

    const expected_primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    ];

    expect(primeRange(20)).toEqual(expected_primes);
  });

  test('first 100 primes', () => {
    const lim = 1000000;

    const expected_primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
      73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
      127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
      179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
      283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
      353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
      419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
      467, 479, 487, 491, 499, 503, 509, 521, 523, 541
    ];

    expect(primeRange(100)).toEqual(expected_primes);
  });

});

const primeRange = (n) => {
  let primes = [];
  //
  for (let ix=0; ix < n; ix++) {
    primes.push(prime(ix + 1));
  }
  return primes;
}
