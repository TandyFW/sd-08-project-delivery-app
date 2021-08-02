export const emailVerify = (email) => (
  /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)
);

const MIN_LENGTH_PASSWORD = 6;
export const passwordVerify = (password) => (
  password.length >= MIN_LENGTH_PASSWORD
);

const MAX_LENGHT_NAME = 12;
export const nameVerify = (name) => (
  name.length >= MAX_LENGHT_NAME && name.length > 0
);

export const minProductVerify = (count) => count === 0;
