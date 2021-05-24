/*
  Clean up user-entered phone numbers so that they can be sent SMS messages.

  The North American Numbering Plan (NANP) is a telephone numbering system used by many countries in North America like the United States, Canada or Bermuda. All NANP-countries share the same international country code: 1.

  NANP numbers are ten-digit numbers consisting of
  - a three-digit Numbering Plan Area code, commonly known as area code, followed by
  - a seven-digit local number.
  The first three digits of the local number represent the exchange code, followed by the unique four-digit number which is the subscriber number.

  The format is usually represented as
  (NXX)-NXX-XXXX
  where N is any digit from 2 through 9 and X is any digit from 0 through 9.

  Your task is to clean up differently formatted telephone numbers by removing punctuation and the country code (1) if present.

  For example, the inputs
    +1 (613)-995-0253
    613-995-0253
    1 613 995 0253
    613.995.0253

    should all produce the output: 6139950253

  Note: As this exercise only deals with telephone numbers used in NANP-countries,
  only 1 is considered a valid country code.
 */

const PHONE_LEN = 11;                                // comprising prefix
const OPT_CHAR_RE = /^\+1|^1|\s+|\(|\)|\-/g;
const NON_ALLOWED_RE = /(?:[^0-9]+)/g;
const PH_NUM_RE = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
const PUNCT_RE = /[!?\.,;:@_]/;
const LETTER_RE = /[a-b]/i;


export const clean = (str) => {
  // Area Code - 3 digits => leftist one from 2..9
  // Exch Code - 3 digits => leftist one from 2..9
  // Rest      - 4 digits

  if (typeof str != 'string') {
    throw new Error('Expecting a string representing a phone number for NANP-countries only');
  }

  if (str.length == PHONE_LEN && !str.startsWith('1')) {
    throw new Error('11 digits must start with 1')
  }

  // 1. remove optional chars
  let ph_str = str.replace(OPT_CHAR_RE, '');

  // 2. check for non-allowed characters
  ph_str = check4NonAllowedChar(ph_str);

  if (ph_str.length > PHONE_LEN - 1) {
    throw new Error('More than 11 digits');
  }

  ph_str = ph_str.replace(NON_ALLOWED_RE, '');

  if (ph_str.length < PHONE_LEN - 1) {
    throw new Error('Incorrect number of digits');
  }

  if (! ph_str.match(PH_NUM_RE)) {                  // Validation of Area + Exch codes
    checkAreaCode(ph_str);

    checkExchCode(ph_str);

    // fall-back
    throw new Error("This phone number is NOT valid");
  }

  return ph_str;
};

const check4NonAllowedChar = (ph_str) => {
  const ary = ph_str.match(NON_ALLOWED_RE);

  if (ary !== null && ary.length > 0) {             // Match on  non-allowed characters

    let pass = false

    if (ary.every((x) => x.match(/\./))) {          // if only dot => OK
      ph_str = ph_str.replace(NON_ALLOWED_RE, '');
      pass = true;
    }
    else if (ary.some((x) => x.match(PUNCT_RE))) {  // Punctuation case
      throw new Error('Punctuations not permitted');
    }
    else if (ary.some((x) => x.match(LETTER_RE))) { // Letters
      throw new Error('Letters not permitted');
    }

    if (!pass)
      throw new Error("This phone number contains invalid characters");

  }
  return ph_str;
}

const checkAreaCode = (ph_str) => {
  if (ph_str.startsWith('0')) {
    throw new Error('Area code cannot start with zero');
  }
  else if (ph_str.startsWith('1')) {
    throw new Error('Area code cannot start with one');
  }
  return
}

const checkExchCode  = (ph_str) => {
  if (ph_str.charAt(3) == '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  else if (ph_str.charAt(3) == '1') {
    throw new Error('Exchange code cannot start with one');
  }
  return
}
