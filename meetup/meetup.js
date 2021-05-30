/*
  Calculate the date of meetups.

*/

const DESCRIPTORS = new Map([
  ['first',   [1,  2,  3,  4,  5,  6,  7]],
  ['second',  [8,  9, 10, 11, 12, 13, 14]],
  ['third',  [15, 16, 17, 18, 19, 20, 21]],
  ['fourth', [22, 23, 24, 25, 26, 27, 28]],
  ['fifth',  [29, 30, 31]],
  ['last',   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]],
  ['teenth', [13, 14, 15, 16, 17, 18, 19]]
]);

const WEEKDAYS = new Map(
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d, ix) => [d, ix])
);

const CAP_TRANS = 'A'.charCodeAt(0) - 'a'.charCodeAt(0);

const MONTH_DUR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//                  0   1   2   3   4   5   6   7   8   9  10  11
//                Jan Feb Mar                                 Dec

export const meetup = (year, month, descriptor, weekday) => {
  // year integer > 2000
  if (typeof year !== 'number' || year < 2000) {
    throw new Error("Expecting year to be an integer >= 2000");
  }
  year = Math.trunc(year);

  // month integer [1, 12]
  if (typeof month !== 'number' || month < 1 || month > 12) {
    throw new Error("Expecting month to be an 1 <= integer <= 12");
  }
  month = Math.trunc(month);

  // descriptor (String) in DESCRIPTORS
  if (typeof descriptor !== 'string' || !DESCRIPTORS.has(normalizeDesc(descriptor))) {
    throw new Error(`Expecting descriptor to be one of: ${Array.from(DESCRIPTORS.keys())}`);
  }
  descriptor = normalizeDesc(descriptor);

  // weekday (String) in WEEKDAYS (regardless of case)
  if (typeof descriptor !== 'string' || !WEEKDAYS.has(normalizeWeekDay(weekday))) {
    throw new Error(`Expecting weekday to be one of: ${Array.from(WEEKDAYS.keys())}`);
  }
  weekday = normalizeWeekDay(weekday);

  const weekdayIx = WEEKDAYS.get(weekday)
  let date;

  for (let valDesc of DESCRIPTORS.get(descriptor)) {
    date = new Date(year, month - 1, valDesc)
    // console.log("Trying: ", valDesc,  " => ", date, " weekday: ", date.getDay(), " cmp: ", weekdayIx);

    if (date.getDay() == weekdayIx) {
      // FIXME: leap year

      if (descriptor == "last" && valDesc + 7 <= monthDur(month, year)) {
        date = new Date(year, month - 1, valDesc + 7)
        if (date.getDay() == weekdayIx) {
          break;
        }
        continue;
      }
      break;
    }
  }

  return date;
};

const normalizeDesc = (descriptor) => descriptor.toLowerCase();

const normalizeWeekDay = (weekday) => capitalize(weekday.toLowerCase());

const monthDur = (month, year=undefined) => {
  if (month !== 2) {
    return MONTH_DUR[month - 1];
  }

  // month == 2 and year given
  if (typeof year === 'undefined') {
    throw new Error("Year must be defined for February");
  }

  return MONTH_DUR[month - 1] + leapYearAdd(year);
}

const leapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const leapYearAdd = (year) =>  leapYear(year) ? 1 : 0

const capitalize = (word) => {
  if (word[0] >= 'A' && word[0] <= 'Z') return word;

  if (word[0] >= 'a' && word[0] <= 'z') {
    return String.fromCharCode(word.charCodeAt(0) + CAP_TRANS).concat(word.slice(1, word.length));
  }

  return word; // as it is
}
