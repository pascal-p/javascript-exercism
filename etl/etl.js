//
// file for the 'ETL' exercise.
//

export const transform = (input) => {
  return Object.getOwnPropertyNames(input).reduce(
    (obj, key) => {
      input[key].reduce(
        (obj, v) => {
          obj[v.toLowerCase()] = parseInt(key);
          return obj;
        },
        obj           // init value
      )
      return obj
    },
    {}                // init value
  );
};
