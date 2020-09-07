//
// the 'Atbash Cipher' exercise.
//

const GROUP_FACT = 5;
const CharCode = new Map([['a', 'a'.charCodeAt()], ['z', 'z'.charCodeAt()]]);

export const encode = (input, enc=true) => {
  const offset =  CharCode.get('z') + CharCode.get('a')
  let s = ' ';

  for (const ch of input) {
    if (!ch.match(/[a-zA-Z0-9]/)) { continue; }

    s += (ch >= '0' && ch <= '9') ? ch :
      String.fromCharCode(offset - ch.toLowerCase().charCodeAt());

    if (enc) {
      s += s.length % (GROUP_FACT  + 1) === 0 ?  ' ' : '';
    }
  }

  return s.trimStart().trimEnd();
};

export const decode = (input) => {
  return encode(input, false);
};
