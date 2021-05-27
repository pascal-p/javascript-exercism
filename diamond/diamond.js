/*
  Diamond Exercise
 */

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const rows = (letter) => {

  if (typeof letter !== 'string') {
    throw new Error('Only letters A-Z are considered');
  }
  letter = letter.toUpperCase();

  if (letter === "A") return ["A"];

  const ix = LETTERS.findIndex((x) => x === letter);
  let wdiamond = [];
  let nb_sp = -1;

  // top
  for (let jx=0; jx < ix; jx++) {
    let diamond = " ".repeat(ix - jx);
    diamond = diamond.concat(LETTERS[jx]);

    if (jx > 0) {
      diamond = diamond.concat(" ".repeat(nb_sp));
      diamond = diamond.concat(LETTERS[jx]);
    }
    diamond = diamond.concat(" ".repeat(ix - jx));

    wdiamond.push(diamond);
    nb_sp += 2;
  }

  // middle
  nb_sp = 2 * ix - 1;
  wdiamond.push("".concat(letter, " ".repeat(nb_sp), letter));

  // bottom
  nb_sp -= 2;
  for (let jx=0; jx < ix; jx++) {
    let diamond = " ".repeat(jx + 1);
    diamond = diamond.concat(LETTERS[ix - 1 - jx]);

    if (jx < ix - 1) {
      diamond = diamond.concat(" ".repeat(nb_sp));
      diamond = diamond.concat(LETTERS[ix - 1 - jx]);
    }

    diamond = diamond.concat(" ".repeat(jx + 1));
    wdiamond.push(diamond);
    nb_sp -= 2;
  }

  return wdiamond;
};
