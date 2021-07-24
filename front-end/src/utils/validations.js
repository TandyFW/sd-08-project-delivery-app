const MIN_SIZE_PASSWORD = 6;
const MIN_SIZE_NAME = 12;

const isValidName = (name) => name.length >= MIN_SIZE_NAME;

const isValidEmail = (email) => {
  const emailRegex = /^([a-zA-Z0-9_-]+)@([a-zA-Z_-]+).([a-zA-Z_-]+)/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => password.length >= MIN_SIZE_PASSWORD;

const isValidUserForRegistration = (name, email, password) => (
  isValidName(name) && isValidEmail(email) && isValidPassword(password)
);

module.exports = {
  isValidUserForRegistration,
};
