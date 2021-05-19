/*
  Introduction

  Given a string representing a matrix of numbers, return the rows and columns of that matrix.

  So given a string with embedded newlines like:

  9 8 7
  5 3 2
  6 6 7

  representing this matrix:
    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7

  your code should be able to spit out:

  A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
  A list of the columns, reading each column top-to-bottom while moving from left-to-right.

  The rows for our example matrix:
    9, 8, 7
    5, 3, 2
    6, 6, 7

  And its columns:
    9, 5, 6
    8, 3, 6
    7, 2, 7
*/

export class Matrix {
  constructor(mspec) {
    //
    // mspec == matrix specification
    // build 2d arrays from mspec - representing matrix (which can be non squared)
    //
    let rows = mspec.split('\n');
    const n = rows.length;
    let matrix = new Array(n);
    let ix = 0;
    let col_dims = [];

    for (let row of rows) {
      let cols = row.split(" ");
      const m = cols.length;
      matrix[ix] = new Array(m);
      col_dims.push(m);
      //
      let jx = 0;
      for (let col of cols) {
        matrix[ix][jx] = parseInt(col, 10); //push(parseInt(col, 10));
        jx++;
      }
      ix++;
    }
    //
    this.matrix = matrix;
    this.shape = [n, col_dims];
  }

  get rows() {
    let ary = [];
    for (let ix=0; ix < this.shape[0]; ix++) {
      ary.push(this.matrix[ix])
    }
    return ary;
  }

  get columns() {
    // transposing in effect...
    const n = this.shape[0];
    const m = Math.max(...this.shape[1]);
    let ary = new Array(m);

    for (let jx=0; jx < m; jx++) {
      ary[jx] = new Array(n);
    }
    for (let jx=0; jx < n; jx++) {
      for (let ix=0; ix < this.shape[1][jx]; ix++) {
        ary[ix][jx] = this.matrix[jx][ix];
      }
    }
    return ary;
  }
}
