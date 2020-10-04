//
// file for the 'Crypto Square' exercise.
//

export class Crypto {
  constructor(plainTxt) {
    this._src = plainTxt.toLowerCase();
    this._norm = undefined;
    this._n = undefined;
    this._chunks = undefined;
    this._c = undefined;
    this._r = undefined;
    this._ciphered = undefined;
  }

  normalizePlaintext() {
    if (this._norm !== undefined) return this._norm;

    this._norm = this._src.replace(/[^a-z0-9]+/g, '');
    this._n = this._norm.length;
    return this._norm;
  }

  size() {
    if (this._c !== undefined) return this._c;

    if (this._norm === undefined) this.normalizePlaintext();
    const n = this._n;
    const cr = Math.floor((1. + Math.sqrt(1 + 4 * n)) / 2.);

    // r = cr - 1  or r = cr and c = r or c = r + 1
    let r = (cr - 1) <= 0 ? cr : cr - 1;
    let c = r * r >= n ? r : r + 1;
    if (c * r < n) {
      r = cr;
      c = r * r >= n ? r : r + 1;
    }

    this._r = r;
    this._c = c;
    return this._c;
  }

  plaintextSegments(pad='') {
    if (this._chunks !== undefined) return this._chunks;

    if (this._norm === undefined) this.normalizePlaintext();
    if (this._c === undefined) this.size();

    const n = this._n;
    const r = this._r;
    const c = this._c;
    let chunks = [];
    for (let ix=0; ix < n; ix += c) {
      chunks = [...chunks, this._norm.slice(ix, Math.min(ix + r, n) + 1)];
    }
    if (chunks[r - 1].length == 0) {
      this._chunks = chunks.slice(0, r - 1);
    }
    else {
      if (pad.length > 0) {
        const llc = chunks[r - 1].length;
        chunks[r - 1] = chunks[r - 1] + pad.repeat(c - llc);
      }
      this._chunks = chunks;
    }
    return chunks;
  }

  ciphertext(sep='') {
    if (this._ciphered !== undefined) return this._ciphered;

    if (this._chunks === undefined) this.plaintextSegments(sep);
    let ciphered = [];
    const c = this._c;

    for (let ix=0; ix < c; ix++) {
      const s = this._chunks.reduce((str, s_) => str + s_.charAt(ix), "");
      ciphered = ciphered.concat(s);
    }
    this._ciphered = ciphered.join(sep);
    return this._ciphered;
  }

}
