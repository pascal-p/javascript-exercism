//
// This is file for the 'Sum Of Multiples' exercise.
//

export const sum = (multiples, limit) => {
  let hsh = new Map([[0, 1]]);

  for (const m of multiples) {
    if (m === 0) {
      continue;
    }

    for (let p=m; p < limit; p += m) {
      if (hsh.has(p)) {
        continue
      }

      hsh.set(p, 1)
    }
  }

  return [...hsh.keys()].reduce((s, k) => s += k, 0);
};
