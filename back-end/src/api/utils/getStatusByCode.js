module.exports = (code) => {
  const statusByErrorCode = {
    badRequest: 400,
    unauthenticated: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    alreadyExists: 409,
    unprocessableEntity: 422,
    internalError: 500,
  };

  return statusByErrorCode[code] || 500;
};
