/*
Add the mine counts to a completed Minesweeper board.

Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, vertically, diagonally) to a square.

In this exercise you have to create some code that counts the number of mines adjacent to a given empty square and replaces that square with the count.

The board is a rectangle composed of blank space (' ') characters. A mine is represented by an asterisk ('*') character.

If a given space has no adjacent mines at all, leave that square blank.
Examples

For example you may receive a 5 x 4 board like this (empty spaces are represented here with the '·' character for display on screen):
·*·*·
··*··
··*··
·····

And your code will transform it into this:
1*3*1
13*31
·2*2·
·111·

 */

export const annotate = (input) => {
  // throw new Error('Remove this statement and implement this function');
  if (input.length == 0) return [];

  if (input.length == 1 && input[0].length == 0) return [''];

  const n = input.length;
  let res = [];

  for (let ix = 0; ix < n; ix++) {
    res.push('');
  }

  for (let ix = 0; ix < n; ix++) {
    let row = '';

    for (let jx = 0; jx < input[ix].length; jx++) {
      if (input[ix][jx] == '*') {
        row = row.concat('*');
        continue;
      }
      else { // ' '
        const neighbors = getNeighbors(input, ix, jx, n);
        const count = neighbors.reduce((sum, [r, c]) => sum += input[r][c] == '*' ? 1 : 0, 0);
        row = row.concat(count == 0 ? ' ' : count);
      }
    }

    res[ix] = row;
  }

  return res;
};

const getNeighbors = (input, ix, jx, n) => {
  let neighbors = [];
  for (let kix=ix-1; kix <= ix+1; kix++) {
    if (kix < 0 || kix >= n) continue;

    for (let kjx=jx-1; kjx <= jx+1; kjx++) {
      if (kjx < 0 || kjx >= input[ix].length) continue;
      if (kix == ix && kjx == jx) continue;
      neighbors.push([kix, kjx]);
    }
  }

  return neighbors;
}
