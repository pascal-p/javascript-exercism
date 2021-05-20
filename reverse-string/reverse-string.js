/*
  Reverse a string

  For example: input: "cool" output: "looc"
 */

export const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Expecting a string');
  }

  if (str.length == 0) {
    return '';
  }

  /*
  let ary = [];
  for (let ch of str) {
    ary.unshift(ch);
  }
  return ary.join("");
  */

  // using splat operator:
  return [...str].reverse().join("");
};
