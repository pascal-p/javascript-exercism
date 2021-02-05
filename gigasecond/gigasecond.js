//
// This is only the file for the 'Gigasecond' exercise.
//

const GIGA_SEC = 10**9;

export const gigasecond = (dt) => {
  // console.log("==> utc offset: ",  dt.getTimezoneOffset());
  let dt_utc = new Date(dt);
  return new Date(dt_utc.setUTCSeconds(dt_utc.getUTCSeconds() + GIGA_SEC));
};
