const emailVerify = (email) => {
  const EMAIL_REGEX = /\w+@\w+\.\w+/;
  return EMAIL_REGEX.test(email);
};

const clearStorage = () => localStorage.clear();

export {
  emailVerify,
  clearStorage,
};
