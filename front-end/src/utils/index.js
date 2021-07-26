const {
  isValidUserForRegistration } = require('./validations');
const { request } = require('./request');

module.exports = {
  isValidUserForRegistration,
  request,
};
