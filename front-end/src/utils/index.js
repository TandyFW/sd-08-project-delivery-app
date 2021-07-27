const {
  isValidUserForRegistration, isValidForLogin } = require('./validations');
const { request } = require('./request');

module.exports = {
  isValidUserForRegistration,
  isValidForLogin,
  request,
};
