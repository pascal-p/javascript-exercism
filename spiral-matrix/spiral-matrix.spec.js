import { SpiralMatrix } from './spiral-matrix';

describe('Spiral Matrix', () => {
  test('empty spiral', () => {
    const expected = [];
    const actual = SpiralMatrix.ofSize(0);

    expect(actual).toEqual(expected);
  });

  test('trivial spiral', () => {
    const expected = [[1]];
    const actual = SpiralMatrix.ofSize(1);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 2', () => {
    const expected = [
      [1, 2],
      [4, 3],
    ];
    const actual = SpiralMatrix.ofSize(2);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const actual = SpiralMatrix.ofSize(3);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 4', () => {
    const expected = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const actual = SpiralMatrix.ofSize(4);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 5', () => {
    const expected = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    const actual = SpiralMatrix.ofSize(5);

    expect(expected).toEqual(actual);
  });

  test('spiral of size 7', () => {
    const expected = [
      [ 1,  2,  3,  4,  5,  6,  7],
      [24, 25, 26, 27, 28, 29,  8],
      [23, 40, 41, 42, 43, 30,  9],
      [22, 39, 48, 49, 44, 31, 10],
      [21, 38, 47, 46, 45, 32, 11],
      [20, 37, 36, 35, 34, 33, 12],
      [19, 18, 17, 16, 15, 14, 13],
    ];
    const actual = SpiralMatrix.ofSize(7);

    expect(expected).toEqual(actual);
  });

  test('spiral of size 10', () => {
    const expected = [
      [ 1,  2,  3,   4,   5,  6,  7,  8,  9, 10],
      [36, 37, 38,  39,  40, 41, 42, 43, 44, 11],
      [35, 64, 65,  66,  67, 68, 69, 70, 45, 12],
      [34, 63, 84,  85,  86, 87, 88, 71, 46, 13],
      [33, 62, 83,  96,  97, 98, 89, 72, 47, 14],
      [32, 61, 82,  95, 100, 99, 90, 73, 48, 15],
      [31, 60, 81,  94,  93, 92, 91, 74, 49, 16],
      [30, 59, 80,  79,  78, 77, 76, 75, 50, 17],
      [29, 58, 57,  56,  55, 54, 53, 52, 51, 18],
      [28, 27, 26,  25,  24, 23, 22, 21, 20, 19],
    ];
    const actual = SpiralMatrix.ofSize(10);

    expect(expected).toEqual(actual);
  });

});
