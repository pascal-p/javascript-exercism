//
// the 'Diffie Hellman' exercise.
//

// const random = require('random')

export class DiffieHellman {
  constructor(p, g) {
    checkFactor(p);
    checkFactor(g);
    // this._privKey = random.int(3, p-1);
    this._p = p;
    this._g = g;
  }

  getPublicKeyFromPrivateKey(privKey) {
    checkKey(privKey, this._p);
    return this._g ** privKey % this._p; // g ^ this._privKey % p;
  }

  getSharedSecret(privKey, pubKey) {
    checkKey(privKey, this._p);
    checkKey(pubKey, this._p, 'pub');
    return pubKey ** privKey % this._p;
  }
}

const checkFactor = (f) => {
  if (f < 2 || !isPrime(f)) {
    throw new Error("factor must be a prime number >= 2");
  }
}

const checkKey = (pKey, p, tag='priv') => {
  if (pKey < 2 || pKey >= p) {
    throw new Error(`${tag} Key must be an integer >= 2`);
  }
}

const isPrime = (p) => {
  // not efficient...
  if (p % 2 === 0 && p > 2) {
    return false;
  }
  const sp = Math.floor(Math.sqrt(p));
  for (let d=3; d < sp; d += 2) {
    if (p % d === 0) {
      return false;  // found a divisor, hence p is not a prime
    }
  }
  // could not find any divisor among possible one,
  // hence p must be a prime number
  return true;
}
