module.exports = {
  userNotFound: { err: { status: 404, message: 'User Not Found' } },
  wrongPassword: { err: { status: 401, message: 'Wrong Password' } },
  emailOrNameAlreadyExists: { err: { status: 409, message: 'Conflict' } },
  userNotAuthorized: { err: { status: 401, message: 'Unauthorized' } },
};
