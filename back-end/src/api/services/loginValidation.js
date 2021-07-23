const loginValidation = (email, password) => {
  const PASSWORD_MIN_LENGTH = 6;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;

  if (!emailRegex.test(email)) {
    return ({ code: 400, message: '"email" must be a valid email' });
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return ({ code: 400, message: '"password" length must be 6 characters long' });
  }
  return false;
};

module.exports = { loginValidation };
