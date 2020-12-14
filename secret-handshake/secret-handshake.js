//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BASE = [ 16, 8, 4, 2, 1 ]
const SEC_HSHAKE_CODE = { 1: 'wink', 2: 'double blink', 4: 'close your eyes', 8: 'jump', 16: 'reverse' }

export const commands = (value) => {
  if (typeof(value) !== "number" ||
      !Number.isInteger(value) ||
      value < 0) {
    throw new Error("value must be a non negative integer");
  }

  if (value === 0 || value % BASE[0] === 0) { return [] };

  let ix = 1;
  let actions = [];
  let method = 'unshift';

  [value, method] = case16(value, method);

  while (value >= 1) {
    let count = 0;

    if (value >= BASE[ix]) {
      value -= BASE[ix];
      count++;
    }

    ix++;

    if (count > 0) {
      const action = SEC_HSHAKE_CODE[BASE[ix - 1]];
      (method === 'unshift') ? actions.unshift(action) : actions.push(action);
    }
  }

  return actions;
};

const case16 = (value, method) => {
  let count = 0;

  while (value >= BASE[0]) {
    value -= BASE[0];
    count++;
  }

  if (count % 2 === 1) { method = 'push'; }

  return [value, method]
}
