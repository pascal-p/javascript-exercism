import { find, findAll } from './binary-search';

describe('Binary Search', () => {
  test('finds a value in an array with one element', () => {
    expect(find([6], 6)).toEqual(0);
  });

  test('finds a value in the middle of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 6)).toEqual(3);
  });

  test('finds a value at the beginning of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 1)).toEqual(0);
  });

  test('finds a value at the end of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 11)).toEqual(6);
  });

  test('finds a value in an array of odd length', () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634];
    expect(find(array, 144)).toEqual(9);
  });

  test('finds a value in an array of even length', () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    expect(find(array, 21)).toEqual(5);
  });

  test('identifies that a value is not included in the array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 7)).toThrow(new Error('Value not in array'));
  });

  test("a value smaller than the array's smallest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 0)).toThrow(new Error('Value not in array'));
  });

  test("a value larger than the array's largest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 13)).toThrow(new Error('Value not in array'));
  });

  test('nothing is found in an empty array', () => {
    expect(() => find([], 1)).toThrow(new Error('Value not in array'));
  });

  test('nothing is found when the left and right bounds cross', () => {
    expect(() => find([1, 2], 0)).toThrow(new Error('Value not in array'));
  });
});

describe('Binary Search with duplicates', () => {
  test('finds duplicated value in an array with same element', () => {
    expect(findAll([6, 6, 6, 6, 6, 6, 6, 6], 6)).toEqual([0, 7]);
  });

  test('finds duplicated value around the middle of an array', () => {
    const array = [1, 3, 4, 6, 6, 6, 8, 9, 11];
    expect(findAll(array, 6)).toEqual([3, 5]);
  });

  test('finds a value at the beginning of an array w/o duplicates', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(findAll(array, 1)).toEqual([0, 0]);
  });

  test('finds a value at the beginning of an array with duplicates', () => {
    const array = [1, 1, 1, 1, 3, 4, 6, 8, 9, 11];
    expect(findAll(array, 1)).toEqual([0, 3]);
  });

  test('finds a value at the end of an array w/o duplicates', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(findAll(array, 11)).toEqual([6, 6]);
  });

  test('finds a value at the end of an array with duplicates', () => {
    const array = [1, 3, 4, 6, 8, 9, 11, 11, 11, 11, 11];
    expect(findAll(array, 11)).toEqual([6, 10]);
  });

  test('finds a value in an array of odd length', () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 144, 144, 233, 377, 634];
    expect(findAll(array, 144)).toEqual([9, 11]);
  });

  test('finds a value in an array of even length', () => {
    const array = [1, 3, 5, 8, 13, 21, 21, 21, 21, 34, 55, 89, 144, 233, 377];
    expect(findAll(array, 21)).toEqual([5, 8]);
  });

  //
   test('identifies that a value is not included in the array', () => {
     const array = [1, 1, 3, 3, 4, 4, 4, 6, 8, 9, 9, 9, 9, 11, 11, 12];
    expect(() => findAll(array, 7)).toThrow(new Error('Value not in array'));
  });

  test("a value smaller than the array's smallest value is not found", () => {
    const array = [1, 3, 3, 3, 4, 4, 5, 5, 5, 6, 8, 9, 9, 9, 9, 9, 11];
    expect(() => findAll(array, 0)).toThrow(new Error('Value not in array'));
  });

  test("a value larger than the array's largest value is not found", () => {
    const array = [1, 3, 4, 6, 7, 7, 7, 8, 9, 11, 11, 11, 11, 11, 12, 12, 12, 12];
    expect(() => findAll(array, 13)).toThrow(new Error('Value not in array'));
  });

  test('nothing is found in an empty array', () => {
    expect(() => findAll([], 1)).toThrow(new Error('Value not in array'));
  });

  test('nothing is found when the left and right bounds cross', () => {
    expect(() => findAll([1, 1, 1, 2, 2, 2, 2], 0)).toThrow(new Error('Value not in array'));
  });
});
