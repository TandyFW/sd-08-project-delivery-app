export const emailVeryfy = (email) => (
  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)
);

const MIN_LENGTH_PASSWORD = 5;

export const passwordVeryfy = (password) => password.length > MIN_LENGTH_PASSWORD;
