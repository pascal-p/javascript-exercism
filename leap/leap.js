//
// This is the file for the 'Leap' exercise.
//

export const isLeap = (year) => {
  // throw new Error('Remove this statement and implement this function');

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
};
