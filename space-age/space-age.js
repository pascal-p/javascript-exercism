/*
  Given an age in seconds, calculate how old someone would be on:

    Mercury: orbital period 0.2408467 Earth years
    Venus: orbital period 0.61519726 Earth years

    Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds

    Mars: orbital period 1.8808158 Earth years
    Jupiter: orbital period 11.862615 Earth years
    Saturn: orbital period 29.447498 Earth years
    Uranus: orbital period 84.016846 Earth years
    Neptune: orbital period 164.79132 Earth years

  So if you were told someone were 1,000,000,000 seconds old, you should be able
  to say that they're 31.69 Earth-years old.
*/

const ORBITAL_PERIOD = new Map([
  ['Mercury', 0.2408467],
  ['Venus', 0.61519726],
  ['Earth', 1.0],
  ['Mars', 1.8808158],
  ['Jupiter', 11.862615],
  ['Saturn', 29.447498],
  ['Uranus', 84.016846],
  ['Neptune', 164.79132]
]);

const EARTH_PERIOD_SEC = 31557600;

export const age = (where, age) => {
  // calc. relative to Earth

  if (typeof where !== 'string') {
    throw new Error('Expecting a string');
  }

  if (typeof age !== 'number') {
    throw new Error('Expecting an integer or a float');
  }

  if (age < 0) {
    throw new Error('Expecting age to be > 0!');
  }

  const ix = [...ORBITAL_PERIOD.keys()].indexOf(capitalize(where));
  if (ix === -1) {
    throw new Error('Expecting where parameter to eb a planet of our Solar System');
    // and yes Pluto is no longer classified as a planet
  }

  const res = age / ORBITAL_PERIOD.get(capitalize(where)) / EARTH_PERIOD_SEC;
  return Math.trunc(Math.round(res * 100.)) / 100.;
};

const capitalize = (str) => {
  if (typeof str === 'undefined') return '';

  const firstLetter = str[0] || str.charAt(0);
  return firstLetter ? firstLetter.toUpperCase() + str.substr(1) : '';
}
