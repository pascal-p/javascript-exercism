import { commands } from './secret-handshake';

describe('Secret Handshake', () => {
  describe('Create A Handshake For A Number', () => {
    test('wink for 1', () => {
      expect(commands(1)).toEqual(['wink']);
    });

    test('double blink for 10', () => {
      expect(commands(2)).toEqual(['double blink']);
    });

    test('close your eyes for 100', () => {
      expect(commands(4)).toEqual(['close your eyes']);
    });

    test('jump for 1000', () => {
      expect(commands(8)).toEqual(['jump']);
    });

    test('combine two actions', () => {
      expect(commands(3)).toEqual(['wink', 'double blink']);
    });

    test('reverse two actions', () => {
      expect(commands(19)).toEqual(['double blink', 'wink']);
    });

    test('reversing one action gives the same action', () => {
      expect(commands(24)).toEqual(['jump']);
    });

    test('reversing no actions still gives no actions', () => {
      expect(commands(16)).toEqual([]);
    });

    test('all possible actions', () => {
      expect(commands(15)).toEqual([
        'wink',
        'double blink',
        'close your eyes',
        'jump'
      ]);
    });

    test('reverse all possible actions', () => {
      expect(commands(31)).toEqual([
        'jump',
        'close your eyes',
        'double blink',
        'wink'
      ]);
    });

    test('all possible actions - same as 31', () => {
      expect(commands(63)).toEqual([
        'jump',
        'close your eyes',
        'double blink',
        'wink'
      ]);
    });

    test('just wink', () => {
      expect(commands(65)).toEqual(['wink']);
    });

    test('long code', () => {
      expect(commands(1000)).toEqual(['jump']);
    });

    test('do nothing for zero', () => {
      expect(commands(0)).toEqual([]);
    });

    test('do nothing for multiples of 16', () => {
      expect(commands(64)).toEqual([]);
    });

    test('wrong possible value', () => {
      expect(() => {
        commands(-10)
      }).toThrow(new Error('value must be a non negative integer'));
    });

    test('wrong argument type/1', () => {
      expect(() => {
        commands('foo')
      }).toThrow(new Error('value must be a non negative integer'));
    });

    test('wrong argument type/2', () => {
      expect(() => {
        commands(1.414)
      }).toThrow(new Error('value must be a non negative integer'));
    });

  });
});
