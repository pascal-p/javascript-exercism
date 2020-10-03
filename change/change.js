//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {

  calculate(coins, target) {
    if (target < 0) throw new Error("Negative totals are not allowed.");

    let res_ary = Array.of(target + 1);
    for (let t=0; t <= target; t++) {
      res_ary[t] = [Number.MAX_SAFE_INTEGER, []];
    }

    res_ary[0][0] = 0;

    for (let t=1; t <= target; t++) {
      for (let c of coins.filter((c) => t - c >= 0)) {
        const [n, ch] = res_ary[t - c];

        if (n !== Number.MAX_SAFE_INTEGER && n + 1 < res_ary[t][0]) {
          res_ary[t] = [n + 1, [c, ...ch]];
        }
      }
    }

    if (this.sum(res_ary, target) !== target) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`);
    }

    return res_ary[target][1];
  }

  sum(ary, t) {
    return ary[t][1].length == 0 ? 0 : ary[t][1].reduce((s, c) => s + c);
  }
}
