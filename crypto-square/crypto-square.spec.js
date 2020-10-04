import { Crypto } from './crypto-square';

describe('Crypto', () => {
  test('normalize strange characters', () => {
    const crypto = new Crypto('s#$%^&plunk');
    expect(crypto.normalizePlaintext()).toEqual('splunk');
  });

  test('normalize numbers', () => {
    const crypto = new Crypto('1, 2, 3 GO!');
    expect(crypto.normalizePlaintext()).toEqual('123go');
  });

  test('size of small square', () => {
    const crypto = new Crypto('1234');
    expect(crypto.size()).toEqual(2);
  });

  test('size of small square with additional non-number chars', () => {
    const crypto = new Crypto('1 2 3 4');
    expect(crypto.size()).toEqual(2);
  });

  test('size of slightly larger square', () => {
    const crypto = new Crypto('123456789');
    expect(crypto.size()).toEqual(3);
  });

  test('size of non-perfect square', () => {
    const crypto = new Crypto('123456789abc');
    expect(crypto.size()).toEqual(4);
  });

  test('plain text segments', () => {
    const crypto = new Crypto('Never vex thine heart with idle woes');
    expect(crypto.plaintextSegments()).toEqual(['neverv', 'exthin', 'eheart', 'withid', 'lewoes']);
  });

  test('plain text segments', () => {
    const crypto = new Crypto('ZOMG! ZOMBIES!!!');
    expect(crypto.plaintextSegments()).toEqual(['zomg', 'zomb', 'ies']);
  });

  test('cipher text', () => {
    const crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
    expect(crypto.ciphertext()).toEqual('tasneyinicdsmiohooelntuillibsuuml');
  });

  test('cipher text', () => {
    const crypto = new Crypto('We all know interspecies romance is weird.');
    expect(crypto.ciphertext()).toEqual('wneiaweoreneawssciliprerlneoidktcms');
  });

  test('cipher texts', () => {
    const spec = [
      ["The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
       "tbwfaaneeo hlootyosof eeroisfapd wmllcstnlo hwdssohdeu oiiaacewsb ltsnremiot ehtderssfs pthfateeu  rhaalalrl  oetnwivpl "],
      ["Men are born ignorant, not stupid. They are made stupid by education.",
       "mrnpruu entiepc nindmia agotadt rnthdbi eoseeyo brtysen oauatd "
      ],
      ["The fact that an opinion has been widely held is no evidence whatever that it is not utterly absurd; indeed in view of the silliness of the majority of mankind, a widely spread belief is more likely to be foolish than sensible.",
       "tpivrtesmialie hiditeeiandis  enedhrdljdbkh  filealiloaeet  aoyntynirwllh  cnhciavniiiya  theetbietdetn  talwisesyefos  hsdhsuwsolibe  abianroofysen  testodffmsmfs  aenetittapooi  nnovunhhnrrob  oweetdeekeell "],
      ["It Has Been Said That Man Is A Rational Animal. All My Life I Have Been Searching For Evidence Which Could Support This.",
       "iailmehdcr tisaybieot hdanlennut atriiegclh shamfnfedi bataesowss etilierhu  emoahaeip  nanlarvcp  snalvciho "]
    ];

    for (const [src, exp] of spec) {
      let crypto = new Crypto(src);
      expect(crypto.ciphertext(' ')).toEqual(exp);
    }
  });
});
