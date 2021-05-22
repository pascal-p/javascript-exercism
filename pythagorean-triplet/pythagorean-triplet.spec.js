import { triplets } from './pythagorean-triplet';

function tripletsWithSum(sum, options = {}) {
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray.sort((a, b) => a - b)
  );
}

describe('Triplet', () => {
  test('triplets whose sum is 12', () => {
    expect(tripletsWithSum(12)).toEqual([[3, 4, 5]]);
  });

  test('triplets whose sum is 108', () => {
    expect(tripletsWithSum(108)).toEqual([[27, 36, 45]]);
  });

  test('triplets whose sum is 1000', () => {
    expect(tripletsWithSum(1000)).toEqual([[200, 375, 425]]);
  });

  test('no matching triplets for 1001', () => {
    expect(tripletsWithSum(1001)).toEqual([]);
  });

  test('returns all matching triplets', () => {
    expect(tripletsWithSum(90)).toEqual([
      [9, 40, 41],
      [15, 36, 39],
    ]);
  });

  test('several matching triplets', () => {
    expect(tripletsWithSum(840)).toEqual([
      [40, 399, 401],
      [56, 390, 394],
      [105, 360, 375],
      [120, 350, 370],
      [140, 336, 364],
      [168, 315, 357],
      [210, 280, 350],
      [240, 252, 348],
    ]);
  });

  test('returns triplets with no factor smaller than minimum factor', () => {
    expect(tripletsWithSum(90, { minFactor: 10 })).toEqual([[15, 36, 39]]);
  });

  test('returns triplets with no factor larger than maximum factor', () => {
    expect(tripletsWithSum(840, { maxFactor: 349 })).toEqual([[240, 252, 348]]);
  });

  test('returns triplets with factors in range', () => {
    expect(tripletsWithSum(840, { maxFactor: 352, minFactor: 150 })).toEqual([
      [210, 280, 350],
      [240, 252, 348],
    ]);
  });

  test('triplets for large number', () => { //
  // test.skip('triplets for large number', () => {
    expect(tripletsWithSum(30000)).toEqual([
      [1200, 14375, 14425],
      [1875, 14000, 14125],
      [5000, 12000, 13000],
      [6000, 11250, 12750],
      [7500, 10000, 12500],
    ]);
  });
});


/*
  PASS  ./pythagorean-triplet.spec.js
  Triplet
    ✓ triplets whose sum is 12 (2 ms)
    ✓ triplets whose sum is 108 (1 ms)
    ✓ triplets whose sum is 1000 (8 ms)
    ✓ no matching triplets for 1001 (6 ms)
    ✓ returns all matching triplets
    ✓ several matching triplets (3 ms)
    ✓ returns triplets with no factor smaller than minimum factor (1 ms)
    ✓ returns triplets with no factor larger than maximum factor
    ✓ returns triplets with factors in range (1 ms)
    ✓ triplets for large number (3472 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        4.591 s
*/
