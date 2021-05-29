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
  [32, 'chocolat'],
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

    val = Math.trunc(val); // if float given...

    // ... module 256
    val %= 256;

    // collect the allergies
    let allergies = new Set();
    for (let k of ALL_KEYS) {
      if (val >= k) {
        allergies.add(ALLERGIES.get(k))
        val -= k;
      }

      if (val < 0) break;
    }

    this.allergies = allergies;
  }

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo(allergy) {
    // TODO: check validity of allergy - lazy approach id does not matter...
    // ... as we test for presence
    return this.allergies.has(allergy);
  }
}
