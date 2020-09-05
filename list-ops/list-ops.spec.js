import { List } from './list-ops';

describe('create liost from list', () => {
  test('non-empty list of list', () => {
    const list1 = new List([1, 2]);
    const list2 = new List(list1);

    expect(list1).toEqual(list2);
    expect(list2).toEqual(list1);

    expect(list1.isEmpty()).toBe(false);
  });

  test('non-empty list of lists', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([3]);
    const list3 = new List([]);
    const list4 = new List([4, 5, 6]);
    const listOfLists = new List([list1, list2, list3, list4]);

    expect(listOfLists.values).toEqual([list1, list2, list3, list4]);
  });

  test('list to list', () => {
    const list1 = new List([1, 2, 3, 4]);
    const list2 = new List(list1);

    expect(list1).toEqual(list2);

    expect(list1.isEmpty()).toBe(false);
  });

  test('object to list - Exception', () => {
    expect(() =>  {
      new List({'a': 1, 'b': 2});
    }).toThrow('Type not yet managed or incompatible');
  });

});

describe('append entries to a list and return the new list', () => {
  test('empty lists', () => {
    const list1 = new List();
    const list2 = new List();

    expect(list1.append(list2)).toEqual(new List());

    expect(list1.isEmpty()).toBe(true);
    expect(list2.isEmpty()).toBe(true);
  });

  test('empty list to list 1/4', () => {
    const list1 = new List([1, 2, 3, 4]);
    const list2 = new List();
    expect(list1.append(list2)).toEqual(list1);
  });

  test('empty list to list 2/4', () => {
    const list1 = new List([1, 2, 3, 4]);
    const list2 = new List([]);
    expect(list1.append(list2)).toEqual(list1);
  });

   test('empty list to list 3/4', () => {
    const list1 = new List();
    const list2 = new List([1, 2, 3, 4]);
    expect(list1.append(list2)).toEqual(list1);
  });

   test('empty list to list 4/4', () => {
    const list1 = new List([]);
    const list2 = new List([1, 2, 3, 4]);
    expect(list1.append(list2)).toEqual(list1);
  });

  test('non-empty lists', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([2, 3, 4, 5]);
    expect(list1.append(list2).values).toEqual([1, 2, 2, 3, 4, 5]);
  });
});


describe('concat lists and lists of lists into new list', () => {
  test('empty list 1/4', () => {
    const list1 = new List();
    const list2 = new List();
    expect(list1.concat(list2).values).toEqual([]);
  });

  test('empty list 2/4', () => {
    const list1 = new List([]);
    const list2 = new List();
    expect(list1.concat(list2).values).toEqual([]);
  });

  test('empty list 3/4', () => {
    const list1 = new List([]);
    const list2 = new List([]);
    expect(list1.concat(list2).values).toEqual([]);
  });

  test('empty list 4/4', () => {
    const list1 = new List();
    const list2 = new List([]);
    expect(list1.concat(list2).values).toEqual([]);
  });

  test('lists/0', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([4, 5, 6]);

    expect(list1.concat(list2).values).toEqual([1, 2, 4, 5, 6]);
  });

  test('lists', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([3]);
    const list3 = new List([]);
    const list4 = new List([4, 5, 6]);

    expect(list1.concat(list2, list3, list4).values).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('list of lists / 1', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([3]);
    const list3 = new List([]);
    const list4 = new List([4, 5, 6]);
    const listOfLists = new List([list2, list3, list4]);

    expect(list1.concat(listOfLists).values).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('list of lists / 2', () => {
    const list1 = new List([1, 2]);                      // [1, 2]
    const list2 = new List([3]);                         // [3]
    const list3 = new List([]);                          // [1]
    const list4 = new List([4, 5, 6]);
    const listOfLists = new List([list2, list3, list4]); // [[3], [], [4, 5, 6]]

    expect(listOfLists.values).toEqual([list2, list3, list4]);
    expect(listOfLists.concat(list1).values).toEqual([list2, list3, list4, ...list1.values]); // [[3], [], [4, 5, 6], 1, 2]
  });

});


describe('filter list returning only values that satisfy the filter function', () => {
  test('empty list', () => {
    const list1 = new List([]);
    expect(list1.filter(el => el % 2 === 1).values).toEqual([]);
  });

  test('non empty list', () => {
    const list1 = new List([1, 2, 3, 5]);
    expect(list1.filter(el => el % 2 === 1).values).toEqual([1, 3, 5]);
  });
});


describe('returns the length of a list', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.length()).toEqual(0);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.length()).toEqual(4);
  });
});


describe('returns a list of elements whose values equal the list value transformed by the mapping function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.map(el => ++el).values).toEqual([]);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 3, 5, 7]);
    expect(list1.map(el => ++el).values).toEqual([2, 4, 6, 8]);
  });
});


describe('folds (reduces) the given list from the left with a function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.foldl((acc, el) => el / acc, 2)).toEqual(2);
  });

  test('division of integers', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldl((acc, el) => el / acc, 24)).toEqual(64);
  });

  test('sum of integers', () => {
    const list = new List([1, 2, 3, 4,5, 6, 7, 8, 9, 10]);

    expect(list.foldl((acc, el) => el + acc, 0)).toEqual(55);
  });

  test('product of integers', () => {
    const list = new List([1, 2, 3, 4,5, 6, 7, 8, 9, 10]);

    expect(list.foldl((acc, el) => el * acc, 1)).toEqual(3628800);
  });
});


describe('folds (reduces) the given list from the right with a function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.foldr((acc, el) => el / acc, 2)).toEqual(2);
  });

  test('division of integers', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldr((acc, el) => el / acc, 24)).toEqual(9);
  });
});


describe('reverse the elements of a list', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.reverse().values).toEqual([]);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 3, 5, 7]);
    expect(list1.reverse().values).toEqual([7, 5, 3, 1]);
  });

  test('non-empty list of list', () => {
    const list1 = new List([1, 2]);                      // [1, 2]
    const list2 = new List([3]);                         // [3]
    const list3 = new List([]);                          // [1]
    const list4 = new List([4, 5, 6]);
    const listOfLists = new List([list1, list2, list3, list4]); // [[1, 2], [3], [], [4, 5, 6]]

    expect(listOfLists.reverse().values).toEqual([list4, list3, list2, list1]);
  });

});

describe('flatten the elements of a list', () => {
  test('non-empty list', () => {
    const list1 = new List([1, [[3, 5], 7]]);
    const list2 = new List([1, [[3, 5], 7], 8]);

    expect(list1.values).toEqual([1, [[3, 5], 7]]);

    expect(list1.flatten().values).toEqual([1, [3, 5], 7]);
    expect(list2.flatten(2).values).toEqual([1, 3, 5, 7, 8]);
  });

  test('already flatten list', () => {
    const list1 = new List([1, 3, 5, 7]);

    expect(list1.flatten().values).toEqual([1, 3, 5, 7]);
  });

});

describe('push/pop elements to a list', () => {

  test('empty list => list of length >0', () => {
    const list1 = new List();
    const list2 = new List();

    expect(list1.length()).toEqual(0);
    expect(list1.isEmpty()).toBe(true);
    expect(list2.length()).toEqual(0);
    expect(list2.isEmpty()).toBe(true);

    expect(list1.push(10).length()).toEqual(1);
    expect(list2.push(10).push(20).push(30).values).toEqual([10, 20, 30]);
  });

  test('empty list => push, pop => empty list', () => {
    const list = new List();

    expect(list.length()).toEqual(0);

    expect(list.push(10).pop()).toEqual(10);
    expect(list.isEmpty()).toBe(true);

    list.push(10).push(20).pop();    // cannot chain
    expect(list.pop()).toEqual(10);
    expect(list.isEmpty()).toBe(true);
  });

  test('empty list => pop => undefined', () => {
    const list = new List();

    expect(list.isEmpty()).toBe(true);
    expect(list.pop()).toEqual(undefined);
  });

});

describe('push/pop elements to a list', () => {

  test('parity of list element/1', () => {
    const list = new List([28, 40, 62, 74]);

    expect(list.every((elt) => elt % 2 === 0)).toBe(true);
  });

  test('parity of the element of an empty list / trivially true', () => {
    const list = new List();

    // It is vacuously true that all elements of the empty set satisfy any given condition
    expect(list.every((elt) => elt % 2 === 0)).toBe(true);
  });

});

describe('unique elements to a list', () => {

  test('non empty list of repeated elements', () => {
    const ary = [62, 10, 40, 62, 74, 10, 10, 10, 40, 62];
    const list1 = new List(ary);
    const list2 = new List(ary);

    expect(list1.length()).toEqual(ary.length);
    expect(list2.length()).toEqual(ary.length);

    expect(list1.unique().length()).toEqual(4);
    expect(list2.unique().values).toEqual([62, 10, 40, 74]);
  });

  test('non empty list of repeated elements / idempotence', () => {
    const ary = [10, 10, 10, 20, 20, 30];
    const list = new List(ary);

    expect(list.unique().unique().values).toEqual([10, 20, 30]);
  });

});
