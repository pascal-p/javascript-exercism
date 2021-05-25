/*
  Detect saddle points in a matrix.

  So say you have a matrix like so:

    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2     <--- saddle point at column 1, row 2, with value 5
3 | 6  6  7

  It has a saddle point at column 1, row 2.

  It's called a "saddle point" because it is greater than or equal to every element in its row and less than or equal to every element in its column.

  A matrix may have zero or more saddle points.
  Your code should be able to provide the (possibly empty) list of all the saddle points for any given matrix.

  The matrix can have a different number of rows and columns (Non square).

  Note that you may find other definitions of matrix saddle points online, but the tests for this exercise follow the above unambiguous definition.
*/

export const saddlePoints = (matrix) => {
  // Assume matrix as input

  if (matrix.length == 0 || (matrix.length == 1 && matrix[0].length == 0)) {
    return [];
  }

  let spoints = [];
  let [nrows, ncols] = [matrix.length, matrix[0].length];

  for (let ix=0; ix < nrows; ix++) {
    for (let jx=0; jx < ncols; jx++) {

      let isSaddlePoint = true; // matrix[ix][jx] is a saddle point, a priori

      // check current row
      for (let rjx = 0; rjx < ncols; rjx++) {
        if (rjx == jx) continue;

        if (matrix[ix][rjx] > matrix[ix][jx]) {
          isSaddlePoint = false;
          break;
        }
      }

      if (isSaddlePoint) {
        // check current col
        for (let rix=0; rix < nrows; rix++) {
          if (rix == ix) continue;

          if (matrix[rix][jx] < matrix[ix][jx]) {
            isSaddlePoint = false;
            break;
          }
        }
      }

      if (isSaddlePoint) {
        spoints.push({row: ix + 1, column: jx + 1})
      }
    }
  }

  return spoints;
};
