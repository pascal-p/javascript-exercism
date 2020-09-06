//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const LEN_ALPHA = ALPHA.length;

const HSH = ALPHA.split('').reduce(        // { a → 0, b → 1, c → 2, d → 3, e → 4, ... }
  (hsh, ch, ix) => hsh.set(ch, ix),
  new Map()
);

const REV_HSH = [...HSH.entries()].reduce( // { 0 → "a", 1 → "b", 2 → "c", 3 → "d", 4 → "e", ... }
  (hsh, [k, v]) => hsh.set(v, k),
  new Map());

const getRandomInt = (min=0, max=LEN_ALPHA+1) => Math.floor(Math.random() * (max - min) + min);

const check = input => {
  if (!input.match(/^[a-z]+$/)) { throw new Error('Expecting only Latin lower case characters'); }
}

export class Cipher {
  constructor(key) {
    if (key === undefined) {
      key = '';
      for(let ix=0; ix < 100; ix++) {
        key += REV_HSH.get(getRandomInt());
      }
      this._key = key;
    }
    else {
      check(key);
      this._key = key.toLowerCase();  // a string
    }
    this._klen = this._key.length;  // len. of key
  }

  encode(plain, canThrow=true) {
    if (canThrow) { check(plain); }
    return this._transcode(plain, 'encode');
  }

  decode(ciphered, canThrow=true) {
    if (canThrow) { check(ciphered); }
    return this._transcode(ciphered, 'decode');
  }

  get key() {
    return this._key;
  }

  //
  // internal helpers
  //
  _transcode(input, kw) {
    // input can contains non latin chars that we ignore...
    return input.toLowerCase().split("")
      .filter(ch => ch.match(/[a-z]/))
      .map(
        (ch, ix) => REV_HSH.get(kw === 'encode' ? this._trans(ch, ix) : this._reverseTrans(ch, ix))
      ).join('');
  }

  _reverseTrans(ch, ix) {
    let jx = HSH.get(ch) - HSH.get(this._key.charAt(ix % this._klen));
    jx = jx < 0 ? LEN_ALPHA + jx : jx;
    return jx % LEN_ALPHA;
  }

  _trans(ch, ix) {
    let jx = HSH.get(ch) + HSH.get(this._key.charAt(ix % this._klen))
    return jx % LEN_ALPHA;
  }
}
