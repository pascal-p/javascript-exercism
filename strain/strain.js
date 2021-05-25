/*
  Implement the keep and discard operation on collections. Given a collection and a predicate on the collection's elements, keep returns a new collection containing those elements where the predicate is true, while discard returns a new collection containing those elements where the predicate is false.

  For example, given the collection of numbers:
    1, 2, 3, 4, 5

  And the predicate:
    is the number even?

  Then your keep operation should produce:
    2, 4

  While your discard operation should produce:
    1, 3, 5

  Note that the union of keep and discard is all the elements.

  The functions may be called keep and discard, or they may need different names in order to not clash with existing functions or concepts in your language.

  Restrictions
  Keep your hands off that filter/reject/whatchamacallit functionality provided by your standard library! Solve this one yourself using other basic tools instead.
*/

export const keep = (coll, pred) => {
  //
  // Not reliable - if predicate happens to be true when no input given
  // we end up returning everything... But actually we should...
  //
  /*
  try {
    if (pred()) {
      // if trivially true => id
      return coll;
    }
  }
  catch {
    // continue...
  }
  */

  let res = [];

  for (let x of coll) {
    if (pred(x)) res.push(x);
  }

  return res;
};

export const discard = (coll, pred) => {
  //
  // Not reliable - if predicate happens to be false when no input given
  // we end up returning everything... But actually we should...
  //
  /*
  try {
    if (!pred(undefined) && !pred()) {
      // if trivially false => id
      console.log(`Trivially false ${pred()}`)
      return coll;
    }
  }
  catch {
    // continue...
  }
  */
  let res = [];

  for (let x of coll) {
    if (pred(x)) continue;

    res.push(x);
  }

  return res;

};
