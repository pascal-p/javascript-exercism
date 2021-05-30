//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = new Map([
  [1, 'eggs'],
  [2, 'peanuts'],
  [4, 'shellfish'],
  [8, 'strawberries'],
  [16, 'tomatoes'],
  [32, 'chocolate'],
  [64, 'pollen'],
  [128, 'cats']
]);

const ALL_KEYS = Array.from(ALLERGIES.keys()).sort((a, b) => b - a); // reverse keys order

export class Allergies {
  constructor(val) {
    // Expect a natural integer...
    if (typeof val === 'undefined' || typeof val !== 'number' || val < 0) {
      throw new Error('Expecting a natural integer');
    }

    val = Math.trunc(val);      // if float given...
    val %= 256;                 // ... module 256

    let allergies = new Set();  // collect the allergies
    let keys = [];              // maintain order

    for (let k of ALL_KEYS) {
      if (val >= k) {
        keys.push(k)
        allergies.add(ALLERGIES.get(k))
        val -= k;
      }

      if (val < 0) break;
    }

    this.allergies = allergies;
    this.keys = keys;
  }

  list() {
    return this.keys.reverse().map((k) => ALLERGIES.get(k));
  }

  allergicTo(allergy) {
    // Check validity of allergy? No, lazy approach, it does not matter...
    // ... as we test for presence
    return this.allergies.has(allergy);
  }
}
