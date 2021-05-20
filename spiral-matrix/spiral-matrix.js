/*
Given the size, return a square matrix of numbers in spiral order.

The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order, like these examples:
Spiral matrix of size 3
1 2 3
8 9 4
7 6 5

Spiral matrix of size 4
 1  2  3 4
12 13 14 5
11 16 15 6
10  9  8 7

*/

export class SpiralMatrix {
  static ofSize(n) {
    if (typeof n !== 'number') {
      throw new Error('Expecting an Integer');
    }

    n = Math.trunc(n)
    if (n == 0) return [];

    let matrix = new Array(n);
    for (let ix=0; ix < n; ix++) {
      matrix[ix] = new Array(n);
    }

    let kx = 1;
    let [start, end] = [0, n - 2];
    if (end < 0) {
      matrix[0][0] = 1;
      return matrix;
    }

    while (true) {
      // left -> right
      for (let ix=start; ix <= end; ix++) {
        matrix[start][ix] = kx++;
      }

      // top -> bottom
      for (let ix=start; ix <= end; ix++) {
        matrix[ix][end + 1] = kx++;
      }

      // right-to-left
      for (let ix=end + 1; ix > start; ix--) {
         matrix[end + 1][ix] = kx++;
      }

      // bottom-up
      for (let ix=end + 1; ix > start; ix--) {
        matrix[ix][start] = kx++;
      }

      // next
      start++;
      end--;
      if (end < 0) break;
    }

    if (n % 2 == 1) {  // when n is odd
      const m = n / 2 >> 0;
      matrix[m][m] = kx;
    }

    return matrix;
  }
}
