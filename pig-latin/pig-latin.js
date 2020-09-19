//
// This is the file for the 'Pig Latin' exercise.
//

export class Translator {
  static translate(words) {
    // word or words

    if (words === undefined) { throw new Error('Not a word nor a sentence!'); }

    if (typeof(words) === 'string' && !/\s/.test(words) ) {
      return Translator.translateOne(words)
    }
    else if (typeof(words) === 'string') {
      // multi words separated by spaces
      return words.split(/\s+/).map(word => Translator.translateOne(word)).join(' ');
    }

    throw new Error('Not a word nor a sentence!');
  }

  static translateOne(word) {
    if (/^[aeiou]|^(xr|yt)/i.test(word)) {
      // starting with a vowel sound
      return word + 'ay';
    }

    else if (/^y[aeiou]/i.test(word)) {
      return word.replace(/^(y)(.*)$/, '$2$1ay')
    }

    else if (/^(thr|sch)[aeiou]/i.test(word)) {
      return word.replace(/^(.{3})(.*)$/, '$2$1ay')
    }

    else if (/^[sy]qu|^(ch|qu|th)/i.test(word)) {
      return word.replace(/^(.qu|ch|qu|th)(.*)$/, '$2$1ay')
    }

    else if (/^(p|r|s|t)hy/i.test(word)) {
      return word.replace(/^(.h)(y.*)$/, '$2$1ay')
    }

    else if (/^my$/i.test(word)) {
      return word.replace(/^(m)(y.*)$/, '$2$1ay')
    }

    else if (/^[bcdfghjklmnpqrstvwxyz]/i.test(word)) {
      // starting with a consonnant sound
      return word.replace(/^(.)(.*)$/, '$2$1ay')
    }

    else {
      // other...
    }
  }
}
