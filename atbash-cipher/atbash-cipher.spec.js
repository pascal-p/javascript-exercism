import { encode, decode } from './atbash-cipher';

const LongStr = `
Chor. Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross'd lovers take their life;
Whose misadventur'd piteous overthrows
Doth with their death bury their parents' strife,
The fearful passage of their death-mark'd love,
And the continuance of their parents' rage,
Which, but their children's end, naught could remove,
Is now the two hours' traffic of our stage;
The which if you with patient ears attend,
What here shall miss, our toil shall strive to mend.
`

describe('Atbash Cipher', () => {
  describe('encode', () => {
    test('encode yes', () => {
      expect(encode('yes')).toEqual('bvh');
    });

    test('encode no', () => {
      expect(encode('no')).toEqual('ml');
    });

    test('encode OMG', () => {
      expect(encode('OMG')).toEqual('lnt');
    });

    test('encode spaces', () => {
      expect(encode('O M G')).toEqual('lnt');
    });

    test('encode mindblowingly', () => {
      expect(encode('mindblowingly')).toEqual('nrmwy oldrm tob');
    });

    test('encode numbers', () => {
      const messageToEncode = 'Testing,1 2 3, testing.';
      const expected = 'gvhgr mt123 gvhgr mt';
      expect(encode(messageToEncode)).toEqual(expected);
    });

    test('encode deep thought', () => {
      const messageToEncode = 'Truth is fiction.';
      const expected = 'gifgs rhurx grlm';
      expect(encode(messageToEncode)).toEqual(expected);
    });

    test('encode all the letters', () => {
      const messageToEncode = 'The quick brown fox jumps over the lazy dog.';
      const expected = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      expect(encode(messageToEncode)).toEqual(expected);
    });

    test('encode long string', () => {
      const expected = `xslig dlslf hvslo whylg szorp vrmwr tmrgb rmuzr ievil mzdsv ivdvo zblfi hxvmv uilnz mxrvm gtifw tvyiv zpglm vdnfg rmbds vivxr eroyo llwnz pvhxr erosz mwhfm xovzm uilnu ligsg svuzg zoolr mhlug svhvg dlulv hzkzr iluhg zixil hhwol evihg zpvgs vrior uvdsl hvnrh zwevm gfiwk rgvlf hlevi gsild hwlgs drgsg svriw vzgsy fibgs vrikz ivmgh hgiru vgsvu vziuf okzhh ztvlu gsvri wvzgs nzipw olevz mwgsv xlmgr mfzmx vlugs vrikz ivmgh iztvd srxsy fggsv rixsr owivm hvmwm zftsg xlfow ivnle vrhml dgsvg dlslf ihgiz uurxl ulfih gztvg svdsr xsrub lfdrg skzgr vmgvz ihzgg vmwds zgsvi vhszo onrhh lfigl rohsz oohgi revgl nvmw`
      expect(encode(LongStr)).toEqual(expected);
    });
  });

  describe('decode', () => {
    test('decode exercism', () => {
      expect(decode('vcvix rhn')).toEqual('exercism');
    });

    test('decode a sentence', () => {
      const messageToDecode = 'zmlyh gzxov rhlug vmzhg vkkrm thglm v';
      const expected = 'anobstacleisoftenasteppingstone';
      expect(decode(messageToDecode)).toEqual(expected);
    });

    test('decode numbers', () => {
      expect(decode('gvhgr mt123 gvhgr mt')).toEqual('testing123testing');
    });

    test('decode all the letters', () => {
      const messageToDecode = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      const expected = 'thequickbrownfoxjumpsoverthelazydog';
      expect(decode(messageToDecode)).toEqual(expected);
    });

    test('decode with too many spaces', () => {
      expect(decode('vc vix    r hn')).toEqual('exercism');
    });

    test('decode with no spaces', () => {
      const messageToDecode = 'zmlyhgzxovrhlugvmzhgvkkrmthglmv';
      const expected = 'anobstacleisoftenasteppingstone';
      expect(decode(messageToDecode)).toEqual(expected);
    });
  });

  describe('decode/decode', () => {
    for (const txt of ["yes", "omg", "OMG", "mindblowingly",
                       "I M A G I N E!",
                       "Truth is fiction.",
                       "The quick brown fox jumps over the lazy dog.",
                       "Testing,1 2 3, testing.",
                       "zmlyhgzxovrhlugvmzhgvkkrmthglmv",
                       "anobstacleisoftenasteppingstone",
                       "An obstacle is often a stepping stone",
                       LongStr]) {

      expect(decode(encode(txt))).toEqual(txt.toLowerCase()
                                          .replace(/[\s\.,\?!;;\+\*\-\/%\$\^&'"]+/g, ''));
    }
  });
});
