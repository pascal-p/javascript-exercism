//
// the 'Rotational Cipher' exercise.
//

const SpaceOrPunctOrDigits = [' ', '\'', ',', '.', '?', '!', '"', ';', ':',
                              '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const CharCode = new Map([['a', 'a'.charCodeAt()], ['A', 'A'.charCodeAt()]]);

export class RotationalCipher {
  static rotate(str, n) {
    return str.split('').reduce(
      (cipher, ch) => cipher + RotationalCipher._rot(ch, n),
      ''
    );
  }

  static _rot(ch, n) {
    let chCode;

    if (ch >= 'a' && ch <= 'z') {
      chCode = CharCode.get('a')  + (ch.charCodeAt() - CharCode.get('a') + n) % 26;
    }
    else if (ch >= 'A' && ch <= 'Z') {
      chCode = CharCode.get('A')  + (ch.charCodeAt() - CharCode.get('A') + n) % 26;
    }
    else if (SpaceOrPunctOrDigits.includes(ch)) {
      chCode = ch.charCodeAt();
    }
    else {
      throw new Error(`${ch} not in latin alphabet nor punctuation`)
    }

    return String.fromCharCode(chCode);
  }
}
