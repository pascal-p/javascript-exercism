/* eslint-disable no-new */
import { Cipher } from './simple-cipher';

describe('Random key cipher', () => {
  const cipher = new Cipher();

  test('can encode', () => {
    // Here we take advantage of the fact that plaintext of "aaa..."
    // outputs the key. This is a critical problem with shift ciphers, some
    // characters will always output the key verbatim.
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  });

  test('can decode', () => {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  });

  test('is reversible', () => {
    // I.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });

  test('key is made only of lowercase letters', () => {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });
});

describe('Exceptions', () => {

  test('exception on bad key', () => {
    expect(() =>  {
      new Cipher('AB123Zsdsadasd456');
    }).toThrow('Expecting only Latin lower case characters');
  });

  test('exception on bad input to encode', () => {
    expect(() =>  {
      const cipher = new Cipher('whateverthekeyis');

      cipher.encode('I Am a Panda Bear!');
    }).toThrow('Expecting only Latin lower case characters');
  });

  test('exception on bad input to decode', () => {
    expect(() =>  {
      const cipher = new Cipher('whateverthekeyis');

      cipher.decode('I Am a Panda Bear!');
    }).toThrow('Expecting only Latin lower case characters');
  });
});

describe('Substitution cipher', () => {
  const key = 'abcdefghij';
  const cipher = new Cipher(key);

  test('can encode', () => {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  });

  test('can decode', () => {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  });

  test('can decode with mixedcase', () => {
    expect(cipher.decode('abCdEFgHij', false)).toEqual('aaaaaaaaaa');
  });

  test('can decode with, ignoring non latin chars', () => {
    expect(cipher.decode('abC dEFg, Hij', false)).toEqual('aaaaaaaaaa');

    // do not expect pure reversibility
  });

  test('is reversible', () => {
    // i.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij');
  });

  test('is nearly-reversible if non latin chars are added', () => {
    //
    expect(cipher.decode(cipher.encode('abc def ghi, jhk', false), false)).toEqual('abc def ghi, jhk'.replace(/[\s\t,]+/g, ''));
  });

  test('can double shift encode', () => {
    expect(new Cipher('iamapandabear').encode('iamapandabear'))
      .toEqual('qayaeaagaciai');
  });

  test('can wrap on encode', () => {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  });

  test('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  test('can encode messages longer than the key', () => {
    expect(new Cipher('abc').encode('iamapandabear'))
      .toEqual('iboaqcnecbfcr');
  });

  test('can decode messages longer than the key', () => {
    expect(new Cipher('abc').decode('iboaqcnecbfcr'))
      .toEqual('iamapandabear');
  });

  //
  test('identity encoding/decoding', () => {
    const key = 'aaaaaaaaaaaaaaaaaa';
    const cipher = new Cipher(key);

    expect(cipher.encode('iamapandabear')).toEqual('iamapandabear');
    expect(cipher.decode(cipher.encode('iamapandabear'))).toEqual('iamapandabear');
  });

  test('can encode with repeated letter key', () => {
    const key = 'ddddddddddddddddd';
    const cipher = new Cipher(key);

    expect(cipher.encode('iamapandabear')).toEqual('ldpdsdqgdehdu');

    expect(cipher.decode(cipher.encode('iamapandabear'))).toEqual('iamapandabear');
    expect(cipher.decode(cipher.encode('ldpdsdqgdehdu'))).toEqual('ldpdsdqgdehdu');
  });

});
