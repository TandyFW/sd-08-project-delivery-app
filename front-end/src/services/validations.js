export const emailVerify = (email) => (
  /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)
);

const MAX_LENGTH_PASSWORD = 6;

export const passwordVerify = (password) => (
  password.length >= MAX_LENGTH_PASSWORD
);
