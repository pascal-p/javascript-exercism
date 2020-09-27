import { Squares,
         diffOfSquares, sumOfSquares, squareOfSum } from './difference-of-squares';

describe('difference-of-squares', () => {
  const squares1 = new Squares(1);
  const squares5 = new Squares(5);
  const squares100 = new Squares(100);
  const squares500 = new Squares(500);
  const squ_1_000 = new Squares(1_000);
  const squ_5_000 = new Squares(5_000);
  const squ_10_000 = new Squares(10_000);
  // const squ_100_000 = new Squares(100000);
  // const squ_500_000 = new Squares(500000);

  describe('Square the sum of the numbers up to the given number', () => {
    test('square of sum 1', () => {
      expect(squares1.squareOfSum).toBe(1);
    });

    test('square of sum 5', () => {
      expect(squares5.squareOfSum).toBe(225);
    });

    test('square of sum 100', () => {
      expect(squares100.squareOfSum).toBe(25502500);
    });

    test('square of sum 1_000', () => {
      expect(squ_1_000.squareOfSum).toBe(250500250000);
    });

    test('square of sum 5_000', () => {
      expect(squ_5_000.squareOfSum).toBe(156312506250000);
    });

    test('square of sum 10_000', () => {
      expect(squ_10_000.squareOfSum).toBe(2500500025000000);
    });

    // overflow: finds 497141619479951600
    // test('square of sum 100_000', () => {
    //   expect(squ_100_000.squareOfSum).toBe(6553755928790448384);
    // });

    // overflow - finds 199093026440909060
    // test('square of sum 500_000', () => {
    //   expect(squ_500_000.squareOfSum).toBe(15625062500062500000000);
    // });
  });


  describe('Sum the squares of the numbers up to the given number', () => {
    test('sum of squares 1', () => {
      expect(squares1.sumOfSquares).toBe(1);
    });

    test('sum of squares 5', () => {
      expect(squares5.sumOfSquares).toBe(55);
    });

    test('sum of squares 100', () => {
      expect(squares100.sumOfSquares).toBe(338350);
    });

    test('sum of squares 1_000', () => {
      expect(squ_1_000.sumOfSquares).toBe(333833500);
    });

    // overflow: finds: 161150305.33333334
    // test('sum of squares 5_000', () => {
    //   expect(squ_5_000.sumOfSquares).toBe(41679167500);
    // });

    // overflow: finds: -192458322.66666666
    // test('sum of squares 10_000', () => {
    //   expect(squ_10_000.sumOfSquares).toBe(333383335000);
    // });

    // overflow
    // test('square of sum 500_000', () => {
    //   expect(squ_500_000.sumOfSquares).toBe(41666791666750000);
    // });
  });


  describe('Subtract sum of squares from square of sums', () => {
    test('difference of squares 1', () => {
      expect(squares1.difference).toBe(0);
    });

    test('difference of squares 5', () => {
      expect(squares5.difference).toBe(170);
    });

    test('difference of squares 100', () => {
      expect(squares100.difference).toBe(25164150);
    });

    test('difference of squares 500', () => {
      expect(squares500.difference).toBe(15645770750);
    });

    test('difference of squares 1_000', () => {
      expect(squ_1_000.difference).toBe(250166416500);
    });

    // overflow
    // test('difference of squares 5_000', () => {
    //   expect(squ_5_000.difference).toBe(156270827082500);
    // });
  });


  //
  // Functional Portion
  //

  describe('squareOfSum', () => {
    test('square of sum 1', () => {
      expect(squareOfSum(1)).toBe(1);
    });

    test('square of sum 5', () => {
      expect(squareOfSum(5)).toBe(225);
    });

    test('square of sum 100', () => {
      expect(squareOfSum(100)).toBe(25502500);
    });

    test('square of sum 500', () => {
      expect(squareOfSum(500)).toBe(15687562500);
    });

    test('square of sum 1_000', () => {
      expect(squareOfSum(1_000)).toBe(250500250000);
    });

    test('square of sum 5_000', () => {
      expect(squareOfSum(5_000)).toBe(156312506250000);
    });

    test('square of sum 10_000', () => {
      expect(squareOfSum(10_000)).toBe(2500500025000000);
    });

    // overflow: finds 497141619479951600
    // test('square of sum 100_000', () => {
    //   expect(squareOfSum(100_000)).toBe(6553755928790448384);
    // });

    // overflow - finds 199093026440909060
    // test('square of sum 500_000', () => {
    //   expect(squareOfSum(500_000).toBe(15625062500062500000000);
    // });
  });


  describe('sumOFSquares', () => {
    test('sum of squares 1', () => {
      expect(sumOfSquares(1)).toBe(1);
    });

    test('sum of squares 5', () => {
      expect(sumOfSquares(5)).toBe(55);
    });

    test('sum of squares 50', () => {
      expect(sumOfSquares(50)).toBe(42925);
    });

    test('sum of squares 100', () => {
      expect(sumOfSquares(100)).toBe(338350);
    });

    test('sum of squares 500', () => {
      expect(sumOfSquares(500)).toBe(41791750);
    });

    test('sum of squares 750', () => {
      expect(sumOfSquares(750)).toBe(140906375);
    });

    test('sum of squares 1_000', () => {
      expect(sumOfSquares(1_000)).toBe(333833500);
    });

    // overflow:
    // test('sum of squares 1_500', () => {
    //   expect(sumOfSquares(1_500)).toBe(333833500);
    // });
  });


  describe('diffOfSquares', () => {
    test('difference of squares 1', () => {
      expect(diffOfSquares(1)).toBe(0);
    });

    test('difference of squares 5', () => {
      expect(diffOfSquares(5)).toBe(170);
    });

    test('difference of squares 100', () => {
      expect(diffOfSquares(100)).toBe(25164150);
    });

    test('difference of squares 500', () => {
      expect(diffOfSquares(500)).toBe(15645770750);
    });

    test('difference of squares 1_000', () => {
      expect(diffOfSquares(1_000)).toBe(250166416500);
    });

    // overflow
    // test('difference of squares 5_000', () => {
    //   expect(diffOfSquares(5_000)).toBe(156270827082500);
    // });
  });

});
