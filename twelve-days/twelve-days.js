//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PREFIX = "On the <nth> day of Christmas my true love gave to me:"

const PRESENTS = new Array(
  ['first', 'a Partridge in a Pear Tree'],
  ['second', 'two Turtle Doves'],
  ['third', 'three French Hens'],
  ['fourth', 'four Calling Birds'],
  ['fifth', 'five Gold Rings'],
  ['sixth', 'six Geese-a-Laying'],
  ['seventh', 'seven Swans-a-Swimming'],
  ['eighth', 'eight Maids-a-Milking'],
  ['ninth', 'nine Ladies Dancing'],
  ['tenth', 'ten Lords-a-Leaping'],
  ['eleventh', 'eleven Pipers Piping'],
  ['twelfth', 'twelve Drummers Drumming']
);

export const recite = (from, to=undefined) => {
  if (from < 1) {
    throw new Error('from must be  >= 1!')
  }

  if (to === undefined) {
    return oneString(from);
  }

  return "NADA";
};

const oneString = (from) => {
  let prefix = PREFIX;
  prefix = prefix.replace('<nth>', PRESENTS[from - 1][0]);

  let ary = []
  for (let ix=from - 1; ix > 0; ix--) {
    ary.push(PRESENTS[ix][1]);
  }

  let str = "";
  if (from > 1) {
    str = ary.join(", ");
    str = str.concat(', and ', PRESENTS[0][1]);
  }
  else {
    str = ary.join("") + PRESENTS[0][1];
  }

  const res = prefix + " " + str + ".\n";
  return res;
};
