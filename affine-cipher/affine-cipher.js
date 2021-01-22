const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const M = ALPHA.length;
const L2IX = new Map(ALPHA.split('').map((a, ix) => [a, ix]));        // letter / index
const IX2L = new Map([...L2IX.keys()].map((k) => [L2IX.get(k), k]));  // index / letter

const NON_ALPHA_REXP = /[^a-z0-9]/i;
const GRP_SIZE = 5 + 1; // =1 for space char.


const xgcd = (a, b) => {
  let q;
  let [x0, x1, y0, y1] = [0, 1, 1, 0];

  while (a !== 0) {
    [q, a, b] = [Math.floor(b / a), b % a, a];
    [y0, y1] = [y1, y0 - q * y1];
    [x0, x1] = [x1, x0 - q * x1];
  }
  return [b, x0, y0];
}

const gcd = (a, b) => {
  [a, b] = a < b ? [b, a] : [a, b]

  if (b === 0) {
    return a;
  }

  let r = a;
  while (r > 1) {
    r = a % b;
    [a, b] = [b, r];
  }

  return r === 0 ? a : r;
}

const isCoprime = (a) => gcd(a, M) === 1;

const grouping = (s, ch) => (s.length + 1) % GRP_SIZE === 0 ? s + ch + ' ' : s + ch;


export const encode = (phrase, key) => {
  // throw new Error('Remove this statement and implement this function');
  const [a, b] = [key.a, key.b];

  if (!isCoprime(a)) {
    throw new Error('a and m must be coprime.'); // `a: ${a} and M: ${M} must be co-prime`
  }

  const encode_fn = (x) => {
    return (x < '0' || x > '9') ? IX2L.get((a * L2IX.get(x.toLowerCase()) + b) % M) : x;
  }

  const ary = phrase.split('')
        .filter((x) => !x.match(NON_ALPHA_REXP))
        .map((x) => encode_fn(x));

  return ary.reduce((s, c) => grouping(s, c), ' ').trim();
};

export const decode = (phrase, key) => {
  const [a, b] = [key.a, key.b];

  if (!isCoprime(a)) {
    throw new Error('a and m must be coprime.'); // `a: ${a} and M: ${M} must be co-prime`)
  }

  const inv_a = xgcd(a, M)[1];

  const decode_fn = (x) => {
    const ix = (inv_a * (L2IX.get(x.toLowerCase()) - b)) % M
    return (x < '0' || x > '9') ? IX2L.get(ix < 0 ? M + ix : ix) : x;
  }

  return phrase.split('')
    .filter((x) => !x.match(NON_ALPHA_REXP))
    .map((x) => decode_fn(x))
    .join('');
};
