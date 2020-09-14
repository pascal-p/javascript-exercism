//
// file for the 'ISBN Verifier' exercise.
//

const ISBN_LEN = 10;
const ISBN_REXP = /^\d{9}[0-9X]$/;

export const isValid = (isbn) => {
  if (isbn.length !== ISBN_LEN && isbn.length !== ISBN_LEN + 3) { return false; }

  isbn = isbn.replace(/\-/g, '');
  if (! ISBN_REXP.test(isbn)) { return false; }

  // assume well formed ISBN from this point
  let [sum, _t]  = isbn.split('').reduce(
    ([s0, s1], ch) => {
      s1 += ch >= '0' && ch <= '9' ? parseInt(ch) : 10;
      s0 += s1;
      return [s0, s1];
    },
    [0, 0]
  );

  return sum % 11 === 0;
};


// Extension
