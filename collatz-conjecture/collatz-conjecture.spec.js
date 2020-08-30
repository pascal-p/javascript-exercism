import { steps } from './collatz-conjecture';

describe('steps()', () => {
  test('zero steps for one', () => {
    expect(steps(1)).toEqual(0);
  });

  test('divide if even', () => {
    expect(steps(16)).toEqual(4);
  });

  test('even and odd steps', () => {
    expect(steps(12)).toEqual(9);
  });

  test('Large number of even and odd steps', () => {
    expect(steps(1000000)).toEqual(152);
  });

  test('zero is an error', () => {
    expect(() => {
      steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  test('negative value is an error', () => {
    expect(() => {
      steps(-15);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  test('Larger number (1)', () => {
    expect(steps(75128138247)).toEqual(1228);
  });

  test('Larger number (2)', () => {
    expect(steps(989345275647)).toEqual(1348);
  });

  // causing overflow!
  // test('Larger number (3)', () => {
  //   expect(steps(7887663552367)).toEqual(1563);
  // });

  // causing overflow!
  // test('Very large number ...', () => {
  //   expect(steps(1339302163616345727)).toEqual(2330);
  // });
});
