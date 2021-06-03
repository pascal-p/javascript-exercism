//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const N = 8;

export class QueenAttack {
  constructor(qSpec) {
    this.black = typeof qSpec !== 'undefined' &&  typeof qSpec.black !== 'undefined' ?
      setupQueen(qSpec.black) : [0, 3];

    this.white = typeof qSpec !== 'undefined' && typeof qSpec.white !== 'undefined' ?
      setupQueen(qSpec.white) : [7, 3];

    if (typeof this.black !== 'undefined' &&
        typeof this.white !== 'undefined' &&
        this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    let m = []
    for (let ix = 0; ix < N; ix++) {
      m[ix] = [];
      for (let jx = 0; jx < N; jx++) {
        m[ix].push('_ ');
      }
      m[ix][m[ix].length - 1] = m[ix][m[ix].length - 1].replace(' ', '');
    }

    // position white queen (if defined):
    if (typeof this.white !== 'undefined') {
      const [r, c] = this.white;
      m[r][c] = c == N - 1 ? 'W' : 'W ';
    }

    // position black queen (if defined):
    if (typeof this.black !== 'undefined') {
      const [r, c] = this.black;
      m[r][c] = c == N - 1 ? 'B' : 'B ';
    }

    let a = [];
    for (let ix = 0; ix < N; ix++) {
      a.push(m[ix].join(''))
    }
    return a.join('\n');
  }

  get canAttack() {
    if (typeof(this.black) === 'undefined' || typeof(this.white) === 'undefined') return false;

    // same row || same col || same diag
    return (this.white[0] === this.black[0] || this.white[1] === this.black[1] ||
            Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]))
  }
}


const setupQueen = ([row, col] = queen_spec) => {
  if (typeof row !== 'undefined' && typeof col !== 'undefined') {
    checkCoord(row, col);
  }
  return [row, col]
}

const checkCoord = (row, col) => {
  if (row < 0 || row >= N) {
    throw new Error('Queen must be placed on the board');
  }

  if (col < 0 || col >= N) {
    throw new Error('Queen must be placed on the board');
  }
}
